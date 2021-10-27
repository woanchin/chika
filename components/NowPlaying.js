import React from "react";
import useSWR from "swr";
import { useEffect } from "react";
import { animate } from "motion";
import Heading from "@chakra-ui/react";
import { useColorMode, IconButton } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import { getNowPlaying } from "../lib/spotify";
import fetcher from "../lib/fetcher";
import { Text, Box, Link as ChakraLink, Flex } from "@chakra-ui/react";
import { SiSpotify } from "react-icons/si";
export default function NowPlaying() {
  const { data } = useSWR("/api/now-playing", fetcher);

  return (
    <Flex flex-direction="row" mt={4} alignItems="center">
      <Box mr={2}>
        <ChakraLink href="https://www.spotify.com/us/">
          <IconButton aria-label="Spotify" icon={<SiSpotify />} />
        </ChakraLink>
      </Box>
      {data?.track.songUrl ? (
        <Text>
          Now playing <ChakraLink>{data.track.title}</ChakraLink>&ensp;-&ensp;
        </Text>
      ) : (
        <Text>Not playing&ensp;</Text>
      )}
      <Text>{data?.track.artist ?? "Spotify"}</Text>
    </Flex>
  );
}
