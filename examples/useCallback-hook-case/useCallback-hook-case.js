import { useCallback } from "react";
import { useState } from "react";
import ItemsList from "./ItemsList";

const App = () => {
	const [colored, setColored] = useState(false);
	const [count, setCount] = useState(1);

	const styles = {
		color: colored ? 'darkred' : 'black'
	}

	const generateItemsFromAPI = useCallback((indexNumber) => {
		return new Array(count).fill('').map((_,i) => `Element ${i + indexNumber}`)
	}, [count])


	return (
		<div>
			<h1 style={styles}>Count of elements: {count}</h1>
			<button className="btn btn-success" onClick={() => setCount(prev => prev + 1)}>Add</button>
			<button className="btn btn-warning" onClick={() => setColored(prev => !prev)}>Change</button>
			<ItemsList getItems={generateItemsFromAPI}/>
		</div>
	)
}

export default App;
