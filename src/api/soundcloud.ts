import axios from "axios";

const apiUrl = "https://api.soundcloud.com";

export const authenticate = async (
  clientId: string,
  redirectUri: string,
  origin: string
): Promise<Token> => {
  return new Promise<Token>((resolve, reject) => {
    const query = new URLSearchParams({
      client_id: clientId,
      redirect_uri: redirectUri,
      response_type: "token",
    });

    const popup = window.open(
      `https://soundcloud.com/connect?${query.toString()}`,
      "soundcloud-auth-popup",
      "width=400, height=600, location=yes, toolbar=no, scrollbars=yes"
    );

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
  const tracks: Track[] = [];
  let next: string = apiUrl + "/me/tracks";
  while (!!next) {
    const { data } = await axios.get<PaginatedResponse<SoundcloudTrack[]>>(
      next,
      {
        headers: { Authorization: "OAuth " + token },
        params: { linked_partitioning: true, limit: 50 },
      }
    );

    tracks.push(
      ...data.collection.map((t) => ({
        id: t.id,
        title: t.title,
        download: () => {
          const res = axios.get(t.stream_url.replace("stream", "download"), {
            headers: { Authorization: "OAuth " + token },
          });
        },
      }))
    );

    console.dir("tracks", tracks);
    console.log("next", data.next_href);

    next = data.next_href || undefined;
  }

  return tracks;
};

type Token = string;

interface PaginatedResponse<T> {
  collection: T;
  next_href?: string;
}

interface SoundcloudTrack {
  id: number;
  title: string;
  download_url: string;
  stream_url: string;
}

export interface Track {
  id: number;
  title: string;
  download: () => void;
}
