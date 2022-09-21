import { useState } from "react";
import NotFound from "./pages/NotFound";
import "./App.css";
import Login from "./pages/Login";

function App() {
	const [isLogged, setIsLogged] = useState(false);

	function handleLogin() {
		setIsLogged(!isLogged);
	}
	return (
		<div className="App">
			{isLogged ? (
				<NotFound isLogged={isLogged} setIsLogged={setIsLogged} />
			) : (
				<Login isLogged={isLogged} setIsLogged={setIsLogged} />
			)}
		</div>
	);
}

export default App;
