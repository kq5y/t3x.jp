type Theme = "light" | "dark";

type PostMeta = {
    title: string;
    slug: string;
    excerpt: string;
    date: string;
    hidden?: boolean;
    tags?: string[];
};

type Post = {
    meta: PostMeta;
    content: string;
};

type HistoryItem = {
    date: string;
    category: string;
    title: string;
    description?: string;
    links?: {
        name: string;
        url: string;
    }[];
};

type WorkItem = {
    title: string;
    description?: string;
    links?: {
        name: string;
        url: string;
    }[];
    tags?: string[];
};

type LinkItem = {
    name: string;
    url: string;
};

type IconProps = {
    color?: string;
    size?: number;
    others?: unknown;
};

declare module "*/history.json" {
    const value: HistoryItem[];
    export default value;
}

declare module "*/works.json" {
    const value: WorkItem[];
    export default value;
}

declare module "remark-link-card" {
    type Options = {
        cache?: boolean;
        shortenUrl?: boolean;
    };
    function rlc(options?: Readonly<Options> | null | undefined): undefined;
    export default rlc;
}

declare module "@southball/remark-mermaid" {
    type Options = {
        themes?: string[];
    };
    function remarkMermaid(options?: Readonly<Options> | null | undefined): undefined;
    export default remarkMermaid;
}
