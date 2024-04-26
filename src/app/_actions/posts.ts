"use server";

import { db } from "@/server/db";

// import posts from "./posts.json";

export async function getPosts() {
  const posts = await db.query.posts.findMany({
    orderBy: (model, { desc }) => desc(model.publishedAt),
  });
  return posts;
}

// export async function getPostBySlug(slug: string) {
//   const post = await db.query.posts.findFirst({
//     where: (model, { equals }) => equals(model.slug, slug),
//   });
//   return post;
// }
