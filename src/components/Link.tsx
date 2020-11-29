import React, { memo } from "react";

type Props = React.HTMLProps<HTMLAnchorElement> & {
  external?: boolean;
};

const Link = ({ external = false, children, className, ...props }: Props) => {
  let target = {};

  if (external) {
    target = {
      target: "_blank",
      rel: "noopener noreferrer",
    };
  }

  return (
    <a
      className={`font-bold no-underline text-purple-500 cursor-pointer ${className}`}
      {...target}
      {...props}
    >
      {children}{" "}
    </a>
  );
};

export default memo(Link);
