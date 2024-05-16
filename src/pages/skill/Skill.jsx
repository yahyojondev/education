import React, { memo } from "react";
import Empty from "../../components/empty/Empty";
const Skill = () => {
  window.scrollTo(0, 0);
  return (
    <div className="skill">
      <Empty />
    </div>
  );
};

export default memo(Skill);
