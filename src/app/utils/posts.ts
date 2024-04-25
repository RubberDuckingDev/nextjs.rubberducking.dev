"use server";

export async function getPosts() {
  const res = await fetch(`http://localhost:3000/api/posts`, {
    next: { revalidate: 1 },
  });
  return res.json();
}

export async function getPostBySlug(slug: string) {
  const res = await fetch(`http://localhost:3000/api/post/${slug}`, {
    next: { revalidate: 1 },
  });
  return res.json();
}
