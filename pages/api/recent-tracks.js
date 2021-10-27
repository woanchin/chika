import { getRecentTracks } from "../../lib/spotify";

export default async (_, res) => {
  const response = await getRecentTracks();
  const { items } = await response.json();

  const tracks = items.slice(0, 10).map((entry) => ({
    artist: entry.track.artists.map((_artist) => _artist.name).join(", "),
    songUrl: entry.track.external_urls.spotify,
    title: entry.track.name,
  }));

  return res.status(200).json({ tracks });
};
