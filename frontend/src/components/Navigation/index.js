import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import "./Navigation.css";
import logo from "./Pictures/logo1.png"
function Navigation({ isLoaded }) {
  const sessionUser = useSelector((state) => state.session.user);

  return (
    <div>

    <ul className="navbar">
      <li >
        <NavLink exact to="/">
          <img  className="logo-div" src={logo} alt="logo"></img>
        </NavLink>
      </li>
      <div className="spot-profile">
      {sessionUser&& (
        <li>
        <NavLink exact to="/spots/new">
          Create new Spot
        </NavLink>
      </li>
      )}
      
      {isLoaded && (
        <li>
          <ProfileButton user={sessionUser} />
        </li>
      )}
      </div>
    </ul>
    <hr/>
      </div>
  );
}

export default Navigation;
