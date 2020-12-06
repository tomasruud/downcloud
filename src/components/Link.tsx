import React, { memo, ReactNode } from "react";

type Props = {
  href: string;
  external?: boolean;
  children: ReactNode;
};

const Link = ({ external = false, children, href }: Props) => {
  let target = {};

  if (external) {
    target = {
      target: "_blank",
      rel: "noopener noreferrer",
    };
  }

  return (
    <a
      className="font-bold no-underline text-purple-500 cursor-pointer hover:underline"
      href={href}
      {...target}
    >
      {children}
    </a>
  );
};

export default memo(Link);
