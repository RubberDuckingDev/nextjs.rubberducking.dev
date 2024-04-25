import { getPostBySlug } from "@/app/_actions/posts";
import styles from "./post.module.css";
import { notFound } from "next/navigation";

type PostProps = { params: { slug: string } };

export default async function Post({ params: { slug } }: PostProps) {
  const post: any = await getPostBySlug(slug);
  if (!post) {
    notFound();
  }
  return <h1>Post {post.title}</h1>;
}
