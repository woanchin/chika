const clientId = process.env.SPOTIFY_CLIENT_ID;
const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;
const refreshToken = process.env.SPOTIFY_REFRESH_TOKEN;

const basic = Buffer.from(`${clientId}:${clientSecret}`).toString("base64");
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;

async function getAccessToken() {
  const params = { grant_type: "refresh_token", refresh_token: refreshToken };
  const searchParams = new URLSearchParams(params);
  const response = await fetch(TOKEN_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Basic ${basic}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: searchParams.toString(),
  });
  const jsonReply = await response.json();
  return jsonReply;
}

const RECENT_TRACKS_ENDPOINT = `https://api.spotify.com/v1/me/player/recently-played`;

export async function getRecentTracks() {
  const accessToken = await getAccessToken();
  return fetch(RECENT_TRACKS_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${accessToken.access_token}`,
    },
  });
}

const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;

export async function getNowPlaying() {
  const accessToken = await getAccessToken();
  return fetch(NOW_PLAYING_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${accessToken.access_token}`,
    },
  });
}
