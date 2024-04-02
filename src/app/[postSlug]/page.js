import React from "react";
import { MDXRemote } from "next-mdx-remote/rsc";
import BlogHero from "@/components/BlogHero";
import styles from "./postSlug.module.css";
import { loadBlogPost } from "@/helpers/file-helpers";
import { BLOG_TITLE } from "@/constants";
//  Other Option -  directly export the lazy wrapper component from index.js
import COMPONENT_MAP from "@/helpers/component-map";

// import dynamic from "next/dynamic";
// const DivisionGroupsDemo = dynamic(() =>
// import("@/components/DivisionGroupsDemo")
// );

// Exercise - 3 Adding Metadata

export async function generateMetadata({ params }) {
  const { frontmatter } = await loadBlogPost(params.postSlug);

  return {
    title: params.postSlug + "-" + BLOG_TITLE,
    description: frontmatter.abstract,
  };
}

// Exercise 2 -Displaying MDX

async function BlogPost({ params }) {
  const slug = params.postSlug;
  const { frontmatter, content } = await loadBlogPost(slug);
  return (
    <article className={styles.wrapper}>
      <BlogHero
        title={frontmatter.title}
        publishedOn={frontmatter.publishedOn}
      />
      <div className={styles.page}>
        {/* <p>This is where the blog post will go!</p>
        <p>
          You will need to use <em>MDX</em> to render all of
          the elements created from the blog post in this
          spot.
        </p> */}
        <MDXRemote source={content} components={COMPONENT_MAP} />
      </div>
      {/* {content} */}
    </article>
  );
}

export default BlogPost;
