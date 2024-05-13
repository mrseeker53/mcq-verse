import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {

  return (
    <div className="navbar py-3 px-16 md:px-28 lg:px-28 bg-slate-700">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-2xl">MCQ VERSE</Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li className="px-5">
            <Link to="/add">Add Question</Link>
          </li>
          <li>
            <Link to="/questions">All Questions</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
