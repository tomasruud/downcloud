import React, { memo, ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  noMargin?: boolean;
};

const Paragraph = ({ className, children, noMargin = false }: Props) => (
  <p className={`${noMargin ? "" : "mb-1"} ${className}`}>{children}</p>
);

export default memo(Paragraph);
