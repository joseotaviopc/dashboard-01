import { useForm, SubmitHandler, SubmitErrorHandler } from "react-hook-form";
interface LoginProps {
	isLogged: boolean;
	setIsLogged: React.Dispatch<React.SetStateAction<boolean>>;
}

type Inputs = {
	email: string;
	password: string;
};

function Login({ isLogged, setIsLogged }: LoginProps) {
	function handleLogin() {
		setIsLogged(!isLogged);
	}
	const {
		register,
		handleSubmit,
		setError,
		formState: { errors },
	} = useForm<Inputs>({
		mode: "all",
		reValidateMode: "onChange",
	});

	const onSubmit: SubmitHandler<Inputs> = (data, e) => {
		console.log(data, e);
		handleLogin();
	};
	const onError: SubmitErrorHandler<Inputs> = (errors, e) =>
		console.log(errors, e);
	const errorMessage = {
		email: "Email inválido",
		password: "Senha inválida",
	};

	return (
		<div>
			<img src="/Power_BI_Logo.svg" width={120} height={120} />
			<h2 style={{ fontWeight: "lighter" }}>
				Dashboard <strong>PowerBI</strong>
			</h2>
			<form onSubmit={handleSubmit(onSubmit)}>
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
							justifyContent: "flex-start",
							height: "92px",
						}}
					>
						<label htmlFor="email">Email</label>
						<input
							placeholder="Digite seu email"
							defaultValue=""
							{...register("email", {
								required: "Email obrigatório",
								pattern: {
									value: /^admin@admin.com/,
									message: errorMessage.email,
								},
							})}
							type="email"
							style={{
								height: "2rem",
								padding: "0.25rem 1rem",
							}}
						></input>
						{errors.email && (
							<span style={{ color: "#DE9800", fontSize: "0.75rem" }}>
								{errors.email.message}
							</span>
						)}
					</div>
					<div
						style={{
							display: "flex",
							flexDirection: "column",
							alignItems: "flex-start",
							justifyContent: "flex-start",
							height: "92px",
						}}
					>
						<label htmlFor="password">Senha</label>
						<input
							placeholder="Digite sua senha"
							{...register("password", {
								required: "Senha obrigatória",
								minLength: { value: 6, message: "Senha deve ter 6 caracteres" },
								pattern: {
									value: /^admin0/,
									message: errorMessage.password,
								},
							})}
							type="password"
							style={{
								height: "2rem",
								padding: "0.25rem 1rem",
							}}
						></input>
						{errors.password && (
							<span style={{ color: "#DE9800", fontSize: "0.75rem" }}>
								{errors.password.message}
							</span>
						)}
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
					// onClick={handleLogin}
					type="submit"
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
