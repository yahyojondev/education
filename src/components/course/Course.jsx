import React, { memo } from "react";
import { courseproduct } from "../../static/router";

const Course = () => {
  const courseItem = courseproduct?.map((el) => (
    <div key={el.id} className="course__card">
      <img src={el.img} alt={el.title} />
      <div className="course__card__content">
        <p>{el.title}</p>
        <span>${el.price}</span>
      </div>
    </div>
  ));

  return (
    <div className="course">
      <div className="container">
        <div className="course__wrapper">
          <h2 className="course__title">A New Crash Course Has Arrived</h2>
          <div className="course__cards">{courseItem}</div>
        </div>
      </div>
    </div>
  );
};

export default memo(Course);
