import Navbar from "./Navbar";
import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "../styles/Testimonial.css";
import Test1 from "../images/IMG_1.JPG";
import Test3 from "../images/IMG_3.jpg";
import Test2 from "../images/IMG_2.PNG";

export default class Testimonial extends Component {
  render() {
    return (
      <>
        <div className="section-test">
          <h2 className="Test-heading">Testimonial</h2>
          <p>What our users are saying about us</p>
        </div>

        <Carousel
          showArrows={true}
          infiniteLoop={true}
          showThumbs={false}
          showStatus={false}
          autoPlay={true}
          interval={6100}
        >
          <div>
            <img src={Test1} />
            <div className="myCarousel">
              <h3>Mariam Abdul</h3>
              <h4 className="profile-job">Designer</h4>
              <p>
                The simple and intuitive design makes it easy to use, I would
                recommend AFROSWAP anyday
              </p>
            </div>
          </div>

          <div>
            <img src={Test2} />
            <div className="myCarousel">
              <h3>Favour Obi</h3>
              <h4 className="profile-job">Front-end dev</h4>
              <p>
                I highly recommend AFROSWAP to my peers,I could swap my tokens
                easily.
              </p>
            </div>
          </div>

          <div>
            <img src={Test3} />
            <div className="myCarousel">
              <h3>Laura Ade</h3>
              <h4 className="profile-job">Blockchain developer</h4>
              <p>
                Kudos to the AFROSWAP team for building this simplified swapping
                app
              </p>
            </div>
          </div>
        </Carousel>
      </>
    );
  }
}

// export default Testimonial;
