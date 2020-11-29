import React, { memo, ReactNode, useState } from "react";
import { TextButton } from ".";

type Props = {
  className?: string;
  label: string;
  children: ReactNode;
};

const Reveal = ({ label, className, children }: Props) => {
  const [visible, setVisible] = useState(false);

  const toggle = () => {
    setVisible(!visible);
  };

  return (
    <span className={className}>
      <TextButton as="button" onClick={toggle}>
        {label} [{visible ? "-" : "+"}]
      </TextButton>
      {visible && children}
    </span>
  );
};

export default memo(Reveal);
