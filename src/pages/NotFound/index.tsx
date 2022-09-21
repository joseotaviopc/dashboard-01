import NotFoundSvg from "../../assets/NotFound";

interface NotFoundProps {
	isLogged: boolean;
	setIsLogged: React.Dispatch<React.SetStateAction<boolean>>;
}

function NotFound({ isLogged, setIsLogged }: NotFoundProps) {
	function handleLogin() {
		setIsLogged(!isLogged);
	}
	return (
		<div>
			<h1>Ops.. :(</h1>
			<h2>Não encontramos essa página</h2>
			<NotFoundSvg />
			<nav className="footer-links">
				<a onClick={handleLogin}>Login</a>
			</nav>
		</div>
	);
}

export default NotFound;
