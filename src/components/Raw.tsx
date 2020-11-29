import React, { memo, useMemo } from "react";

type Props = {
  className?: string;
  children: any[] | object | string;
};

const Raw = ({ className, children }: Props) => {
  const data = useMemo(() => {
    return JSON.stringify(children, null, 2);
  }, [children]);

  return (
    <pre className={`text-xs whitespace-pre-wrap ${className}`}>
      <code>{data}</code>
    </pre>
  );
};

export default memo(Raw);
