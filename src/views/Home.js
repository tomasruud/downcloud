import React, { useLayoutEffect } from "react";
import ReactGA from "react-ga";
import { connect } from "react-redux";

import { user } from "../selectors";
import { user as userActions } from "../actions";
import {
  Heading,
  Link,
  Paragraph,
  Spinner,
  TextButton,
  TrackList,
} from "../components";

const reload = () => {
  ReactGA.event({
    category: "Session",
    action: "Used sign out button",
  });

  window.location.reload();
};

const Home = ({ isLoading, user, fetchUser }) => {
  useLayoutEffect(() => {
    if (!user) {
      fetchUser();
    }
  }, [user, fetchUser]);

  if (isLoading || !user) {
    return (
      <>
        <Heading type="h1">Gathering information...</Heading>
        <Spinner />
      </>
    );
  }

  return (
    <>
      <Heading type="h1">
        Hey
        {!!user.permalink && " " + user.permalink}!
      </Heading>

      <Paragraph>
        Select what data you want to view from the menu below. You can also{" "}
        <TextButton as="button" onClick={reload}>
          sign out
        </TextButton>{" "}
        and try again with a different account.
      </Paragraph>

      <TrackList>
        <TextButton as={Link} to="/tracks">
          Tracks
        </TextButton>
        <TextButton as={Link} to="/tracks/raw">
          Raw track data (JSON)
        </TextButton>
        <TextButton as={Link} to="/user-data">
          User data (JSON)
        </TextButton>
      </TrackList>
    </>
  );
};

const state = (state) => ({
  user: user.user(state),
  isLoading: user.loading(state),
});

const dispatch = (dispatch) => ({
  fetchUser: () => dispatch(userActions.get()),
});

export default connect(state, dispatch)(Home);
