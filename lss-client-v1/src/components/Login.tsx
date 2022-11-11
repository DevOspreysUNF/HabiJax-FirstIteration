import { useState } from "react";
import LoginForm from "./LoginForm";
import "./css/App.css";

function Login() {
  const adminLogin = {
    username: "n01433452@unf.edu",
    password: "pass",
  };

  const [user, setUser] = useState({ username: "", password: "" });
  const [error, setError] = useState("");

  const Logout = () => {
    console.log("Logged out successfully!");
    setUser({ username: "", password: "" });
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
          <h1>Welcome to the Admin Dashboard!</h1>
          <button onClick={Logout}>Logout</button>
          <button>Create Account</button>
        </>
      ) : (
        <LoginForm Login={Login} error={error} />
      )}
    </div>
  );
}

export default Login;
