import React from "react";
import { useState } from "react";

function Register(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  return (
    <div>
      <lable>
        Name
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </lable>
      <lable>
        Email
        <input
          id="email"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </lable>
      -
      <lable>
        Password
        <input
          id="pass"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </lable>
      <br></br>
      <button type="submit" disabled={!validateForm()}>
        Register
      </button>
    </div>
  );
}

export default Register;
