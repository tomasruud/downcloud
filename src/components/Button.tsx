import React, { memo, ReactNode } from "react";

type Props = {
  type?: "plain";
  className?: string;
  onClick: () => void;
  children: ReactNode;
  disabled?: boolean;
};

const styleFromType = (type: "plain" | undefined): string => {
  switch (type) {
    case "plain":
      return "cursor-pointer font-bold no-underline text-purple-500 inline hover:underline";

    default:
      return "cursor-pointer p-3 rounded bg-purple-500 text-white";
  }
};

const Button = ({
  type,
  onClick,
  className,
  children,
  disabled = false,
}: Props) => (
  <button
    className={`${styleFromType(type)} ${className}`}
    onClick={onClick}
    disabled={disabled}
  >
    {children}
  </button>
);

export default memo(Button);
