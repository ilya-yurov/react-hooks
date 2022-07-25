import React from 'react';
import {useEffect} from 'react';
import {useState} from 'react';

const useLogger = (name, lastName) => {
	useEffect(() => {
		console.log(`Name changed: ${name} ${lastName}`);
	},[name, lastName])
}

const useInput = (initialValue) => {
	const [value, setValue] = useState(initialValue);
	const onChange = (event) => {
		setValue(event.target.value)
	}
	const clear = () => setValue('')

	return {
		bind: {value, onChange},
		value, clear
	}
}


const App = () => {

	const input = useInput('')
	const lastName = useInput('')

	useLogger(input.value, lastName.value)

	return (
		<div className="container pt-3">
			<input type="text" /* value={input.value} onChange={input.onChange} */ {...input.bind}/>
			<input type="text" {...lastName.bind}/>
			<button onClick={() => {
				input.clear()
				lastName.clear()
			}} className="btn btn-warning">Clear</button>
			<hr/>
			<h1>{input.value} {lastName.value}</h1>
		</div>
	);
}

export default App;
