import React, { useEffect } from "react";
import ReactGA from "react-ga";
import { useAsyncResource } from "use-async-resource";

import { authenticate, tracks } from "api/soundcloud";
import { Link, Paragraph, Spinner } from "components";
import ErrorBoundary from "./ErrorBoundary";
import { useStore } from "./Store";
import TracksView from "./TracksView";
import LoginView from "./LoginView";

const App = () => {
  useEffect(() => {
    ReactGA.initialize(process.env.REACT_APP_GA_ID || "", {
      debug: process.env.NODE_ENV === "development",
    });

    ReactGA.pageview("/");
  }, []);

  const { state, dispatch } = useStore();
  const [authenticator, initializeAuth] = useAsyncResource(authenticate);
  const [tracksReader, getTracks] = useAsyncResource(tracks);

  return (
    <>
      <main>
        <ErrorBoundary>
          <React.Suspense fallback={<Spinner />}>
            {state.session.token !== "" ? (
              <TracksView tracksReader={tracksReader} />
            ) : (
              <LoginView onAuthenticate={() => {}} />
            )}
          </React.Suspense>
        </ErrorBoundary>
      </main>

      <footer className="mt-3 font-sm pt-3">
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

        <Paragraph noMargin={true}>
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

        <Paragraph>
          None of your data will be stored anywhere, everything is done in your
          browser session and destroyed once you exit/refresh the site.
        </Paragraph>
        <Paragraph>
          This site uses Google Analytics to analyze how the app is used, which
          means that there will be a necessary cookie set for this.
        </Paragraph>
      </footer>
    </>
  );
};

export default App;
