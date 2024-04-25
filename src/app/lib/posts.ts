import fs from "fs";
import matter from "gray-matter";
import { resolve } from "path";

const postsDirectory = resolve(process.cwd(), "_posts");

export function getPostBySlug(slug: string): Post {
    const realSlug = slug.replace(/\.md$/, "");
    const fullPath = resolve(postsDirectory, `${realSlug}.md`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    const meta = {
        slug: realSlug,
        ...data
    } as PostMeta;

    return {
        meta,
        content
    };
}

export function getAllPosts(hidden = false): Post[] {
    const slugs = fs.readdirSync(postsDirectory);
    const posts = slugs
        .filter((slug) => slug.endsWith(".md"))
        .map((slug) => getPostBySlug(slug))
        .filter((post) => hidden || !post.meta.hidden)
        .sort((a, b) => {
            if (a.meta.date < b.meta.date) {
                return 1;
            } else {
                return -1;
            }
        });
    return posts;
}
