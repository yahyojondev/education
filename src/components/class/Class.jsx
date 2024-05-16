import React, { memo } from "react";
import studentimages from "../../assets/images/student.svg";
import { Button } from "@mui/material";
import { FaAngleRight } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io5";
import filesimages from "../../assets/images/files.svg";
import paperimages from "../../assets/images/paper.png";
import studentperson from "../../assets/images/studentright.png";

const Class = () => {
  return (
    <div className="class">
      <div className="container">
        <div className="class__wrapper">
          <div className="class__wrapper__top">
            <div className="class__wrapper__title">
              <div className="class__wrapper__title__top">
                <img src={studentimages} alt="student" />
                <span>CLASS - 10</span>
              </div>
              <div className="class__wrapper__title__bottom">
                <h2>What is in the online batch throughout the year?</h2>
                <p>
                  May the progress of education continue from any part of the
                  country under the care of the best teachers
                </p>
              </div>
            </div>
            <div className="class__wrapper__boxs">
              <div className="class__wrapper__left">
                <div className="class__wrapper__left__box__top">
                  <IoLogoYoutube />
                  <div className="class__wrapper__left__box__top__right">
                    <p>Complete syllabus cover through live classes</p>
                    <span>
                      One teacher will take the class, the second teacher will
                      answer your various questions
                    </span>
                  </div>
                </div>
                <div className="class__wrapper__left__box__center">
                  <img src={filesimages} alt="files" />
                  <p>Lecture sheets and recorded classes</p>
                </div>
                <div className="class__wrapper__left__box__bottom">
                  <img src={paperimages} alt="paper" />
                  <p>Regular homework and tests</p>
                </div>
              </div>
              <div className="class__wrapper__right">
                <img src={studentperson} alt="person" />
              </div>
            </div>
          </div>
          <Button className="class__bottom__btn" variant="contained">
            CHOICE CLASS FOR <FaAngleRight />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default memo(Class);
