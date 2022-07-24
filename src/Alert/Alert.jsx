import React from 'react';
import {useAlert} from './AlertContext';

const Alert = () => {
	const {visible, toogle} = useAlert();

	if (!visible) return null
	return (
		<div onClick={toogle} className='alert alert-danger'>
			This is very very important message!
		</div>
	);
}

export default Alert;
