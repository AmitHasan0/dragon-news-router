import React, { use } from "react";
import { Link, NavLink } from "react-router";
import userIcon from "../assets/user.png";

import { AuthContext } from "../provider/AuthProvider";
const Navbar = () => {
  const { user, logOut } = use(AuthContext);

  const handleSignout = () => {
    console.log("user is trying to log out");
    logOut()
      .then(() => {
        // Sign-out successful.
        alert("user has logged out successfully");
      })
      .catch((error) => {
        // An error happened.
        alert(error);
      });
  };

  return (
    <div className="flex justify-between items-center">
      <div className=""></div>
      <div className="nav flex gap-5 text-accent">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/career">Career</NavLink>
      </div>
      <div className="login-btn flex gap-5">
        <img
          className="w-12 h-12 rounded-full"
          src={`${user ? user.photoURL : userIcon}`}
          alt=""
        />

        {user ? (
          <button onClick={handleSignout} className="btn btn-primary px-10 ">
            SignOut
          </button>
        ) : (
          <Link to="/auth/login" className="btn btn-primary px-10 ">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};
export default Navbar;
