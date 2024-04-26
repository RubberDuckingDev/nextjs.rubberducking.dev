import { getPosts } from "@/app/_actions/posts";
import styles from "./posts.module.css";

export default async function Posts() {
  const posts = await getPosts();
  console.log(posts);
  return (
    <div>
      <h1>Post</h1>
      <form></form>
    </div>
  );
}
