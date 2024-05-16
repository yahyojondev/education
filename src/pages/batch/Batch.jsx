import React, { memo } from "react";
import Empty from "../../components/empty/Empty";

const Batch = () => {
  window.scrollTo(0, 0);

  return (
    <div className="batch">
      <Empty />
    </div>
  );
};

export default memo(Batch);
