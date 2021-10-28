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
    <Flex flex-direction="row" my={4} alignItems="center">
      <Box mr={5}>
        <ChakraLink href="https://www.spotify.com/us/">
          <IconButton aria-label="Spotify" icon={<SiSpotify />} />
        </ChakraLink>
      </Box>
      <Flex flex-direction="column">
        {data?.track.songUrl ? (
          <Box>
            <Text>Now playing </Text>
            <ChakraLink href={data.track.songUrl}>
              <Text as="i">
                {data.track.title}&ensp;-&ensp;{data?.track.artist}
              </Text>
            </ChakraLink>
          </Box>
        ) : (
          <Text>Not playing Spotify</Text>
        )}
      </Flex>
    </Flex>
  );
}
