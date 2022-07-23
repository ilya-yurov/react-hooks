import { useMemo } from "react";
import { useEffect, useState, useRef } from "react";


const complexCompute = (num) => {
	let i = 0;
	while (i < 1000000000) i++
	return num * 2
}


const App = () => {

	const [number, setNumber] = useState(42);
	const [colored, setColored] = useState(false);

	//useMemo() usage when do complex computing
	const computed = useMemo(() => {
		return complexCompute(number);
	}, [number])

	//useMemo() usage when use objects as parameters of useEffect()
	const styles = useMemo(() => {
		return {
			color: colored ? 'darkred' : 'black'
		}
	}, [colored])

	useEffect(() => {
		console.log('Styles changed!');
	}, [styles]);

	return (
		<div>
			<h1 style={styles}>The calculated property: {computed}</h1>
			<button className="btn btn-success" onClick={() => setNumber(prev => prev + 1)} >Add</button>
			<button className="btn btn-danger" onClick={() => setNumber(prev => prev - 1)} >Put away</button>
			<button className="btn btn-warning" onClick={() => setColored(prev => !prev)} >Change</button>
		</div>
	)
}

export default App;
