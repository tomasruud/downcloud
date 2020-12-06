import axios from "axios";
import { Track } from "../types";

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
      scope: "non-expiring",
      display: "popup",
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
  const query = new URLSearchParams({
    oauth_token: token,
    linked_partitioning: "1",
    limit: "200",
  });

  const tracks: Track[] = [];
  let next: string | undefined;
  do {
    let url = `${apiUrl}/me/tracks?${query.toString()}`;

    if (next && next !== "") {
      url = `${next}&oauth_token=${token}`;
    }

    const { data } = await axios.get<PaginatedResponse<SoundcloudTrack[]>>(url);
    tracks.push(...data.collection.map(soundcloudTrackToInternal(token)));

    next = data.next_href;
  } while (!!next);

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
}

const soundcloudTrackToInternal = (token: Token) => (
  track: SoundcloudTrack
): Track => {
  return {
    title: track.title,
    download: `${track.download_url}&oauth_token=${token}`,
  };
};
