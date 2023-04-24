import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="navbar bg-primary text-primary-content flex justify-between items-center">
        <Link to="/" className="btn btn-ghost normal-case text-3xl">
          Fb auth
        </Link>
        <div className="flex justify-around mr-40">
          <Link className="btn btn-ghost normal-case text-md" to="/">
            Home
          </Link>
          <Link className="btn btn-ghost normal-case text-md" to="/register">
            Register
          </Link>
          <Link className="btn btn-ghost normal-case text-md" to="/login">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
