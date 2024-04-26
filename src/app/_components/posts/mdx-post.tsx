import { MDXRemote } from "next-mdx-remote/rsc";
import rehypeHighlight from "rehype-highlight";

export const revalidate = 0;

type MDXPostProps = { rawMDX: string };

export default async function MDXPost({ rawMDX }: MDXPostProps) {
  // const { content, frontmatter } = await compileMDX<{ title: string }>({
  //   source: `---
  //   title: RSC Frontmatter Example
  //   ---
  //   # Hello World
  //   This is from Server Components!
  //   `,
  //   options: { parseFrontmatter: true },
  // });
  const options = {
    mdxOptions: {
      rehypePlugins: [[rehypeHighlight]],
    },
  };

  return (
    <div className="text-4xl mx-auto max-w-2xl">
      <MDXRemote
        className="prose prose-invert min-w-full"
        source={rawMDX}
        // options type missmatch between next-mdx-remote, mdx-rsc and rehype-highlight
        // @ts-ignore-next-line
        options={options}
      />
    </div>
  );
}
