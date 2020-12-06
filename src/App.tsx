import React, { ReactElement, useEffect, useState } from "react";
import ReactGA from "react-ga";

import type { Track } from "types";
import * as soundcloud from "api/soundcloud";
import { Link, Paragraph, Spinner } from "components";
import TracksView from "./TracksView";
import LoginView from "./LoginView";

const App = () => {
  useEffect(() => {
    ReactGA.initialize(process.env.REACT_APP_GA_ID || "", {
      debug: process.env.NODE_ENV === "development",
    });

    ReactGA.pageview("/");
  }, []);

  const [token, setToken] = useState("");
  const [tracks, setTracks] = useState<Track[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<any | null>(null);

  let content: ReactElement;

  if (loading) {
    content = <Spinner />;
  } else if (token === "") {
    const onAuthenticate = async () => {
      try {
        setLoading(true);

        const token = await soundcloud.authenticate(
          process.env.REACT_APP_SC_CLIENT_ID || "",
          process.env.REACT_APP_SC_REDIRECT_URI || "",
          process.env.REACT_APP_URI || ""
        );
        setToken(token);

        const tracks = await soundcloud.tracks(token);
        setTracks(tracks);
      } catch (err) {
        console.error(err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    content = <LoginView onAuthenticate={onAuthenticate} />;
  } else if (error !== null) {
    content = <>An error occurred</>;
  } else {
    content = <TracksView tracks={tracks} />;
  }

  return (
    <div className="container mx-auto max-w-2xl">
      <main className="py-6 px-12">{content}</main>

      <footer className="py-6 px-12 mt-6 bg-gray-100 md:rounded">
        <Paragraph>
          <Link href="https://www.buymeacoffee.com/tomas" external={true}>
            Buy me a coffee?
          </Link>
        </Paragraph>

        <Paragraph>
          <Link href="https://soundcloud.com/autodrums" external={true}>
            @autodrums
          </Link>{" "}
          on Soundcloud
          <br />
          <Link href="https://github.com/tomasruud" external={true}>
            @tomasruud
          </Link>{" "}
          on Github
        </Paragraph>

        <Paragraph>
          <Link
            href="https://github.com/tomasruud/downcloud/issues"
            external={true}
          >
            Report issues
          </Link>
          <br />
          <Link
            href="https://github.com/tomasruud/downcloud/tree/master/changelog.md"
            external={true}
          >
            Changelog
          </Link>
          <br />
          Version {process.env.REACT_APP_VERSION}
        </Paragraph>
      </footer>

      <span className="text-gray-400 text-xs py-6 px-12 block">
          <Paragraph>
            None of your data will be stored anywhere, everything is done in
            your browser session and destroyed once you exit/refresh the site.
          </Paragraph>
          <Paragraph>
            This site uses Google Analytics to analyze how the app is used,
            which means that there will be a necessary cookie set for this.
          </Paragraph>
        </span>
    </div>
  );
};

export default App;
