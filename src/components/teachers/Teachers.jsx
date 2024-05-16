import { Button } from "@mui/material";
import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import teacherimg from "../../assets/images/teacher.png";
import { teacherproduct } from "../../static/router";
import teacherbottomimages from "../../assets/images/teacherbottomright.png";
import Teachercenter from "../teacherCenter/Teachercenter";
import { memo } from "react";

const Teachers = () => {
  const teacherItem = teacherproduct?.map((el) => (
    <div
      key={el.id}
      style={{ backgroundColor: `${el.color}` }}
      className="teachers__wrapper__bottom__left__card"
    >
      <h2>{el.title}</h2>
      <p>{el.text}</p>
    </div>
  ));

  return (
    <div className="teachers">
      <div className="container">
        <div className="teachers__wrapper">
          <div className="teachers__wrapper__top">
            <div className="teachers__wrapper__top__left">
              <h2>
                Explore the “Free Downloads” section to download class notes and
                lecture sheets created by the best teachers
              </h2>
              <Button className="teacher__top__btn" variant="contained">
                JOIN FREE CLASS <FaAngleRight />
              </Button>
            </div>
            <img
              className="teacher__top__right__img"
              src={teacherimg}
              alt="teacher"
            />
          </div>
          <Teachercenter />
          <div className="teachers__wrapper__bottom">
            <div className="teachers__wrapper__bottom__left">{teacherItem}</div>
            <img
              className="teachers__wrapper__bottom__right"
              src={teacherbottomimages}
              alt="teacher"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Teachers);
