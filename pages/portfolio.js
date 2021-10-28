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
import { SiCouchbase, SiScala, SiTeamcity, SiKotlin } from "react-icons/si";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import React from "react";

export default function Portfolio() {
  const { colorMode } = useColorMode();
  const colorSecondary = {
    light: "gray.700",
    dark: "gray.400",
  };
  const colorTertiary = {
    light: "blue.700",
    dark: "blue.400",
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
          mb={5}
        >
          <Heading mb={2}>Citi</Heading>
          <Heading size="md" mb={1}>
            2018 - Current
          </Heading>
          <Text color={colorSecondary[colorMode]} mb={4}>
            Software Developer at Equities Team in Singapore. Created a new API
            capable of returning PDFs, allowing clients to fetch financial
            documents quickly. It has processed over 100 request in a day.
            Started out as a HTTP4s stack and then migrated into Play Framework
            web application to standardise with the rest of the team. It has a
            swagger interface and the logs are monitored with the ELK stack. The
            application is then deployed using Teamcity and UDeploy.
          </Text>
          <Text color={colorTertiary[colorMode]} mb={4}>
            Picked up Kotlin on the job in order to build a microservice that
            enhances JSON objects flowing into other downstream Kotlin
            microservices. No Framework is involved, just a very simple MVC
            based model that gets the job done.
          </Text>
        </Flex>
        <Flex
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          maxWidth="800px"
          mb={5}
        >
          <Heading mb={2} size="lg">
            Technologies I&apos;ve used
          </Heading>
          <HStack
            flexDirection="row"
            justifyContent="flex-start"
            alignItems="flex-start"
            maxWidth="800px"
            spacing="24px"
            mb={2}
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
                  aria-label="Couchbase"
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
            <Box>
              <Link href="https://www.jetbrains.com/teamcity/" passHref>
                <IconButton
                  aria-label="Kotlin"
                  icon={<SiKotlin />}
                  color={iconColor[colorMode]}
                />
              </Link>
            </Box>
          </HStack>
        </Flex>
      </Stack>
    </MainLayout>
  );
}
