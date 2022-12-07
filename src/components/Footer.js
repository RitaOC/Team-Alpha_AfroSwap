import React from "react";
import "../styles/Footer.css";
import logo2 from "../images/logo2.png";
// toast
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// notification
const notify = () => {
  toast.success("Sent!", {
    position: "top-center",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
};
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
                <button onClick={notify} type="submit">
                  Subscribe
                </button>
              </form>
              <ToastContainer />
            </div>
          </div>
        </div>
        <img src={logo2} alt="logo" srcset="" className="logo2" />
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
