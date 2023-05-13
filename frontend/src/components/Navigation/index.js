import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import "./Navigation.css";
// import '../../../../Pictures Folder'
function Navigation({ isLoaded }) {
  const sessionUser = useSelector((state) => state.session.user);

  return (
    <ul>
      <li>
        <NavLink exact to="/">
          <img src="logo.png"></img>
        </NavLink>
      </li>
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
    </ul>
  );
}

export default Navigation;
