import React from "react";
import appimg from "../../assets/images/app.png";
import playimg from "../../assets/images/play.png";
import phoneimg from "../../assets/images/phone.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <div className="footer__top">
            <h3>Call for any information regarding the course</h3>
            <span>8 am to 11 pm</span>
          </div>
          <div className="footer__bottom">
            <div className="footer__bottom__left">
              <h2>Download our mobile app, start learning today</h2>
              <div className="footer__bottom__left__images__wrapper">
                <img src={appimg} alt="app" />
                <img src={playimg} alt="play" />
              </div>
            </div>
            <div className="footer__bottom__right">
              <img src={phoneimg} alt="phone" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
