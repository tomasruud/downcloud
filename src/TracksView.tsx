import React, { memo } from "react";
import ReactGA from "react-ga";
import multiDownload from "multi-download";

import type { Track } from "api/soundcloud";
import { Heading, Paragraph, TextButton, TrackList } from "components";

type Props = {
  tracksReader: () => Track[];
};

const TracksView = ({ tracksReader }: Props) => {
  const tracks = tracksReader();

  return (
    <>
      <Heading type="h1">Your tracks</Heading>

      <Paragraph>Click on a track name to start downloading.</Paragraph>
      <Paragraph>
        If you're feeling lucky, you can try to{" "}
        <TextButton
          as="button"
          onClick={() => {
            ReactGA.event({
              category: "Tracks",
              action: "Clicked 'download all'",
              label: "Track count",
              value: tracks.length,
            });

            multiDownload(tracks.map((t) => t.download));
          }}
        >
          download all tracks at once
        </TextButton>
        . Please note that this feature is experimental and may not work! If
        you're using Chrome, try disabling the option "Ask where to save each
        file before downloading" if it's not working properly.
      </Paragraph>

      <TrackList>
        {tracks.map((t, i) => (
          <TextButton
            key={i}
            href={t.download}
            external={true}
            onClick={() => {
              ReactGA.event({
                category: "Tracks",
                action: "Clicked on single track download link",
              });
            }}
          >
            {t.title}
          </TextButton>
        ))}
      </TrackList>
    </>
  );
};

export default memo(TracksView);
