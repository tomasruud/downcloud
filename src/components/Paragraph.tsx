import React, { memo, ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const Paragraph = ({ children }: Props) => (
  <p className="mb-3 leading-relaxed">{children}</p>
);

export default memo(Paragraph);
