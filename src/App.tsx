import React, { useEffect, useMemo } from "react";
import ReactGA from "react-ga";

import { Track, tracks } from "api/soundcloud";
import { Paragraph, Reveal, Spinner, TextButton } from "components";
import ErrorBoundary from "./ErrorBoundary";
import LoginView from "./LoginView";
import { useStore } from "./Store";
import TracksView from "./TracksView";

const initTrackReader = (token: string): (() => Track[]) => {
  let data: Track[];
  let status = "init";
  let error: Error;

  const fetchTracks = tracks(token)
    .then((tracks) => {
      data = tracks;
      status = "done";
    })
    .catch((err) => {
      error = err;
      status = "error";
    });

  return () => {
    if (status === "init") {
      throw fetchTracks;
    }

    if (status === "error") {
      throw error;
    }

    return data;
  };
};

const App = () => {
  useEffect(() => {
    ReactGA.initialize(process.env.REACT_APP_GA_ID || "", {
      debug: process.env.NODE_ENV === "development",
    });

    ReactGA.pageview("/");
  }, []);

  const { state } = useStore();

  const { isAuthenticated, token } = useMemo(
    () => ({
      isAuthenticated: state.token !== "",
      token: state.token,
    }),
    [state]
  );

  const trackReader = useMemo(() => initTrackReader(token), [token]);

  return (
    <>
      <main>
        <ErrorBoundary>
          <React.Suspense fallback={<Spinner />}>
            {isAuthenticated ? (
              <TracksView tracksReader={trackReader} />
            ) : (
              <LoginView />
            )}
          </React.Suspense>
        </ErrorBoundary>
      </main>

      <footer className="mt-3 font-sm pt-3">
        <Paragraph>
          <TextButton href="https://www.buymeacoffee.com/tomas" external={true}>
            Buy me a coffee?
          </TextButton>
        </Paragraph>

        <Paragraph>
          <TextButton href="https://soundcloud.com/autodrums" external={true}>
            @autodrums
          </TextButton>{" "}
          on Soundcloud
          <br />
          <TextButton href="https://github.com/tomasruud" external={true}>
            @tomasruud
          </TextButton>{" "}
          on Github
        </Paragraph>

        <Reveal label="Legal stuff">
          <Paragraph>
            None of your data will be stored anywhere, everything is done in
            your browser session and destroyed once you exit/refresh the site.
          </Paragraph>
          <Paragraph>
            This site uses Google Analytics to analyze how the app is used,
            which means that there will be a necessary cookie set for this.
          </Paragraph>
        </Reveal>

        <Paragraph noMargin={true}>
          <TextButton
            href="https://github.com/tomasruud/downcloud/issues"
            external={true}
          >
            Report issues
          </TextButton>
          <br />
          <TextButton
            href="https://github.com/tomasruud/downcloud/tree/master/changelog.md"
            external={true}
          >
            Changelog
          </TextButton>
          <br />
          Version {process.env.REACT_APP_VERSION}
        </Paragraph>
      </footer>
    </>
  );
};

export default App;
