import React from "react";
import { FaChevronRight } from "react-icons/fa";
import { ownproduct } from "../../static/router";

const Own = () => {
  const ownItem = ownproduct?.map((el) => (
    <div key={el.id} className="own__card">
      <img src={el.img} alt={el.title} />
      <div className="own__card__text__wrapper">
        <p>{el.title}</p>
        <span>{el.text}</span>
      </div>
      <FaChevronRight />
    </div>
  ));
  return (
    <div className="own">
      <div className="container">
        <div className="own__wrapper">
          <div className="own__wrapper__title">
            <h2>Organize Your own Learning Let the Journey Begin</h2>
            <p>
              Go to the section of your choice to learn anything on any topic
            </p>
          </div>
          <div className="own__cards">{ownItem}</div>
        </div>
      </div>
    </div>
  );
};

export default Own;
