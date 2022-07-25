import React from 'react';
import {useAlert} from './AlertContext';

const Alert = () => {
	const {hide, text, visible} = useAlert();

	if (!visible) return null
	return (
		<div onClick={hide} className='alert alert-danger'>
			{text}
		</div>
	);
}

export default Alert;
