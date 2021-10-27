import { useColorMode } from "@chakra-ui/color-mode";
import MainLayout from "../components/MainLayout";
import Head from "next/head";
import Link from "next/link";
import {
  Stack,
  Box,
  IconButton,
  Flex,
  HStack,
  Text,
  Spacer,
  Heading,
} from "@chakra-ui/react";
import { SiCouchbase, SiScala, SiTeamcity } from "react-icons/si";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import React from "react";

export default function Portfolio() {
  const { colorMode } = useColorMode();
  const colorSecondary = {
    light: "gray.700",
    dark: "gray.400",
  };
  const navHoverBg = {
    light: "gray.600",
    dark: "gray.300",
  };
  const iconColor = {
    light: "black",
    dark: "white",
  };

  return (
    <MainLayout>
      <Head>
        <title>Chika</title>
      </Head>
      <Stack>
        <Flex
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          maxWidth="800px"
          mb={3}
        >
          <Heading mb={2}>Citi</Heading>
          <Heading size="md" mb={1}>
            2018 - Current
          </Heading>
          <Text color={colorSecondary[colorMode]}>
            Software Developer at Equities Team. Created a new API capable of
            returning PDFs, allowing clients to fetch financial documents
            quickly. It has processed over 100 request in a day. Started out as
            a HTTP4s stack and then migrated into Play Framework web
            application.
          </Text>
        </Flex>
        <Heading size="lg">Technologies I&apos;ve used</Heading>
        <HStack
          flexDirection="row"
          justifyContent="flex-start"
          alignItems="flex-start"
          p={[0, 2, 2, 0]}
          maxWidth="800px"
          spacing="24px"
        >
          <Box>
            <Link href="https://www.scala-lang.org/" passHref>
              <IconButton
                aria-label="Scala"
                icon={<SiScala />}
                color={iconColor[colorMode]}
              />
            </Link>
          </Box>
          <Box>
            <Link href="https://www.jetbrains.com/teamcity/" passHref>
              <IconButton
                aria-label="Teamcity"
                icon={<SiCouchbase />}
                color={iconColor[colorMode]}
              />
            </Link>
          </Box>
          <Box>
            <Link href="https://www.jetbrains.com/teamcity/" passHref>
              <IconButton
                aria-label="Teamcity"
                icon={<SiTeamcity />}
                color={iconColor[colorMode]}
              />
            </Link>
          </Box>
        </HStack>
      </Stack>
    </MainLayout>
  );
}
