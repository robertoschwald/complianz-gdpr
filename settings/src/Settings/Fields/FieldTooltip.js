import Icon from '../../utils/Icon';

const FieldTooltip = ({tooltip}) => {
	if (tooltip) {
		return <Icon name="help" size={14} tooltip={tooltip}/>;
	}
};

export default FieldTooltip;
