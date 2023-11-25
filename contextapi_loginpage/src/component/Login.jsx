import React, { useContext, useState } from "react";
import UserContext from "../context/UserContext";

function Login() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser( username , password);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Username :</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUserName(e.target.value)}
          placeholder="Enter Username"
        />
        <br />
        <label>Password :</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter Password"
        /><br />
        <button type="submit">Login User</button>
      </form>
    </div>
  );
}

export default Login;
