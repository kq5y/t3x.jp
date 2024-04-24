import { getAllPosts, getPostBySlug } from "@/app/lib/posts";
import rehypeShiki from "@shikijs/rehype";
import type { Metadata } from "next";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeExternalLinks from "rehype-external-links";
import rehypeKatex from "rehype-katex";
import rehypeRaw from "rehype-raw";
import rehypeSlug from "rehype-slug";
import rehypeStringify from "rehype-stringify";
import remarkBreaks from "remark-breaks";
import remarkGfm from "remark-gfm";
import remarkLinkCard from "remark-link-card";
import remarkMath from "remark-math";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";

type BlogContentPageProps = {
    params: {
        slug: string;
    };
};

async function markdownToHtml(markdown: string) {
    const result = await unified()
        .use(remarkParse)
        .use(remarkMath)
        .use(remarkLinkCard, {
            cache: false,
            shortenUrl: true
        })
        .use(remarkGfm)
        .use(remarkBreaks)
        .use(remarkRehype, {
            allowDangerousHtml: true
        })
        .use(rehypeRaw)
        .use(rehypeKatex)
        .use(rehypeShiki, {
            themes: {
                light: "github-light",
                dark: "ayu-dark"
            }
        })
        .use(rehypeExternalLinks, {
            target: "_blank",
            rel: ["noopener", "noreferrer"]
        })
        .use(rehypeSlug)
        .use(rehypeAutolinkHeadings)
        .use(rehypeStringify)
        .process(markdown);
    return result.toString();
}

export function generateMetadata({ params }: BlogContentPageProps): Metadata {
    const slug = params.slug;
    const { meta } = getPostBySlug(slug);
    return {
        title: `${meta.title} - tksnn's Portfolio`
    };
}

export default async function BlogContentPage({ params }: BlogContentPageProps) {
    const slug = params.slug;
    const { meta, content } = getPostBySlug(slug);
    const html = await markdownToHtml(content);
    return (
        <div>
            <div className="my-4">
                <h1 className="text-3xl font-semibold">{meta.title}</h1>
                <span className="text-sm text-gray-500 dark:text-neutral-400">{meta.date}</span>
                {meta.tags && (
                    <div className="flex flex-wrap gap-2">
                        <span className="text-sm text-gray-600 dark:text-neutral-400">{meta.tags.join(", ")}</span>
                    </div>
                )}
            </div>
            <div dangerouslySetInnerHTML={{ __html: html }} className="post-container" />
        </div>
    );
}

export function generateStaticParams() {
    const posts = getAllPosts();
    return posts.map((post) => ({
        slug: post.meta.slug
    }));
}
