interface LoginProps {
	isLogged: boolean;
	setIsLogged: React.Dispatch<React.SetStateAction<boolean>>;
}

function Login({ isLogged, setIsLogged }: LoginProps) {
	function handleLogin() {
		setIsLogged(!isLogged);
	}
	return (
		<div>
			<img src="/Power_BI_Logo.svg" width={120} height={120} />
			<h2 style={{ fontWeight: "lighter" }}>
				Dashboard <strong>PowerBI</strong>
			</h2>
			<form>
				<div
					style={{
						display: "flex",
						// flexDirection: "column",
						gap: "2rem",
						height: "auto",
					}}
				>
					<div
						style={{
							display: "flex",
							flexDirection: "column",
							alignItems: "flex-start",
							justifyContent: "center",
							height: "auto",
						}}
					>
						<label>Email</label>
						<input
							type="text"
							style={{
								height: "2rem",
								padding: "0.25rem 1rem",
							}}
						></input>
					</div>
					<div
						style={{
							display: "flex",
							flexDirection: "column",
							alignItems: "flex-start",
							justifyContent: "center",
							height: "auto",
						}}
					>
						<label>Senha</label>
						<input
							type="text"
							style={{
								height: "2rem",
								padding: "0.25rem 1rem",
							}}
						></input>
					</div>
				</div>
				<div
					style={{
						display: "flex",
						justifyContent: "space-between",
						alignItems: "center",
					}}
				>
					<div
						style={{
							display: "flex",
							gap: "1rem",
						}}
					>
						<input type="checkbox" name="" id="" />
						Salvar
					</div>
					<p>Esqueceu a senha?</p>
				</div>
				<input
					onClick={handleLogin}
					type="button"
					value="ENTRAR"
					style={{
						height: "3rm",
						width: "100%",
						padding: "1rem 2rem",
					}}
				/>
			</form>
		</div>
	);
}

export default Login;
