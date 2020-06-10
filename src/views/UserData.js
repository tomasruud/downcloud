import React, { useLayoutEffect } from "react";
import { connect } from "react-redux";

import { user } from "../selectors";
import { user as userActions } from "../actions";
import { Heading, Link, Raw, Spinner, TextButton } from "../components";

const UserData = ({ isLoading, user, fetchUser }) => {
  useLayoutEffect(() => {
    if (!user) {
      fetchUser();
    }
  }, [user, fetchUser]);

  if (isLoading) {
    return (
      <>
        <Heading type="h1">Gathering information</Heading>
        <Spinner />
      </>
    );
  }

  return (
    <>
      <TextButton as={Link} to="/overview" style={{ marginBottom: "1rem" }}>
        Back
      </TextButton>
      <Heading type="h1">Your user data</Heading>
      <Raw>{user}</Raw>
    </>
  );
};

const mapState = (state) => ({
  user: user.user(state),
  isLoading: user.loading(state),
});

const mapDispatch = (dispatch) => ({
  fetchUser: () => dispatch(userActions.get()),
});

export default connect(mapState, mapDispatch)(UserData);
