import React from "react";
import "../styles/Footer.css";
import logo2 from "../images/logo2.png";

function Footer() {
  return (
    <>
      <footer id="footer">
        <div className="footer-a">
          <p>Sign Up For Updates!!!</p>
          <div className="newsletter">
            <div className="newsletter-a">
              Kindly Subscribe to our newsletter to stay up to date on our
              important news and updates
            </div>
            <div className="subscribe">
              <form action="" method="get">
                <input type="email" placeholder="Email Address" />
                <button type="submit">Subscribe</button>
              </form>
            </div>
          </div>
        </div>
        <img src={logo2} alt="logo" srcSet="" className="logo2" />
        <div className="footer-b">
          <div>
            <h4>Products</h4>
            <p>Features</p>
            <p>Workload</p>
            <p>Time</p>
          </div>
          <div>
            <h4>Company</h4>
            <p>Real Work</p>
            <p>About & Contacts</p>
            <p>Careers</p>
          </div>
          <div>
            <h4>Resources</h4>
            <p>Blog</p>
            <p>Help & About</p>
            <p>Customer</p>
          </div>
        </div>
        <div className="reserved">
          <span>&copy; </span>2022, All rights reserved.
        </div>
      </footer>
    </>
  );
}

export default Footer;