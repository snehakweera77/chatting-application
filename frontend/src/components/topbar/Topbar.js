import "./Topbar.css";
import { ExpandMore } from "@material-ui/icons";
import { Link } from "react-router-dom";
import React, { useContext } from "react";
import { AuthContext } from "../../authContext/AuthContext";
import { logout } from "../../authContext/AuthActions";
import { useHistory } from "react-router-dom";

export default function Topbar() {
  const { dispatch } = useContext(AuthContext);
  const { user } = useContext(AuthContext);
  const history = useHistory();
  const logoutHandler = () => {
    dispatch(logout());
    history.push("/login");
  };
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">ChatUp</span>
        </Link>
      </div>
      <div className="topbarRight">
        <span>{"Hi, " + user?.username}</span>
      </div>
      <p onClick={logoutHandler} className="logout">
        Logout
      </p>
    </div>
  );
}
