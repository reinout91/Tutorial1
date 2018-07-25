import React from "react";
import { Link } from "react-router-dom";
import MathJax from "react-mathjax-preview";
import { render } from "react-dom";
import Equation from "./Equation";

const HomePage = () => (
  <div>
    <h1>Home Page</h1>
    <Link to="/Login">Login</Link>
    <Equation />
  </div>
);

export default HomePage;
