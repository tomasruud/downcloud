import { memo, useState } from "react";
import multiDownload from "multi-download";

import type { Track } from "./api/soundcloud";
import { Button, Heading, Link, Paragraph } from "./components";

type Props = {
  tracks: Track[];
};

const TracksView = ({ tracks }: Props) => {
  const [search, setSearch] = useState("");

  const filtered = tracks.filter((t) =>
    t.title.toLocaleLowerCase().includes(search.toLocaleLowerCase())
  );

  const sorted = filtered.sort((a, b) => {
    if (a.title < b.title) {
      return -1;
    }

    if (a.title > b.title) {
      return 1;
    }

    return 0;
  });

  return (
    <>
      <Heading>Your tracks</Heading>

      <Paragraph>Click on a track name to start downloading.</Paragraph>
      <Paragraph>
        If you're feeling lucky, you can try to{" "}
        <Button
          type="plain"
          onClick={() => multiDownload(tracks.map((t) => ""))}
        >
          download all tracks at once
        </Button>
        . Please note that this feature is experimental and may not work! If
        you're using Chrome, try disabling the option "Ask where to save each
        file before downloading" if it's not working properly.
      </Paragraph>

      <input
        type="text"
        className="mt-3 border border p-3 rounded focus:ring focus:ring-purple-500 w-full"
        placeholder="Filter by title..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <ul className="list-inside list-disc mt-6">
        {sorted.map((t, i) => (
          <li key={i} className="mb-2">
            <Link
              href="#"
              external={true}
              onClick={(e) => {
                e.preventDefault();
                t.download()
              }}
            >
              {t.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default memo(TracksView);
