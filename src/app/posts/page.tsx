import { getAllPosts } from "@/app/lib/posts";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Posts - tksnn's Portfolio"
};

export default function BlogPage() {
    const posts = getAllPosts();
    return (
        <div>
            <h1 className="my-4 text-3xl font-semibold">Posts</h1>
            <div>
                {posts.map((post, index) => (
                    <div key={index} className="mx-2 flex">
                        <div className="flex-1 pb-1 pt-0.5">
                            <Link
                                href={`/posts/${post.meta.slug}`}
                                className="block rounded p-4 hover:bg-gray-200 dark:hover:bg-neutral-800"
                            >
                                <h2 className="flex gap-x-1.5 font-semibold">{post.meta.title}</h2>
                                {post.meta.tags && (
                                    <div className="mt-1 flex gap-x-1.5">
                                        {post.meta.tags.map((tag, index) => (
                                            <span
                                                key={index}
                                                className="rounded bg-gray-200 px-1.5 py-0.5 text-xs text-gray-600 dark:bg-neutral-700 dark:text-neutral-400"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                )}
                                <p className="mt-1 text-sm text-gray-600 dark:text-neutral-400">{post.meta.excerpt}</p>
                            </Link>
                        </div>
                    </div>
                ))}
                {posts.length === 0 && <p>No posts found.</p>}
            </div>
        </div>
    );
}
