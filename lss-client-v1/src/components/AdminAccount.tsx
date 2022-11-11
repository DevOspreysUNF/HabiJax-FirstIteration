import React from "react";
function AdminAccount() {
  const submitHandler = (e: any) => {
    e.preventDefault();
    alert("Admin Account has been created!");
  };
  return (
    <>
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
    </>
  );
}
export default AdminAccount;
