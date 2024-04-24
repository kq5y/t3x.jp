import data from "@data/history.json";
import type { Metadata } from "next";

type ItemProps = {
    item: HistoryItem;
};

function Item(props: ItemProps) {
    const item = props.item;
    return (
        <div className="group flex gap-x-3">
            <div className="w-16 text-end">
                <span className="text-xs text-gray-500 dark:text-neutral-400">{item.date}</span>
            </div>
            <div className="relative after:absolute after:bottom-0 after:start-3.5 after:top-7 after:w-px after:translate-x-[-0.5px] after:bg-gray-300 group-last:after:hidden dark:after:bg-neutral-700">
                <div className="relative z-10 flex size-7 items-center justify-center">
                    <div className="size-2 rounded-full bg-gray-400 dark:bg-neutral-600"></div>
                </div>
            </div>
            <div className="flex-1 pb-8 pt-0.5">
                <h4 className="text-sm text-gray-500 dark:text-neutral-400">{item.category}</h4>
                <h3 className="flex gap-x-1.5 font-semibold">{item.title}</h3>
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
    title: "History - tksnn's Portfolio"
};

export default function HistoryPage() {
    return (
        <div>
            <h1 className="my-4 text-2xl font-semibold">History</h1>
            <div>
                {data
                    .sort((a, b) => {
                        return new Date(b.date).getTime() - new Date(a.date).getTime();
                    })
                    .map((item, index) => (
                        <Item key={index} item={item} />
                    ))}
            </div>
        </div>
    );
}
