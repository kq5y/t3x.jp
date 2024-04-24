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
            <h1 className="my-4 text-2xl font-semibold">Posts</h1>
            <div>
                {posts.map((post, index) => (
                    <div key={index} className="mx-4 my-1 flex">
                        <div className="flex-1 pb-8 pt-0.5">
                            <h3 className="flex gap-x-1.5 font-semibold">{post.meta.title}</h3>
                            <p className="mt-1 text-sm text-gray-600 dark:text-neutral-400">{post.meta.excerpt}</p>
                            <div className="mt-1 flex gap-x-2">
                                <Link
                                    href={`/posts/${post.meta.slug}`}
                                    className="text-sm text-gray-600 underline dark:text-neutral-400"
                                >
                                    Read more
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
