import React, { useState } from "react";

function LoginForm({ Login, error }: { Login: any; error: any }) {
  const [details, setDetails] = useState({ username: "", password: "" });
  const submitHandler = (e: any) => {
    e.preventDefault();
    Login(details);
  };

  return (
    <form onSubmit={submitHandler}>
      <h2>Login</h2>
      <h3>Please input information to login to survey system</h3>
      {error != "" ? <div className="error">{error}</div> : ""}
      Username:
      <input
        type="text"
        id="userName"
        placeholder="Username"
        required
        onChange={(e) => setDetails({ ...details, username: e.target.value })}
        value={details.username}
      />
      <br></br>
      <br></br>
      Password:
      <input
        type="password"
        id="password"
        placeholder="Password"
        required
        onChange={(e) => setDetails({ ...details, password: e.target.value })}
        value={details.password}
      />
      <br></br>
      <button type="submit">Login</button>
    </form>
  );
}
export default LoginForm;
