import PostLayout from "../../components/PostLayout";
import { getAllPostIds, getPostData } from "../../lib/posts";
import Head from "next/head";
import Date from "../../components/date";
import MDXComponents from "../../components/MDXComponents";
import { MDXRemote } from "next-mdx-remote";

//dynamic routing

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: postData,
  };
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export default function Post({ mdxSource, frontMatter }) {
  const content = <MDXRemote {...mdxSource} components={MDXComponents} />;

  return <PostLayout frontMatter={frontMatter}>{content}</PostLayout>;
}
