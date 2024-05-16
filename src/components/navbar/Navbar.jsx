import React, { memo, useState } from "react";
import { NavLink } from "react-router-dom";
import navlogo from "../../assets/images/navleft.png";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdPerson } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [see, setSee] = useState(false);
  return (
    <>
      {see ? (
        <form className="navbar__toggle">
          <ul>
            <li>
              <NavLink to={"/"}>CLASS 5-12</NavLink>
            </li>
            <li>
              <NavLink to={"/skill"}>SKILL</NavLink>
            </li>
            <li>
              <NavLink to={"/admission"}>ADMISSION</NavLink>
            </li>
            <li>
              <NavLink to={"/preparation"}>PREPARATION</NavLink>
            </li>
            <li>
              <NavLink to={"/batch"}>BATCH 2023</NavLink>
            </li>
          </ul>
          <div className="navbar__toogle__form">
            <select name="" id="">
              <option value="EN">EN</option>
              <option value="EN">UZ</option>
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
          <IoClose
            className="toogle__close"
            values="see"
            onClick={() => setSee((p) => !p)}
          />
        </form>
      ) : (
        <></>
      )}

      <div className="navbar">
        <div className="container">
          <div className="navbar__wrapper">
            <NavLink to={"/"}>
              <img className="navbar__left__img" src={navlogo} alt="" />
            </NavLink>
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
            <button
              className="navbar__burger"
              value={see}
              onClick={() => setSee((p) => !p)}
            >
              <RxHamburgerMenu />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(Navbar);
