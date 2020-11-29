import React, { memo, ReactNode } from "react";

type Props = {
  type?: "plain";
  className?: string;
  onClick: () => void;
  children: ReactNode;
};

const styleFromType = (type: Props["type"]): string => {
  switch (type) {
    case "plain":
      return "cursor-pointer font-bold no-underline text-purple-500";

    default:
      return "cursor-pointer p-3 rounded bg-purple-500 text-white";
  }
};

const Button = ({ type, onClick, className, children }: Props) => (
  <button className={`${styleFromType(type)} ${className}`} onClick={onClick}>
    {children}
  </button>
);

export default memo(Button);
