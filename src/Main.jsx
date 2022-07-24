import React from 'react';
import {useAlert} from './Alert/AlertContext';

const Main = () => {
	const {toogle} = useAlert();
	return (
		<div>
			<>
				<h1>Hi, with Context example!</h1>
				<button onClick={toogle} className="btn btn-success">Show alert</button>
			</>
		</div>
	);
}

export default Main;
