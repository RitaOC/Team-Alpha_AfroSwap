import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import frame1 from "../images/Frame1.png";
import frame2 from "../images/Frame2.PNG";

function Landing() {
    const navigate = useNavigate();

    const navigateToSwap = () => {
    navigate('/swap');
    };
  return (
    <>
      <Navbar />
      <section id="home">
        <div id="section-a">
          <div className="Topic">
            <div className="stat-a">if not Afroswap,what else?</div>
            <h1 className="stat-b">
              The most effective decentralized exchange-based platform for token
              trading.
            </h1>
            <div className="stat-c">
              Transact more profitably on dozens of different networks and
              hundrends of DEXs
            </div>
            <div>
              <button className="swap" onClick={navigateToSwap}>
                Swap Tokens
              </button>
              <button className="learn" href="">
                Learn More
              </button>
            </div>
          </div>
          <div className="frame1">
            <img src={frame1} alt="Logo" />;
          </div>
        </div>
      </section>
      <section id="section-b">
        <h2 className="Topic-b">Accessibility and Affordability</h2>
        <p>
          Have direct access to rare tokens and coins at affordable trade rates.
        </p>
        <div className="frame2">
          <img src={frame2} alt="Logo" />;
        </div>
      </section>
      <section id="section-c">
        <h2 className="Topic-c">Learn More</h2>
        <p>Step by Step process to effectively Swap Token on Afroswap</p>

        <div>
          <ul>
            <li>
              Connect to your Metamask wallet,by clicking on connect wallet
            </li>
            <li>Ensure your are on Goerli Testnet</li>
            <li>Click on Swap Tokens</li>
            <li>Select the desired tokens to swap</li>
            <li>And thats all,very simple</li>
          </ul>
        </div>
      </section>
      <Footer />
    </>
  );
}

export { Landing };
