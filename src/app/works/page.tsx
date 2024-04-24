import works from "@data/works.json";
import type { Metadata } from "next";

type ItemProps = {
    item: WorkItem;
};

function Item(props: ItemProps) {
    const item = props.item;
    return (
        <div className="mx-4 my-1 flex">
            <div className="flex-1 pb-8 pt-0.5">
                <h3 className="flex gap-x-1.5 font-semibold">{item.title}</h3>
                {item.tags && (
                    <div className="mt-1 flex gap-x-1.5">
                        {item.tags.map((tag, index) => (
                            <span
                                key={index}
                                className="rounded bg-gray-200 px-1.5 py-0.5 text-xs text-gray-600 dark:bg-neutral-700 dark:text-neutral-400"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                )}
                {item.description && (
                    <p className="mt-1 text-sm text-gray-600 dark:text-neutral-400">{item.description}</p>
                )}
                {item.links && (
                    <div className="mt-1 flex gap-x-2">
                        {item.links.map((link, index) => (
                            <a
                                key={index}
                                href={link.url}
                                target="_blank"
                                rel="noreferrer"
                                className="text-sm text-gray-600 underline dark:text-neutral-400"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export const metadata: Metadata = {
    title: "Works - tksnn's Portfolio"
};

export default function WorksPage() {
    return (
        <div>
            <h1 className="my-4 text-2xl font-semibold">Works</h1>
            <div>
                {works.map((item, index) => (
                    <Item key={index} item={item} />
                ))}
            </div>
        </div>
    );
}
