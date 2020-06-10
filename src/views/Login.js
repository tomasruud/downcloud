import React from "react";
import { connect } from "react-redux";

import { session as sessionActions } from "../actions";
import { session } from "../selectors";
import { Button, Heading, Paragraph, Spinner } from "../components";

const Login = ({ isLoading, onLoginClick }) => {
  if (isLoading) {
    return (
      <>
        <Heading type="h1">Signing you in...</Heading>
        <Spinner />
      </>
    );
  }

  return (
    <>
      <Heading type="h1">Downcloud</Heading>
      <Paragraph>
        This app helps you download your own Souncloud tracks as original,
        uncompressed files.
      </Paragraph>
      <Button onClick={onLoginClick}>Sign in with Soundcloud</Button> to get
      started
    </>
  );
};

const mapState = (state) => ({
  isLoading: session.loading(state),
});

const mapDispatch = (dispatch) => ({
  onLoginClick: () => dispatch(sessionActions.authenticate()),
});

export default connect(mapState, mapDispatch)(Login);
