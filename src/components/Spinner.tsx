import React, { memo } from "react";

type Props = {
  className?: string;
};

const Spinner = ({ className }: Props) => (
  <span className={`block relative w-4 h-4 ${className}`}>
    <span className="block animate-ping absolute bg-orange-500 h-full w-full rounded-full opacity-75" />
  </span>
);

export default memo(Spinner);
