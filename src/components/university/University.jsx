import React, { useState, useRef, memo } from "react";
import studentimages from "../../assets/images/student.svg";
import { FaAngleRight } from "react-icons/fa6";
import { Button } from "@mui/material";
import UniversityPagenine from "../../components/universityPagenine/UniversityPagenine";

const Dream = () => {
  return (
    <div className="dream  university">
      <div className="container">
        <div className="dream__wrapper">
          <div className="dream__wrapper__top">
            <div className="student__titles">
              <img src={studentimages} alt="student" />
              <p>job preparation</p>
            </div>
            <h2>Complete preparation for dream university</h2>
            <p>BCS or bank job - whatever the target, the solution is here!</p>
          </div>
          <UniversityPagenine />
          <Button className="dream__btn" variant="contained">
            Contained <FaAngleRight />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default memo(Dream);
