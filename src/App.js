import { useState } from "react";

function App() {

	const counterState = useState(0);
	console.log(counterState);

	return (
		<div>
			<h1>Счетчик</h1>
			<button className="btn btn-success">Добавить</button>
			<button className="btn btn-danger">Убрать</button>
		</div>
	);
}

export default App;
