import React from "react";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer py-16 pl-32 bg-slate-900 text-base-content">
      <nav>
        <h6 className="footer-title">Services</h6>
        <Link to="/newquestion" className="link link-hover">JavaScript Questions</Link>
        <Link to="/newquestion" className="link link-hover">ReactJS / NodeJS Questions</Link>
        <Link to="/newquestion" className="link link-hover">Database Questions</Link>
      </nav>
      <nav>
        <h6 className="footer-title">Company</h6>
        <Link to="/" className="link link-hover">About us</Link>
        <Link to="/" className="link link-hover">Contact</Link>
        <Link to="/" className="link link-hover">Prices</Link>
      </nav>
      <nav>
        <h6 className="footer-title">Legal</h6>
        <Link to="/" className="link link-hover">Terms of use</Link>
        <Link to="/" className="link link-hover">Privacy policy</Link>
        <Link to="/" className="link link-hover">Cookie policy</Link>
      </nav>
      <form>
        <h6 className="footer-title">Newsletter</h6>
        <fieldset className="form-control w-80">
          <label className="label mb-1">
            <span className="label-text">Enter your email address</span>
          </label>
          <div className="join">
            <input
              type="text"
              placeholder="username@site.com"
              className="input input-bordered join-item bg-slate-300"
            />
            <button className="btn btn-primary join-item">Subscribe</button>
          </div>
        </fieldset>
      </form>
    </footer>
  );
};

export default Footer;
