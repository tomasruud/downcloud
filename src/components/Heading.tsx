import React, { memo, ReactNode } from "react";

type Props = {
  type: "h1" | "h2" | "h3";
  as?: string;
  className?: string;
  children: ReactNode;
};

const style = {
  h1: "text-xl",
  h2: "text-lg",
  h3: "text-md",
};

const Heading = ({ children, as, type, className }: Props) => {
  return React.createElement(
    as || type,
    {
      className: `${style[type]} ${className}`,
    },
    children
  );
};

export default memo(Heading);
