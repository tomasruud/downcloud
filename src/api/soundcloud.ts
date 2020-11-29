export type Token = string;

export type Track = {
  title: string;
  download: string;
};

export type User = {
  name: string;
};

const apiUrl = "https://api.soundcloud.com";

export const authenticate = async (
  clientId: string,
  redirectUri: string,
  origin: string
): Promise<Token> => {
  const query = new URLSearchParams({
    client_id: clientId,
    redirect_uri: redirectUri,
    response_type: "token",
    scope: "non-expiring",
    display: "popup",
  });

  const popup = window.open(
    `https://soundcloud.com/connect?${query.toString()}`,
    "soundcloud-auth-popup",
    "width=400, height=600, location=yes, toolbar=no, scrollbars=yes"
  );

  return new Promise<Token>((resolve, reject) => {
    if (!popup) {
      reject("Unable to create authentication popup.");
      return;
    }

    type AuthEvent = {
      source: "auth-callback";
      params: string;
    };

    window.addEventListener(
      "message",
      function receiveToken(event: MessageEvent<AuthEvent>) {
        if (
          event.origin !== origin ||
          !event.data ||
          !event.data.source ||
          event.data.source !== "auth-callback"
        ) {
          return;
        }

        window.removeEventListener("message", receiveToken, false);
        popup.close();

        const params = new URLSearchParams(event.data.params);
        const token = params.get("access_token");

        if (!token) {
          reject("No access token was passed back.");
          return;
        }

        resolve(token);
      },
      false
    );
  });
};

export const tracks = async (token: Token): Promise<Track[]> => {
  return Promise.resolve([]);
};

export const user = async (token: Token): Promise<User> => {
  return Promise.resolve({ name: "Per" });
};
