import React from "react";
import { render } from "react-dom";
const MathJax = require("@matejmazur/react-mathjax");
const ascii = "U = 1/(R_(si) + sum_(i=1)^n(s_n/lambda_n) + R_(se))";
const tex = `f(x) = \\int_{-\\infty}^\\infty\\hat f(\\xi)\\,e^{2 \\pi i \\xi x}\\,d\\xi`;

class Equation extends React.Component {
  render() {
    return <div>"hi"</div>;
  }
}

export default Equation;
