import React, { use } from 'react';
import userIcon from '../assets/user.png'
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';

const Navbar = () => {
    const { user, logOut } = use(AuthContext);
  const handleLogOut = () => {
    console.log("user trying to LogOut");
    logOut()
      .then(() => {
        alert("You Logged Out successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };
    return (
        <div className="flex md:flex-row flex-col gap-5 justify-between items-center">
      <div className=""></div>
      <div className="nav flex gap-15 text-accent ml-15">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/career">Career</NavLink>
      </div>
      <div className="login-btn flex gap-5">
        <img className='w-12 rounded-full' src={`${user ? user.photoURL : userIcon}`} 
        alt="" />
        {user ? (
          <button onClick={handleLogOut} className="btn btn-primary px-10 ">
            LogOut
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