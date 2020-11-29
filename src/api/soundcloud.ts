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

  return new Promise<Token>((resolve, reject) => {
    window.addEventListener(
      "message",
      function receiveToken(event) {
        console.dir(event);

        if (event.origin !== "https://downcloud.ruud.ninja") {
          return;
        }

        const { data } = event;
        console.dir(data);
        // window.removeEventListener("message", receiveToken, false);

        resolve(data);
      },
      false
    );

    const query = new URLSearchParams({
      client_id: clientId,
      redirect_uri: redirectUri,
      response_type: "token",
      scope: "non-expiring",
      display: "popup"
    });

    const uri = `https://soundcloud.com/connect?${query.toString()}`;

    const options: { [key: string]: string | number } = {
      location: 1,
      width: 400,
      height: 600,
      left: window.screenX + (window.outerWidth - 400) / 2,
      top: window.screenY + (window.outerHeight - 600) / 2,
      toolbar: "no",
      scrollbars: "yes",
    };

    window.open(
      uri,
      "authentication",
      Object.keys(options)
        .map((k) => `${k}=${options[k]}`)
        .join(", ")
    );
  });
};

export const tracks = async (token: Token): Promise<Track[]> => {
  return Promise.resolve([]);
};

export const user = async (token: Token): Promise<User> => {
  return Promise.resolve({ name: "Per" });
};
