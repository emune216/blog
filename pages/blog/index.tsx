import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { NextPage } from "next";
import Link from "next/link";

interface FrontFormatter {
  [key: string]: any;
}

interface Post {
  preview: FrontFormatter;
  slug: string;
}

interface BlogPageProps {
  posts: Post[];
}

const Blog: NextPage<BlogPageProps> = ({ posts }: BlogPageProps) => {
  return (
    <>
      <div>Blog!</div>
      <ul>
        {posts.map((post, index) => (
          <li key={post.slug + index}>
            <Link href={`/blog/${post.slug}`} passHref>
              <a>
                <h5>{post.preview?.title}</h5>
                <p>{post.preview?.description}</p>
                <p>
                  <small>{post.preview?.date}</small>
                </p>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Blog;

export const getStaticProps = async () => {
  const files = fs.readdirSync(path.join("posts"));

  const posts = files.map((filename) => {
    const markdownWithMeta = fs.readFileSync(path.join("posts", filename));
    const { data: preview } = matter(markdownWithMeta);

    return { preview, slug: filename.split(".")[0] };
  });

  return {
    props: {
      posts,
    },
  };
};
