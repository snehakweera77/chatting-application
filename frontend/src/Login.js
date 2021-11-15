import React from "react";
import "./Login.css";
import { Button } from "@material-ui/core";
import { actionTypes } from "./reducer";
import { useStateValue } from "./StateProvider";

function Login() {
  return (
    <div className="login">
      <div className="login__container">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/897px-WhatsApp.svg.png"
          alt=""
        />
        <div className="login__text">
          <h1> Sign in to Whatsapp</h1>
        </div>

        <Button>Sign In with Google</Button>
      </div>
    </div>
  );
}

export default Login;
