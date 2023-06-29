import Icon from "../utils/Icon";
const Panel = (props) => {
	return (
	  <div className="cmplz-panel__list__item" key={props.id} style={props.style ? props.style : {}}>
		<details>
		  <summary>
			<div className="cmplz-panel__list__item__title">{props.summary}</div>
			<div className="cmplz-panel__list__item__comment">{props.comment}</div>
			<div className="cmplz-panel__list__item__icons">{props.icons}</div>
			<Icon name={'chevron-down'} size={18} />
		  </summary>
		  <div className="cmplz-panel__list__item__details">
			{props.details}
		  </div>
		</details>
	  </div>
	);
}

export default Panel
