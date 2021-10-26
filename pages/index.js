import Head from "next/head";
import Link from "next/link";
import { Link as ChakraLink, List, ListItem } from "@chakra-ui/react";
import Date from "../components/date";
import Layout, { siteTitle } from "../components/Layout";
import { getSortedPostsData } from "../lib/posts";
import utilStyles from "../styles/utils.module.css";
import { useColorMode, Heading, Text, Flex, Stack } from "@chakra-ui/react";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  const { colorMode } = useColorMode();
  const colorSecondary = {
    light: "gray.700",
    dark: "gray.400",
  };

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Stack
        as="main"
        spacing={8}
        justifyContent="center"
        alignItems="flex-start"
        m="0 auto 1rem auto"
        maxWidth="800px"
      >
        <Flex
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          maxWidth="800px"
        >
          <div className={utilStyles.typewriter}>
            <h1 className={utilStyles.typewriter}>Hello My name is Chika.</h1>
          </div>

          <Text color={colorSecondary[colorMode]}>
            Meowmeow! Meow meow meow Chika~ Meow meow meow meow :) (This is
            still work in progress - while i try to get through the{" "}
            <ChakraLink href="https://nextjs.org/learn">
              NextJS tutorial
            </ChakraLink>
            . I added ChakraUI into this because dark mode is cool.)
          </Text>
        </Flex>
        <Flex flexDirection="column">
          <Heading>Blog</Heading>
          <List>
            {allPostsData.map(({ id, publishedAt, title }) => (
              <ListItem key={id}>
                <Link href={`/posts/${id}`}>
                  <ChakraLink>{title}</ChakraLink>
                </Link>
                <br />
                <small className={utilStyles.lightText}>
                  <Date dateString={publishedAt} />
                </small>
              </ListItem>
            ))}
          </List>
        </Flex>
      </Stack>
    </Layout>
  );
}
