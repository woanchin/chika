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
import NowPlaying from "./NowPlaying";

import { motion } from "framer-motion";

const name = "Chika";
export const siteTitle = "Chika";

export default function MainLayout({ children, home }) {
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

  const variants = {
    hidden: { opacity: 0, x: -200, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -100 },
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
      px={4}
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
        <motion.main
          variants={variants}
          initial="hidden"
          animate="enter"
          exit="exit"
          variants={variants}
          transition={{ type: "linear" }}
          className="
                    flex flex-col items-start w-full pt-10
                    px-8 sm:px-16 md:px-36 lg:px-52 xl:px-80 2xl:px-96
                    pt-24 h-full
                "
        >
          <main>{children}</main>
        </motion.main>
        <NowPlaying />
      </Flex>

      <Flex px={[0, 4, 4]}>
        {!home && (
          <Link href="/">
            <ChakraLink color={color[colorMode]}>← Back to home</ChakraLink>
          </Link>
        )}
      </Flex>
    </Stack>
  );
}
