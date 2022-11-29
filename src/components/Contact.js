import React from "react";
import Navbar from "./Navbar";
import "../styles/Contact.css";

function Contact() {
  return (
    <>
      <Navbar />
      <section id="Contact">
        <div id="contact-card">
          <div className="contact-card-a">
            <h3>How can we help?</h3>
            <p className="contact-instruction">
              Kindly fill the form to get started,we will respond as soon as we
              can.
            </p>
          </div>

          <form className="contact-card-b">
            <div class="form-group">
              <label for="inputAddress">Full Name</label>
              <input
                type="text"
                class="form-control"
                id="inputAddress"
                placeholder="Mary Jane"
              ></input>
            </div>
            <div class="form-group">
              <label for="inputAddress">Phone number</label>
              <input
                type="text"
                class="form-control"
                id="inputAddress"
                placeholder="+234xxxxxxxxxx"
              ></input>
            </div>
            <div class="form-group">
              <label for="inputAddress">Subject</label>
              <input
                type="text"
                class="form-control"
                id="inputAddress"
                placeholder="Inquiry"
              ></input>
            </div>
            <div class="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input
                type="email"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
              ></input>
            </div>
            <div class="form-group">
              <label for="exampleFormControlTextarea1">How can we help?</label>
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>
            </div>

            <button id="contact-btn" type="submit" class="btn btn-primary">
              Send
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

export default Contact;
