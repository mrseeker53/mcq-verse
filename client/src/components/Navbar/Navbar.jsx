import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {

  return (
    <div className="navbar py px-4 md:px-28 lg:px-28 bg-slate-900">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-2xl">MCQ VERSE</Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li className="px">
            <Link to="/addquestion">Add Question</Link>
          </li>
          <li>
            <Link to="/allquestions">All Questions</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
