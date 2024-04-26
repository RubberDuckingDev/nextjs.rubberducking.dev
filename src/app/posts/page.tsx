import { getPosts } from "@/app/_actions/posts";
import styles from "./posts.module.css";
import MDXPost from "components/posts/mdx-post";

export default async function Posts() {
  const posts = await getPosts();
  console.log(posts);
  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map((post: any) => (
          <li key={post.slug}>
            <a href={`/posts/${post.slug}`}>{post.title}</a>
          </li>
        ))}
      </ul>
      <MDXPost
        rawMDX={`# Hello World
       \`\`\`ts
       const a: string = "Hello World";
       \`\`\`
       
       
       `}
      />
    </div>
  );
}
