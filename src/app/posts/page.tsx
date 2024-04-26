import { getPosts } from "@/app/_actions/posts";
import styles from "./posts.module.css";

export default async function Posts() {
  const posts = await getPosts();
  console.log(posts);
  return (
    <>
      <div>
        <h1>Posts</h1>
        <ul>
          {posts.map((post: any) => (
            <>
              <li>
                <a key={post.slug} href={`/posts/${post.slug}`}>
                  {post.title}
                </a>
              </li>
            </>
          ))}
        </ul>
      </div>
    </>
  );
}
