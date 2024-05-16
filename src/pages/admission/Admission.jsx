import React, { memo } from "react";
import Empty from "../../components/empty/Empty";

const Admission = () => {
  window.scrollTo(0, 0);

  return (
    <div className="admission">
      <Empty />
    </div>
  );
};

export default memo(Admission);
