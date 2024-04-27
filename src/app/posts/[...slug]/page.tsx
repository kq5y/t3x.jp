import { getAllPosts, getPostBySlug } from "@/app/lib/posts";
import rehypeShiki from "@shikijs/rehype";
import remarkMermaid from "@southball/remark-mermaid";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeKatex from "rehype-katex";
import rehypeRaw from "rehype-raw";
import rehypeReact from "rehype-react";
import rehypeSlug from "rehype-slug";
import remarkBreaks from "remark-breaks";
import remarkGfm from "remark-gfm";
import remarkLinkCard from "remark-link-card";
import remarkMath from "remark-math";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";

type BlogContentPageProps = {
    params: {
        slug: string[];
    };
};

function CustomImage({
    src,
    width,
    height,
    alt,
    ...props
}: {
    src: string;
    width?: number;
    height?: number;
    alt: string;
}) {
    if (width && height) {
        return <Image src={src} width={width} height={height} alt={alt} {...props} />;
    }
    return <Image src={src} fill alt={alt} {...props} />;
}

function CustomLink({ href, children, ...props }: { href: string; children: React.ReactNode }) {
    return href.startsWith("/") || href.startsWith("#") ? (
        <Link href={href} {...props}>
            {children}
        </Link>
    ) : (
        <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
            {children}
        </a>
    );
}

function CustomH1({ children, ...props }: { children: React.ReactNode }) {
    return (
        <h1 {...props}>
            <span className="mr-1.5 select-none align-bottom text-2xl -tracking-widest text-gray-500 dark:text-neutral-400">
                #
            </span>
            {children}
        </h1>
    );
}

function CustomH2({ children, ...props }: { children: React.ReactNode }) {
    return (
        <h2 {...props}>
            <span className="mr-1.5 select-none align-bottom text-xl -tracking-widest text-gray-500 dark:text-neutral-400">
                ##
            </span>
            {children}
        </h2>
    );
}

async function markdownToHtml(markdown: string) {
    const result = await unified()
        .use(remarkParse)
        .use(remarkMath)
        .use(remarkMermaid, {
            themes: ["neutral", "dark"]
        })
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
                light: "catppuccin-frappe",
                dark: "ayu-dark"
            }
        })
        .use(rehypeSlug)
        .use(rehypeAutolinkHeadings)
        .use(rehypeReact, {
            Fragment: React.Fragment,
            createElement: React.createElement,
            components: {
                a: CustomLink,
                img: CustomImage,
                h1: CustomH1,
                h2: CustomH2
            },
            jsx,
            jsxs
        } as never)
        .process(markdown);
    return result.result;
}

export function generateMetadata({ params }: BlogContentPageProps): Metadata {
    const slug = params.slug;
    const { meta } = getPostBySlug(slug.join("/"));
    return {
        title: `${meta.title} - tksnn's Portfolio`
    };
}

export default async function BlogContentPage({ params }: BlogContentPageProps) {
    const slug = params.slug;
    const { meta, content } = getPostBySlug(slug.join("/"));
    const Content = await markdownToHtml(content);
    return (
        <div>
            <div className="my-4">
                <span className="text-sm text-gray-500 dark:text-neutral-400">{meta.slug}</span>
                <h1 className="text-3xl font-semibold">{meta.title}</h1>
                <span className="text-sm text-gray-500 dark:text-neutral-400">{meta.date}</span>
                {meta.tags && (
                    <div className="mt-1 flex gap-x-1.5">
                        {meta.tags.map((tag, index) => (
                            <span
                                key={index}
                                className="rounded bg-gray-200 px-1.5 py-0.5 text-xs text-gray-600 dark:bg-neutral-700 dark:text-neutral-400"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                )}
            </div>
            <div className="post-container">{Content}</div>
        </div>
    );
}

export function generateStaticParams() {
    const posts = getAllPosts(true);
    return posts.map((post) => ({
        slug: post.meta.slug.split("/")
    }));
}
