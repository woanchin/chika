import fs from "fs";
import path from "path";
import matter from "gray-matter";
import remark from "remark";

import html from "remark-html";
import readingTime from "reading-time";
import MDXComponents from "../components/MDXComponents";
import { serialize } from "next-mdx-remote/serialize";
import { isContext } from "vm";

const postsDirectory = path.join(process.cwd(), "posts");

export function getSortedPostsData() {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.mdx$/, "");
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    const matterResult = matter(fileContents);
    return {
      id,
      ...matterResult.data,
    };
  });

  return allPostsData.sort(({ publishedAt: a }, { publishedAt: b }) => {
    if (a < b) {
      return 1;
    } else if (a > b) {
      return -1;
    } else {
      return 0;
    }
  });
}

export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory);

  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.mdx$/, ""),
      },
    };
  });
}

export async function getPostData(id) {
  const fullPath = path.join(postsDirectory, `${id}.mdx`);
  const fileContents = fs.readFileSync(fullPath, `utf8`);

  const matterResult = matter(fileContents);

  const mdxSource = await serialize(matterResult.content);

  return {
    mdxSource,
    frontMatter: {
      wordCount: matterResult.content.split(/\s+/gu).length,
      readingTime: readingTime(matterResult.content),
      id,
      ...matterResult.data,
    },
  };
}
