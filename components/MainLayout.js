import {
  useColorMode,
  Heading,
  Button,
  Flex,
  Box,
  Stack,
} from "@chakra-ui/react";
import styled from "@emotion/styled";

import Head from "next/head";
import Image from "next/image";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import { Link as ChakraLink } from "@chakra-ui/react";
import DarkModeSwitch from "./darkModeSwitch";

const name = "Chika";
export const siteTitle = "Chika";

export default function Layout({ children, home }) {
  const { colorMode } = useColorMode();
  const bgColor = {
    light: "white",
    dark: "#171717",
  };

  const navHoverBg = {
    light: "gray.600",
    dark: "gray.300",
  };

  const color = {
    light: "black",
    dark: "white",
  };

  const StickNav = styled(Flex)`
        position: sticky;
        z-index: 10;
        top: 0;
        backdrop-filter: saturate(100%) blue(20px)
        transition: height .5s, line-height .5s;
    `;

  return (
    <Stack
      justifyContent="center"
      m="0 auto 4rem auto"
      maxWidth="800px"
      w="100%"
    >
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
      </Head>
      <StickNav
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        maxWidth="800px"
        minwidth="356px"
        width="100%"
        bg={bgColor[colorMode]}
        as="nav"
        px={[2, 6, 0]}
        py={2}
        mt={8}
        mb={[0, 0, 8]}
        mx="auto"
      >
        <Box>
          <Link href="/" passHref>
            <Button
              as="a"
              variant="ghost"
              p={[1, 2, 4]}
              _hover={{ backgroundColor: navHoverBg[colorMode] }}
            >
              Home
            </Button>
          </Link>
          <Link href="/portfolio" passHref>
            <Button
              as="a"
              variant="ghost"
              p={[1, 2, 4]}
              _hover={{ backgroundColor: navHoverBg[colorMode] }}
            >
              Portfolio
            </Button>
          </Link>
          <Link href="/blog" passHref>
            <Button
              as="a"
              variant="ghost"
              p={[1, 2, 4]}
              _hover={{ backgroundColor: navHoverBg[colorMode] }}
            >
              Blog
            </Button>
          </Link>
        </Box>

        <DarkModeSwitch />
      </StickNav>
      <Flex as="header" flexDirection="column" alignItems="center">
        {home ? (
          <>
            <Image
              priority
              src="/images/profile.jpg"
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt={name}
            />
          </>
        ) : (
          <></>
        )}
      </Flex>
      <Flex
        as="main"
        flexDirection="column"
        bg={bgColor[colorMode]}
        color={color[colorMode]}
        px={[0, 4, 4]}
      >
        <main>{children}</main>
      </Flex>
      <Flex>
        {!home && (
          <Link href="/">
            <ChakraLink color={color[colorMode]}>← Back to home</ChakraLink>
          </Link>
        )}
      </Flex>
    </Stack>
  );
}
