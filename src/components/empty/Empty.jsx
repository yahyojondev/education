import React from "react";
import emptyimg from "../../assets/images/empty.jpg";

const Empty = () => {
  window.scrollTo(0, 0);
  return (
    <div className="empty">
      <img src={emptyimg} alt="" />
    </div>
  );
};

export default Empty;
