import { useState } from "react";
import LoginForm from "./LoginForm";

function Login() {
	const adminLogin = {
		username: "user",
		password: "pass",
		firstName: "Carson",
		lastName: "Blin",
	};

	const [user, setUser] = useState({
		username: "",
		password: "",
		firstName: "",
		lastName: "",
	});
	const [error, setError] = useState("");

	const Logout = () => {
		console.log("Logged out successfully!");
		setUser({ username: "", password: "", firstName: "", lastName: "" });
	};

	const Login = (details: any) => {
		console.log(details);
		if (
			details.username == adminLogin.username &&
			details.password == adminLogin.password
		) {
			console.log("Logged In!");
			setUser({
				username: details.username,
				password: details.password,
				firstName: adminLogin.firstName,
				lastName: adminLogin.lastName,
			});
		} else {
			console.log("Incorrect Information. Please try again.");
			setError("Incorrect Information. Please try again.");
		}
	};

	return (
		<div className="App">
			{user.username != "" ? (
				<>
					<h1>User Information</h1>
					<p>First Name: {user.firstName}</p>
					<p>Last Name: {user.lastName}</p>
					<p>Email: {user.username}</p>
					<button onClick={Logout}>Logout</button>
				</>
			) : (
				<LoginForm Login={Login} error={error} />
			)}
		</div>
	);
}

export default Login;
