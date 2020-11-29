export type Token = string;

export type Track = {
  title: string;
  download: string;
};

export type User = {
  name: string;
};

const apiUrl = "https://api.soundcloud.com";

export const authenticate = async (): Promise<Token> => {
  const clientId: string = process.env.REACT_APP_SC_CLIENT_ID || "";
  const redirectUri: string = process.env.REACT_APP_SC_REDIRECT_URI || "";

  const query = new URLSearchParams({
    client_id: clientId,
    redirect_uri: redirectUri,
    response_type: "token",
    scope: "non-expiring",
    display: "popup",
  });

  window.open(
    `https://soundcloud.com/connect?${query.toString()}`,
    "soundcloud-auth-popup",
    "width=400, height=600, location=yes, toolbar=no, scrollbars=yes"
  );

  return new Promise<Token>((resolve, reject) => {
    window.addEventListener(
      "message",
      function receiveToken(event) {
        console.dir(event);

        if (event.origin !== "https://downcloud.ruud.ninja") {
          return;
        }

        const { data } = event;

        if (!data || !data.source || data.source !== "auth-callback") {
            return;
        }

        window.removeEventListener("message", receiveToken, false);

        resolve(data);
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
