import React, { useContext, useRef, useState } from "react";
import "./LoginPopup.css";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";

const LoginPopup = ({ setShowLogin }) => {
  const [currstate, setCurrstate] = useState("Login");
  const [errorMessage, setErrorMessage] = useState("");
  const Context = useContext(StoreContext);
const isLogedIn=Context.setLogin
  const name = useRef();
  const email = useRef();
  const password = useRef();

  const loginHandler = (e) => {
    e.preventDefault();

 
    if (currstate === "Login") {
      const storedUser = JSON.parse(localStorage.getItem("user"));

    
      if (
        storedUser &&
        storedUser.email === email.current.value &&
        storedUser.password === password.current.value
      ) {
        setShowLogin(false); 
        isLogedIn(true)// Close popup on successful login
      } else {
        setErrorMessage("Invalid email or password.");
        alert("Invalid email or password.");
      }
    }

   
    else if (currstate === "Sign Up") {
      const newUser = {
        name: name.current.value,
        email: email.current.value,
        password: password.current.value,
      };
      localStorage.setItem("user", JSON.stringify(newUser)); 
      setShowLogin(false); 
      alert("Account created successfully!");
    }
  };

  return (
    <div className="login-popup">
      <form onSubmit={loginHandler} className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currstate}</h2>
          <img
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt="Close"
          />
        </div>

        <div className="login-popup-inputs">
          {currstate === "Sign Up" && (
            <input
              type="text"
              ref={name}
              placeholder="Enter your name"
              required
            />
          )}
          <input
            type="email"
            ref={email}
            placeholder="Enter your email"
            required
          />
          <input
            type="password"
            ref={password}
            placeholder="Enter your password"
            required
          />
        </div>

        <button type="submit">
          {currstate === "Sign Up" ? "Create account" : "Login" }
        </button>

        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By continuing, I agree to the terms of use and privacy policy.</p>
        </div>

        {errorMessage && <p className="error-message">{errorMessage}</p>}

        {currstate === "Login" ? (
          <p>
            Create a new account?
            <span onClick={() => setCurrstate("Sign Up")}>Click here</span>
          </p>
        ) : (
          <p>
            Already have an account?
            <span onClick={() => setCurrstate("Login")}>Login here</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopup;
