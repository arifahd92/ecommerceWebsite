import React from "react";
import classes from "./Footer.module.css";

// Import Bootstrap icons
import { SiYoutube, SiSpotify, SiFacebook } from "react-icons/si";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row bg-secondary ">
          <div className="col-md-8 text-center text-md-left ">
            <h1>The Generics</h1>
          </div>
          <div className="col-md-4 border ">
            <div className="d-flex justify-content-between mt-md-3  mb-2">
              <a
                rel="noreferrer"
                href="https://www.youtube.com"
                target="_blank">
                <SiYoutube size={32} />
              </a>
              <a
                rel="noreferrer"
                href="https://www.spotify.com"
                target="_blank">
                <SiSpotify size={32} />
              </a>
              <a
                rel="noreferrer"
                href="https://www.facebook.com"
                target="_blank">
                <SiFacebook size={32} /> {/* Facebook icon */}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
