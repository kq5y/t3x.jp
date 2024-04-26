import fs from "fs";
import matter from "gray-matter";
import { join, resolve } from "path";

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
    const slugs = fs.readdirSync(postsDirectory, {
        withFileTypes: true,
        recursive: true
    });
    const posts = slugs
        .filter((file) => file.isFile() && file.name.endsWith(".md"))
        .map((file) => {
            const slug = join(file.path, file.name)
                .replace(postsDirectory, "")
                .replace(".md", "")
                .replaceAll("\\", "/")
                .substring(1);
            return getPostBySlug(slug);
        })
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
