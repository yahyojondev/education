import React from "react";
import navbarbottom1 from "../../assets/images/navbarbottom1.png";
import navbarbottom2 from "../../assets/images/navbarbottom2.png";
import navbarbottom3 from "../../assets/images/navbarbottom3.png";
import navbarbottom4 from "../../assets/images/navbarbottom4.png";
import { IoMdPerson } from "react-icons/io";

const NavbarBottom = () => {
  return (
    <div className="navbarbottom">
      <div className="container">
        <div className="navbarbottom__wrapper">
          <img className="navbarbottom__img1" src={navbarbottom1} alt="" />
          <img className="navbarbottom__img2" src={navbarbottom2} alt="" />
          <img className="navbarbottom__img3" src={navbarbottom3} alt="" />
          <div className="navbarbottom__img__wrapper">
            <img className="navbarbottom__img4" src={navbarbottom4} alt="" />
            <span>10</span>
          </div>
          <div className="navbarbottom__login">
            <IoMdPerson />
            <span>JOIN NOW</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarBottom;
