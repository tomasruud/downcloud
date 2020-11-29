import React, { memo, useMemo } from "react";

type ButtonProps = React.HTMLProps<HTMLButtonElement> & {
  as: "button";
};

type LinkProps = React.HTMLProps<HTMLAnchorElement> & {
  as: "a";
  external?: boolean;
};

type Props = ButtonProps | LinkProps;

const TextButton = (props: Props) => {
  const target = useMemo(() => {
    if (props.as === "a" && props.external) {
      return {
        target: "_blank",
        rel: "noopener noreferrer",
      };
    }

    return {};
  }, [props]);

  const { as, children, className, ...rest } = props;

  return React.createElement(
    as,
    {
      className: `font-bold no-underline text-purple-500 hover:cursor-pointer ${className}`,
      ...target,
      ...rest,
    },
    children
  );
};

TextButton.defaultProps = {
  as: "a",
  external: false,
};

export default memo(TextButton);
