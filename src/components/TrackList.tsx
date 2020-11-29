import React, { memo, ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const TrackList = ({ children }: Props) => (
  <ul>
    {React.Children.map(children, (e, i) => (
      <li key={i} className="mb-2 list-note">
        {e}
      </li>
    ))}
  </ul>
);

export default memo(TrackList);
