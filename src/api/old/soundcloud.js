const SC = require("soundcloud");

SC.initialize({
  client_id: process.env.REACT_APP_SC_CLIENT_ID,
  redirect_uri: process.env.REACT_APP_SC_REDIRECT_URI,
});

export const authenticate = async () => {
  const session = await SC.connect();
  return session.oauth_token;
};

export const getMe = async () => {
  return SC.get("/me");
};

export const getTracks = async () => {
  let result = await SC.get("/me/tracks", {
    limit: 50,
    linked_partitioning: true,
  });

  let tracks = [];

  while (true) {
    tracks = tracks.concat(result.collection);

    if (result.next_href) {
      let url = result.next_href.replace("https://api.soundcloud.com", "");
      result = await SC.get(url);
    } else {
      return tracks;
    }
  }
};

export const makeDownloadable = (url, token) => {
  const operator = url.includes("?") ? "&" : "?";
  return url + operator + "oauth_token=" + token;
};
