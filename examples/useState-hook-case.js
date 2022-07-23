import { useState } from "react";

function computeInitialCounter() {
	console.log('Some calculations...');
	return Math.trunc(Math.random() * 20)
}

const App = () => {

	/* const [counter, setCounter] = useState(0); */
	const [counter, setCounter] = useState(() => {
		return computeInitialCounter()
	});

	const increment = () => {setCounter(prev => prev + 1)}
	const decrement = () => {setCounter(prev => prev - 1)}

	const [state, setState] = useState ({
		title: 'Счетчик',
		date: Date.now()
	})

	return (
		<div>
			<h1>Счетчик: {counter}</h1>
			<button onClick={increment} className="btn btn-success">Добавить</button>
			<button onClick={decrement} className="btn btn-danger">Убрать</button>
			<button onClick={() => setState({...state, title: 'Новое название'})} className="btn btn-default">Изменить название</button>

			<pre>{JSON.stringify(state, null, 2)}</pre>
		</div>
	);
}

export default App;
