import {create} from 'zustand';
import * as cmplz_api from "../../utils/api";
import Icon from "../../utils/Icon";
import produce from "immer";
import { __ } from '@wordpress/i18n';

export const UseSyncData = create(( set, get ) => ({
	addedIds:[],
	loadingSyncData: false,
	syncDataLoaded:false,
	errorMessage: '',
	curlExists: true,
	language:'en',
	languages:['en'],
	hasSyncableData: true,
	purposesOptions:[],
	serviceTypeOptions:[],
	syncProgress: 0,
	cookies: [],
	services: [],
	saving:false,
	servicesAndCookies:[],
	showDeletedCookies:false,
	setShowDeletedCookies: (showDeletedCookies) => set({showDeletedCookies}),
	setSyncProgress: (syncProgress) => set({ syncProgress }),
	setLanguage: (language) => set({ language }),
	fetchSyncProgressData: async () => {
		set({loadingSyncData:true,syncDataLoaded:false });
		if (get().cookies.length === 0) {
			//set a placeholder
			let placeholderCookies = [];
			let placeholderCookie;
			for (let i = 1; i < 5; i++) {
				placeholderCookie = {
					ID: -i,
					service:<Icon name = "loading" color = 'grey' />,
					serviceID:-i,
					name: '',
					deleted:0,
					thirdParty:0,
					isMembersOnly:0,
					showOnPolicy:0,
					retention:'',
					cookieFunction:'',
					purpose:'',
					sync:0,
					privacyStatementURL:'',
					language: 'en',
					slug:'loading-placeholder'
				};
				placeholderCookies.push(placeholderCookie);
			}
			set({cookies:placeholderCookies });
		}
		const {syncProgress, cookies, services, curlExists, hasSyncableData, purposesOptions, serviceTypeOptions, defaultLanguage, languages} = await fetchSyncProgressData(false);

		let language = get().language ? get().language : defaultLanguage;
		let purposesByLanguage = purposesOptions && purposesOptions.hasOwnProperty(language) ? purposesOptions[language] : [];
		let serviceTypesByLanguage = serviceTypeOptions && serviceTypeOptions.hasOwnProperty(language) ? serviceTypeOptions[language] : [];
		set({
			loadingSyncData: false,
			language: language,
			languages: languages,
			purposesOptions: purposesByLanguage,
			serviceTypeOptions: serviceTypesByLanguage,
			services: services,
			syncProgress: syncProgress,
			cookies: cookies,
			curlExists: curlExists,
			hasSyncableData: hasSyncableData,
			syncDataLoaded:true,
		});
	},
	buildServicesCookiesArray: () => {
		let cookies = get().cookies;
		let services = get().services;
		let filteredCookies = [...cookies]
			.filter(cookie => cookie.language === get().language && (get().showDeletedCookies || !get().showDeletedCookies && cookie.deleted != 1))
			.sort((a, b) => a.name.localeCompare(b.name));

		const servicesMap = {};
		[...services]
			.sort((a, b) => a.name.localeCompare(b.name))
			.forEach(function(service) {
				servicesMap[service.ID] = {
					id: service.ID,
					name: service.name,
					service: service,
					cookies: []
				};
			});

		filteredCookies.forEach(function(cookie) {
			let serviceID = cookie.service ? cookie.serviceID : 0;
			if (!servicesMap[serviceID]) {
				servicesMap[serviceID] = {
					id: serviceID,
					name: !cookie.service ? __("Unknown Service","complianz-gdpr") : cookie.service,
					service: services.filter(service => service.ID === serviceID)[0],
					cookies: []
				};
			}
			servicesMap[serviceID].cookies.push(cookie);
		});

		let servicesAndCookies = Object.values(servicesMap);
		set({servicesAndCookies:servicesAndCookies });
	},
	restart: async () => {
		set((state) => ({loadingSyncData:true,syncDataLoaded:false }));
		let data = {};
		const {syncProgress, cookies, services, curlExists, hasSyncableData, purposesOptions, serviceTypeOptions, defaultLanguage, languages, errorMessage} = await fetchSyncProgressData(true);
		let language = get().language ? get().language : defaultLanguage;
		let purposesByLanguage = purposesOptions.hasOwnProperty(language) ? purposesOptions[language] : [];
		let serviceTypesByLanguage = serviceTypeOptions.hasOwnProperty(language) ? serviceTypeOptions[language] : [];
		set((state) => ({
			loadingSyncData: false,
			language: language,
			languages: languages,
			purposesOptions: purposesByLanguage,
			serviceTypeOptions: serviceTypesByLanguage,
			services: services,
			syncProgress: syncProgress,
			cookies: cookies,
			curlExists: curlExists,
			hasSyncableData: hasSyncableData,
			errorMessage: errorMessage,
			syncDataLoaded:true,
		}));
	},
	updateCookie: (id, type, value) => {
		set(
			produce((state) => {
				const cookieIndex = state.cookies.findIndex(cookie => {
					return cookie.ID===id;
				});

				if ( cookieIndex!==-1 ){
					const newCookie = {...state.cookies[cookieIndex]};
					newCookie[type] = value;
					state.cookies.splice(cookieIndex, 1);
					state.cookies.push(newCookie);
				}
			})
		)
	},
	addCookie: (serviceID, serviceName) => {
		let languages = get().languages;
		let addedIds = get().addedIds;
		let newAddedIds = [...addedIds];
		set(
			produce((state) => {
				languages.forEach(function(language, i) {
					//keep track of unique ID's for new added cookies with the newAddedIds array
					let nextId = getNextId(newAddedIds);
					newAddedIds.push(nextId);
					state.addedIds = newAddedIds;
					const cookie = {
						ID: nextId,
						name: 'new_cookie',
						slug: 'new_cookie',
						deleted:0,
						thirdParty:0,
						isMembersOnly:0,
						showOnPolicy:0,
						retention:'',
						cookieFunction:'',
						purpose:'',
						service:serviceName,
						serviceID: serviceID,
						sync:0,
						privacyStatementURL:'',
						language:language
					};
					state.cookies.push(cookie);

				});
			})
		)
	},
	saveCookie: async (id) => {
		set({saving:true });
		let cookies = get().cookies;
		const cookieIndex = cookies.findIndex(cookie => {
			return cookie.ID===id;
		});

		if (cookieIndex!==-1){
			let data = {};
			data.cookie = cookies[cookieIndex];
			await cmplz_api.doAction('update_cookie', data).then((response) => {
				//if cookie was added new, update the ID here as well.
				if (id<0) {
					set(
						produce((state) => {
							const cookieIndex = state.cookies.findIndex(cookie => {
								return cookie.ID===id;
							});

							if ( cookieIndex!==-1 ){
								const newCookie = {...state.cookies[cookieIndex]};
								newCookie.ID = response.ID;
								state.cookies.splice(cookieIndex, 1);
								state.cookies.push(newCookie);
							}
						})
					)
				}
				set({ saving:false});
				return response;
			}).catch((error) => {
				console.error(error);
			});
		}
	},
	addService: () => {
		let addedIds = get().addedIds;
		let newAddedIds = [...addedIds];
		let language = get().language;
		set(
			produce((state) => {
				//keep track of unique ID's for new added items with the newAddedIds array
				let nextId = getNextId(newAddedIds);
				newAddedIds.push(nextId);
				const service = {ID: nextId, name: 'New Service', slug: 'new_service',sync:0,privacyStatementURL:'',language:language};
				state.services.push(service);
				state.addedIds = newAddedIds;
			})
		)
	},
	saveService: async (id) => {
		set({saving:true });
		let services = get().services;
		const serviceIndex = services.findIndex(service => {
			return service.ID===id;
		});

		if (serviceIndex!==-1){
			let data = {};
			data.service = services[serviceIndex];
			await cmplz_api.doAction('update_service', data).then((response) => {
				//check if the service was added new
				if (id<0) {
					let services = get().services;
					//update array
					let newServices = [];
					services.forEach(function(service, i) {
						const newService = {...service};
						if ( service.ID === id ){
							newService.ID=response.ID;
						}
						newServices.push(newService);
					});
					//set state
					set({services:newServices});
				}
				set({ saving:false});
				return response;
			}).catch((error) => {
				console.error(error);
			});
		}
	},
	toggleDeleteCookie: async (ID) => {
		set(
			produce((state) => {
				const cookieIndex = state.cookies.findIndex(cookie => {
					return cookie.ID===ID;
				});

				if (cookieIndex!==-1){
					const newCookie = {...state.cookies[cookieIndex]};
					newCookie.deleted = newCookie.deleted==1 ? false: true;
					state.cookies[cookieIndex] = newCookie;
				}
			})
		)

		//update cookie value
		let data = {};
		data.id = ID;
		await cmplz_api.doAction('delete_cookie', data).then((response) => {

		}).catch((error) => {
			console.error(error);
		});
	},
	deleteService: async (ID) => {
		let services = get().services;
		const serviceIndex = services.findIndex(service => {
			return service.ID===ID;
		});
		services.splice(serviceIndex, 1);
		//remove also all cookies with this service
		let cookies = get().cookies;
		let newCookies = [];

		cookies.forEach(function(cookie, i) {
			if (cookie.serviceID !== ID) {
				newCookies.push(cookie);
			}
		});

		let data = {};
		data.id = ID;
		set( {services:services, cookies:newCookies } );
		await cmplz_api.doAction('delete_service', data).then((response) => {
			return response;
		}).catch((error) => {
			console.error(error);
		});
	},
	updateService: (id, type, value) => {
		let services = get().services;
		//update array
		let newServices = [];
		services.forEach(function(service, i) {
			const newService = {...service};
			if ( service.ID === id ){
				newService[type]=value;
				if (type==='sync' && !value){
					newService['synced']=value;
				}
			}
			newServices.push(newService);
		});
		//set state
		set({services:newServices});
	},
}));

