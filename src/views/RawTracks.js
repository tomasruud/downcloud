import React, { useLayoutEffect } from "react";
import { connect } from "react-redux";

import { tracks } from "../selectors";
import { tracks as trackActions } from "../actions";
import { Heading, Link, Raw, Spinner, TextButton } from "../components";

const RawTracks = ({ tracks, isLoading, fetchTracks }) => {
  useLayoutEffect(() => {
    if (!tracks) {
      fetchTracks();
    }
  }, [tracks, fetchTracks]);

  if (isLoading) {
    return (
      <>
        <Heading type="h1">Loading data</Heading>
        <Spinner />
      </>
    );
  }

  return (
    <>
      <TextButton as={Link} to="/" style={{ marginBottom: "1rem" }}>
        Back
      </TextButton>
      <Heading type="h1">Your raw track data</Heading>
      <Raw>{tracks}</Raw>
    </>
  );
};

const mapState = (state) => ({
  tracks: tracks.all(state),
  isLoading: tracks.loading(state),
});

const mapDispatch = (dispatch) => ({
  fetchTracks: () => dispatch(trackActions.get()),
});

export default connect(mapState, mapDispatch)(RawTracks);
