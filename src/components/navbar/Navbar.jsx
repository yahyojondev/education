import React from "react";
import { NavLink } from "react-router-dom";
import navlogo from "../../assets/images/navleft.png";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdPerson } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="navbar__wrapper">
          <img className="navbar__left__img" src={navlogo} alt="" />
          <ul className="navbar__list">
            <li className="navbar__list__item">
              <NavLink to={"/"}>CLASS 5-12</NavLink>
            </li>
            <li className="navbar__list__item">
              <NavLink to={"/skill"}>SKILL</NavLink>
            </li>
            <li className="navbar__list__item">
              <NavLink to={"/admission"}>ADMISSION</NavLink>
            </li>
            <li className="navbar__list__item">
              <NavLink to={"/preparation"}>PREPARATION</NavLink>
            </li>
            <li className="navbar__list__item">
              <NavLink to={"/batch"}>BATCH 2023</NavLink>
            </li>
          </ul>
          <div className="navbar__wrapper__right">
            <select name="" id="">
              <option value="EN">EN</option>
            </select>
            <div className="number__wrapper">
              <FaPhoneAlt />
              <span>16457</span>
            </div>
            <div className="login__wrapper">
              <IoMdPerson />
              <span>LOG IN</span>
            </div>
          </div>
          <RxHamburgerMenu className="navbar__burger" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