const fetchSyncProgressData = (restart) => {
	let data = {}
	if ( restart ) {
		data.scan_action = 'restart';
	}

	return cmplz_api.doAction('sync', data).then((response) => {
		let syncProgress = response.progress;
		let curlExists = response.curl_exists;
		let cookies = response.cookies;
		let errorMessage = response.message;

		//decode strings which can contain encoded characters
		if (!cookies || cookies.length===0){
			cookies = [];
		}
		cookies.forEach(function(cookie, i) {
			cookies[i].name = htmlDecode(cookie.name);
			cookies[i].retention = htmlDecode(cookie.retention);
			cookies[i].cookieFunction = htmlDecode(cookie.cookieFunction);
		});
		let services = response.services;
		let hasSyncableData = response.has_syncable_data;
		let purposesOptions = response.purposes_options;
		let serviceTypeOptions = response.serviceType_options;
		let defaultLanguage = response.default_language;
		return {syncProgress, cookies, services, curlExists, hasSyncableData, purposesOptions, serviceTypeOptions, defaultLanguage, languages: response.languages, errorMessage};
	}).catch((error) => {
		console.error(error);
	});
}
const htmlDecode = (input) => {
	var doc = new DOMParser().parseFromString(input, "text/html");
	return doc.documentElement.textContent;
}

const getNextId = (newAddedIds) => {
	let nextId;
	if (newAddedIds.length===0) {
		nextId = 0;
	} else if ( newAddedIds.length===1 ) {
		nextId = newAddedIds[0];
	} else {
		nextId = Math.min(...newAddedIds);
	}
	return nextId - 1;
}

