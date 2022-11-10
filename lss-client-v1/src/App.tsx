import { useState } from "react";

import "./css/App.css";

function App() {
  const submitHandler = (e) => {
    e.preventDefault();
    alert("Admin Account created!");
  };

  return (
    <div className="App">
      <h1>HabiJax Admin Dashboard </h1>
      <br />
      <h2>Create Admin Account</h2>
      <form onSubmit={submitHandler}>
        Username:
        <input type="text" placeholder="Username" required />
        <div className="col-md-6">
          Password:
          <input type="password" placeholder="Password" required />
        </div>
        <div>
          Confirm Password:
          <input type="password" placeholder="Confirm Password" required />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
