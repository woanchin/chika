
import Link from "next/link";
import {
  Box,
  IconButton,
  Flex,
  HStack,
  Text,
  Heading,
} from "@chakra-ui/react";
import { SiScala, SiReact, SiPostgresql, SiApachekafka } from "react-icons/si";
import React from "react";


const EndowusPortfolio = ({colorMode, colorSecondary, colorTertiary, iconColor}) => {
    return (<>
    <Flex
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          maxWidth="800px"
          mb={5}
        >
          <Heading mb={2}>Endowus</Heading>
          <Heading size="md" mb={1}>
            2022 - 2023
          </Heading>
          <Text color={colorSecondary[colorMode]} mb={4}>
            I had the chance to work in 2 teams in Endouws. In the onboarding team, I had a chance
            to be full-stack and worked on some Typescript/React frontend project as well as supporting
            a scala play backend project. I enabled the client-facing service to recognise users&apos; 
            own deposits to allow them to complete the onboarding process by using Kafka producer/subscribers.
            At the front-end side, I integrated Google&apos; Recaptcha library into the company&apos; React app and succsesfully reduced bot signups at our entry points and Webflow projects. 
          </Text>
          <Text color={colorTertiary[colorMode]} mb={4}>
          For a period of time, I was rotated to the Trading team which manages the daily order transactions to fundhouses. Using Play, Akka Streams, I developed a process that allows my service API to digest
          incoming buy/sell orders in MT910 files. While gearing towards product launch 
          in a new region, I created the necessary database interfaces and implementations 
          for postgres to not only keep track of transactions but also the events/state changes
          in our services. These classes apply the CQRS and event sourcing patterns.
          </Text>
        </Flex>
        <Flex
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          maxWidth="800px"
          mb={5}
        >
          <Heading mb={2} size="md">
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
              <Link href="https://react.dev/" passHref>
                <IconButton
                  aria-label="React"
                  icon={<SiReact />}
                  color={iconColor[colorMode]}
                />
              </Link>
            </Box>
            <Box>
              <Link href="https://www.postgresql.org/" passHref>
                <IconButton
                  aria-label="Postgres"
                  icon={<SiPostgresql />}
                  color={iconColor[colorMode]}
                />
              </Link>
            </Box>
            <Box>
              <Link href="https://kafka.apache.org/" passHref>
                <IconButton
                  aria-label="Kafka"
                  icon={<SiApachekafka />}
                  color={iconColor[colorMode]}
                />
              </Link>
            </Box>
          </HStack>
        </Flex>
        </>)
};

export default EndowusPortfolio;