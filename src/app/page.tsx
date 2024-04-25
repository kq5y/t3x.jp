import { SiAtCoder, SiSignate } from "@/app/extend-icons";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiKaggle } from "react-icons/si";

function SNSItem(props: { link: LinkItem; children: React.ReactNode }) {
    return (
        <Link
            target="_blank"
            rel="noreferrer"
            className="relative size-10 max-h-[40px] max-w-[40px] select-none rounded-full text-center align-middle font-sans text-xs font-medium uppercase transition-all active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            href={props.link.url}
            title={props.link.name}
        >
            <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">{props.children}</span>
        </Link>
    );
}

export default function Home() {
    return (
        <div>
            <h1 className="my-4 text-3xl font-semibold">Profile</h1>
            <div className="rounded-lg bg-[#f5f9ff] p-4 dark:bg-[#0b0e14]">
                <div className="flex items-center gap-4">
                    <img src="img/icon.webp" alt="icon" className="size-12 rounded-full" loading="lazy" />
                    <p className="text-lg font-semibold">tksnn</p>
                    <div className="ml-auto flex">
                        <SNSItem
                            link={{
                                name: "Twitter",
                                url: "https://twitter.com/tksnnnnnnnnn"
                            }}
                        >
                            <FaXTwitter size={20} />
                        </SNSItem>
                        <SNSItem
                            link={{
                                name: "GitHub",
                                url: "https://github.com/tksnnx"
                            }}
                        >
                            <FaGithub size={20} />
                        </SNSItem>
                        <SNSItem
                            link={{
                                name: "Kaggle",
                                url: "https://www.kaggle.com/tksnnn"
                            }}
                        >
                            <SiKaggle size={20} />
                        </SNSItem>
                        <SNSItem
                            link={{
                                name: "Signate",
                                url: "https://signate.jp/users/114309"
                            }}
                        >
                            <SiSignate size={20} />
                        </SNSItem>
                        <SNSItem
                            link={{
                                name: "AtCoder",
                                url: "https://atcoder.jp/users/tksnn"
                            }}
                        >
                            <SiAtCoder size={20} />
                        </SNSItem>
                    </div>
                </div>
            </div>
            <div></div>
        </div>
    );
}
