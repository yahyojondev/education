import React, { memo } from "react";
import natureimages from "../../assets/images/nature.png";

const Nature = () => {
  return (
    <div className="nature">
      <img src={natureimages} alt="" />
    </div>
  );
};

export default memo(Nature);
