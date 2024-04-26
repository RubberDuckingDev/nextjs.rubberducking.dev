import { getPosts } from "./_actions/posts";

export default async function Home() {
  const featuredPosts: any = await getPosts();
  return (
    <div>
      <div className="flex flex-wrap">
        {featuredPosts.map((post: any) => (
          <div key={post.slug} className="w-48 gap-4">
            <h3>{post.title}</h3>
            <p>{post.slug}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
