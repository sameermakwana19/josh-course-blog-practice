// "use client";
import React from "react";

import BlogSummaryCard from "@/components/BlogSummaryCard";

import styles from "./homepage.module.css";
import { getBlogPostList } from "@/helpers/file-helpers";

async function Home() {
  let arrayOfBlogPosts = await getBlogPostList();
  // console.log(arrayOfBlogPosts);

  return (
    <div className={styles.wrapper}>
      <p>{JSON.stringify(arrayOfBlogPosts)}</p>
      <h1 className={styles.mainHeading}>Latest Content:</h1>
      {/* TODO: Iterate over the data read from the file system! */}

      {/* <BlogSummaryCard
        slug="example"
        title="Hello world!"
        abstract="This is a placeholder, an example which shows how the “BlogSummaryCard” component should be used. You'll want to swap this out based on the data from the various MDX files!"
        publishedOn={new Date()}
      /> */}

      {/* Exercise 1 */}

      {arrayOfBlogPosts.map(({ slug, title, abstract, publishedOn }) => (
        <BlogSummaryCard
          slug={slug}
          title={title}
          publishedOn={publishedOn}
          abstract={abstract}
          key={crypto.randomUUID()}
        />
      ))}

      {/* End of Exercise 1 */}
    </div>
  );
}

export default Home;
