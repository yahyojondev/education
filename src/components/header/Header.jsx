import React, { memo } from "react";
import Navbar from "../navbar/Navbar";
import NavbarBottom from "../navbarbottom/NavbarBottom";

const Header = () => {
  return (
    <div className="header">
      <Navbar />
      <NavbarBottom />
    </div>
  );
};

export default memo(Header);
