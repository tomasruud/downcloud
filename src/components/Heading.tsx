import React, { memo, ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const Heading = ({ children }: Props) => (
  <h1 className="text-xl mb-3">{children}</h1>
);

export default memo(Heading);
