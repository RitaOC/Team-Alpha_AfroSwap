import React from "react";
import Navbar from "./components/Navbar";
import "./styles/Contact.css";

function Contact() {
  return (
    <>
      <Navbar />
      <section>
        <div>
          <h3>How can we help?</h3>
          <p>
            Kindly fill the form to get started,we will respond as soon as we
            can.
          </p>
          <form action="" method="post" enctype="text/plain">
            <table>
              <tr>
                <td>
                  <label for="name">Full Name:</label>
                </td>
                <td>
                  <input type="text" placeholder="Mary Jane" />
                </td>
              </tr>
              <tr>
                <td>
                  <label for="tel">Phone number:</label>
                </td>
                <td>
                  <input type="number" placeholder="+234xxxxxxxxxx" id="" />
                </td>
              </tr>
              <tr>
                <td>
                  <label for="subject">Subject:</label>
                </td>
                <td>
                  <input type="text" placeholder="Inquiry" />
                </td>
              </tr>
              <tr>
                <td>
                  <label for="email">Email:</label>
                </td>
                <td>
                  <input type="email" placeholder="xxx@gmail.com" id="" />
                </td>
              </tr>
              <tr>
                <td>
                  <label for="name">How can we help you:</label>
                </td>
                <td>
                  <textarea
                    name="comment"
                    placeholder="Leave your message"
                    id=""
                    cols="30"
                    rows="10"
                    required
                  ></textarea>
                </td>
              </tr>
            </table>
            <button type="submit"></button>
          </form>
        </div>
      </section>
    </>
  );
}

export default Contact;