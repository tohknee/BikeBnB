import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal";
import "./LoginForm.css";

function LoginFormModal() {
  const dispatch = useDispatch();
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const { closeModal } = useModal();

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors({});
    return dispatch(sessionActions.login({ credential, password }))
      .then(closeModal)
      .catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) {
          setErrors(data.errors);
        }
      });
  };
//this is for demo user log in
  const handleDemoUser = e=>{
    e.preventDefault();
    return dispatch(sessionActions.login({credential:"demo@user.io", password:"password"}))
    .then(closeModal)
  }
  return (
    <>
      <h1>Log In</h1>
      <form class="container" onSubmit={handleSubmit}>
        <label>
          
          <input
          className="login-input"
            type="text"
            placeholder="Username or Email"
            value={credential}
            onChange={(e) => setCredential(e.target.value)}
            required
          />
        </label>
        <label>
          
          <input
          className="login-input"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <div className="login-error">

        {errors.credential && <p>{errors.credential}</p>}
        </div>
        <button className="login-button" type="submit"disabled={credential.length<4 
      || password.length<6}>Log In</button>
      <button className="login-button" type="submit" onClick={handleDemoUser}>Demo User</button>
      </form>
    </>
  );
}

export default LoginFormModal;
