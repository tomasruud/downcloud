import React, { memo, useCallback, useState } from "react";

import { authenticate } from "api/soundcloud";
import { Button, Heading, Paragraph, Spinner } from "components";
import { useStore } from "./Store";

const LoginView = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const { dispatch } = useStore();

  const onLogin = useCallback(() => {
    (async () => {
      try {
        setLoading(true);

        const token = await authenticate();

        dispatch({
          type: "setToken",
          payload: token,
        });

        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    })();
  }, []);

  if (error) {
    throw error;
  }

  if (loading) {
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
      <Button onClick={onLogin}>Sign in with Soundcloud</Button> to get started
    </>
  );
};

export default memo(LoginView);
