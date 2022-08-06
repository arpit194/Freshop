import React, { useState } from "react";
import classes from "./Login.module.css";

const Login = () => {
  const [state, setState] = useState("Login");

  const changeState = () => {
    if (state === "Login") {
      setState("Signup");
    } else {
      setState("Login");
    }
  };

  return (
    <div className={classes.loginContainer}>
      <div className={classes.loginCard}>
        <div className={classes.header}>{state}</div>
        {state === "Signup" && (
          <input className={classes.input} placeholder="Enter email" />
        )}
        <input className={classes.input} placeholder="Enter email" />
        <input
          className={classes.input}
          type="password"
          placeholder="Enter password"
        />
        <div className={classes.button}>{state}</div>
        <div className={classes.questionContainer}>
          <div className={classes.question}>
            {state === "Login" ? "Don't" : "Already"} have an account?
          </div>
          <div className={classes.change} onClick={changeState}>
            {state === "Login" ? "Signup" : "Login"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
