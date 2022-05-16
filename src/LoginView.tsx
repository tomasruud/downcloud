import { memo } from "react";
import { Button, Heading, Paragraph } from "./components";

type Props = {
  onAuthenticate: () => void;
};

const LoginView = ({ onAuthenticate }: Props) => (
  <>
    <Heading>Downcloud</Heading>
    <Paragraph>
      This app helps you download your own Souncloud tracks as original,
      uncompressed files.
    </Paragraph>
    <Button onClick={onAuthenticate}>Sign in with Soundcloud</Button> to get
    started
  </>
);

export default memo(LoginView);
