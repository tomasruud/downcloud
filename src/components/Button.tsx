import React, { memo, ReactNode } from "react";

type Props = {
  className?: string;
  onClick: () => void;
  children: ReactNode;
};

const Button = ({ onClick, className, children }: Props) => (
  <button
    className={
      `cursor-pointer p-3 rounded bg-purple-500 text-white ${className}`
    }
    onClick={onClick}
  >
    {children}
  </button>
);

export default memo(Button);
