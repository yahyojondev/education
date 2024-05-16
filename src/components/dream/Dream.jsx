import React, { useState, useRef } from "react";
import studentimages from "../../assets/images/student.svg";
import { FaAngleRight } from "react-icons/fa6";
import { Button } from "@mui/material";
import Pagenine from "../pagenine/Pagenine";

const Dream = () => {
  return (
    <div className="dream">
      <div className="container">
        <div className="dream__wrapper">
          <div className="dream__wrapper__top">
            <div className="student__titles">
              <img src={studentimages} alt="student" />
              <p>Admission Test</p>
            </div>
            <h2>Complete preparation for dream university</h2>
            <p>Complete preparation for dream university</p>
          </div>
          <Pagenine />
          <Button className="dream__btn" variant="contained">
            Contained <FaAngleRight />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Dream;
