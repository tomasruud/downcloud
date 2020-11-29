import React, { memo } from "react";
import multiDownload from "multi-download";
import type { LazyDataOrModifiedFn } from "use-async-resource";

import type { Track } from "api/soundcloud";
import { Button, Heading, Link, Paragraph, TrackList } from "components";

type Props = {
  tracksReader: LazyDataOrModifiedFn<Track[]>;
};

const TracksView = ({ tracksReader }: Props) => {
  const tracks = tracksReader();

  if (tracks === undefined) {
    return null;
  }

  return (
    <>
      <Heading type="h1">Your tracks</Heading>

      <Paragraph>Click on a track name to start downloading.</Paragraph>
      <Paragraph>
        If you're feeling lucky, you can try to{" "}
        <Button
          type="plain"
          onClick={() => multiDownload(tracks.map((t) => t.download))}
        >
          download all tracks at once
        </Button>
        . Please note that this feature is experimental and may not work! If
        you're using Chrome, try disabling the option "Ask where to save each
        file before downloading" if it's not working properly.
      </Paragraph>

      <TrackList>
        {tracks.map((t, i) => (
          <Link key={i} href={t.download} external={true}>
            {t.title}
          </Link>
        ))}
      </TrackList>
    </>
  );
};

export default memo(TracksView);
