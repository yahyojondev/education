import React from "react";
import teacherCenterImages from "../../assets/images/toast.png";
import { Button } from "@mui/material";
import { FaAngleRight } from "react-icons/fa6";

const Teachercenter = () => {
  return (
    <div className="teacherCenter">
      <div className="container">
        <div className="teacherCenter__wrapper">
          <img src={teacherCenterImages} alt="" />
          <div className="teacherCenter__textbtn">
            <h2>Join today Bangladesh's largest learning platform</h2>
            <Button className="teacherCenter__btn" variant="contained">
              Contained <FaAngleRight />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Teachercenter);
