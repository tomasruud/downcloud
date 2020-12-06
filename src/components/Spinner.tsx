import React, { memo } from "react";

const Spinner = () => (
  <span className="flex relative h-4 w-4">
    <span className="animate-ping absolute inline-flex h-full w-full bg-purple-500 rounded-full" />
  </span>
);

export default memo(Spinner);
