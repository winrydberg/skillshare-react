import React from "react";
import { Button } from "reactstrap";
import Navigation from "../../components/Navigation";
import "./SignUp.css";
import SSForm from "../../components/SSForm";
import Footer from "../../components/Footer";

export default function SignUp() {
  return (
    <div>
      <Navigation />
      <div className="sectionone"></div>
      <div className="section-signup">
        <div className="formcontainer">
          <div className="formview">
            <SSForm />
          </div>
        </div>
        <div className="appdescription">
          <h2 className="onmemtext">
            Thousands of online classes. <br />
            One inspiring membership.
          </h2>
          <h2 className="freemonth">Get 1 month free.</h2>
          <ul className="sub-description">
            <li>
              Explore online classes in design, illustration, photography, and
              more
            </li>
            <li>Learn by doing with hands-on projects</li>
            <li>
              All classes are self-guided, so you can learn at your own pace
            </li>
          </ul>
        </div>
      </div>
      <div className="signup-top"></div>

      <Footer />
    </div>
  );
}
