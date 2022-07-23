import { useEffect, useState, useRef } from "react";


const App = () => {

	// const [renderCount, setRenderCount] = useState(1);
	const [value, setValue] = useState('initial');
	const renderCount = useRef(1);
	const inputRef = useRef(null);
	const prevValue = useRef('');

	useEffect(() => {
		renderCount.current++;
		console.log(inputRef.current.value);
	})

	useEffect(() => {
		prevValue.current = value
		return () => {
			
		};
	}, [value]);

	const focus = () => {
		inputRef.current.focus()
	}

	return (
		<div>
			<h1>Count of renders: {renderCount.current}</h1>
			<h1>Previous state: {prevValue.current}</h1>
			<input ref={inputRef} type="text" onChange={e => setValue(e.target.value)} value={value}/>
			<button className="btn btn-success" onClick={focus}>Focus</button>
			
		</div>
	)
}

export default App;
