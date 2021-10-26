import React, { useState } from "react";
import Head from "next/head";
import {
  Heading,
  Flex,
  Stack,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";

import Layout from "../components/Layout";
import BlogLayout from "../components/BlogLayout";
import { getSortedPostsData } from "../lib/posts";

export default function Blog({ posts }) {
  const test = posts.map((frontMatter) => {
    return <BlogLayout key={frontMatter.title} />;
  });

  return (
    <>
      <Head>
        <title>Chika&apos;s Blog</title>
      </Head>
      <Layout>
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
            width="100%"
          >
            <Heading letterSpacing="tight" mb={2} as="h1" size="2xl">
              Blog
            </Heading>
            {posts.map((frontMatter) => (
              <BlogLayout key={frontMatter.title} {...frontMatter} />
            ))}
          </Flex>
        </Stack>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const posts = await getSortedPostsData();
  return { props: { posts } };
}
