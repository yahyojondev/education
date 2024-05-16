import React, { memo } from "react";
import raketaimg from "../../assets/images/raketa.svg";
import checkimg from "../../assets/images/check.svg";
import platformimages from "../../assets/images/plaform.png";

const Platform = () => {
  return (
    <div className="platform">
      <div className="container">
        <div className="platform__wrapper">
          <div className="platform__wrapper__top">
            <div className="platform__wrapper__top__title__wrapper">
              <div className="title__wrapper">
                <img src={raketaimg} alt="raketa" />
                <p>SKILL</p>
              </div>
              <h2>The best skill development platform in the country</h2>
            </div>
            <ul className="platform__list">
              <li className="platform__list__item">
                <img src={checkimg} alt="check" />
                <p>The best teacher in the country</p>
              </li>
              <li className="platform__list__item">
                <img src={checkimg} alt="check" />
                <p>5 lakh+ students</p>
              </li>
              <li className="platform__list__item">
                <img src={checkimg} alt="check" />
                <p>70+ online courses</p>
              </li>
            </ul>
          </div>
          <div className="platform__wrapper__bottom">
            <img src={platformimages} alt="platform" />
            <h3>
              The best companies in the country are taking our Corporate Skills
              Development Programme
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Platform);
