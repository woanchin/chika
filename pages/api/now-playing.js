import { getNowPlaying } from "../../lib/spotify";

export default async (_, res) => {
  const response = await getNowPlaying();
  const items = await response.json();
  const nowPlaying = items.item.artists.find((e) => true);
  const image = items.item.album.images.find((e) => true);

  console.log(items);

  const track = {
    artist: nowPlaying.name,
    songUrl: items.item.external_urls.spotify,
    imageUrl: image.url,
    title: items.item.name,
  };

  return res.status(200).json({ track });
};
