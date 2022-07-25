import React from 'react';
import {useAlert} from './Alert/AlertContext';

const Main = () => {
	const {show} = useAlert();
	return (
		<div>
			<>
				<h1>Hi, with Context example!</h1>
				<button onClick={() => show('This text from Main.jsx')} className="btn btn-success">Show alert</button>
			</>
		</div>
	);
}

export default Main;
