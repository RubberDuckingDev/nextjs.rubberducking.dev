"use server";

import posts from "./posts.json";

export async function getPosts() {
  return posts;
}

export async function getPostBySlug(slug: string) {
  const post = posts.find((post) => post.slug === slug);
  return post;
}
