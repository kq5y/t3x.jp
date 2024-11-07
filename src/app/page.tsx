import { SiAkashicEngine, SiAtCoder, SiSignate, SiSiv3d } from "@/app/extend-icons";
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import {
    SiCplusplus,
    SiCsharp,
    SiDotnet,
    SiElectron,
    SiFastapi,
    SiFlask,
    SiKaggle,
    SiNextdotjs,
    SiPython,
    SiPytorch,
    SiReact,
    SiRemix,
    SiScikitlearn,
    SiTypescript,
    SiUnity,
    SiVuedotjs
} from "react-icons/si";

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
                    <Image priority src="/img/icon.webp" alt="icon" className="rounded-full" width={48} height={48} />
                    <div className="flex flex-col">
                        <p className="text-lg font-semibold">kq5y</p>
                        <p className="text-gray-400 dark:text-neutral-500">kasi, tksnn</p>
                    </div>
                    <div className="ml-auto flex flex-wrap justify-end">
                        <SNSItem
                            link={{
                                name: "Twitter",
                                url: "https://twitter.com/tksnnx"
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
            <div className="mx-4 my-6">
                <p>
                    I&apos;m interested in machine learning, speech synthesis, competitive programming, Capture The
                    Flag, etc.
                </p>
            </div>
            <div>
                <h2 className="my-4 text-2xl font-semibold">Skills</h2>
                <div className="ml-4 flex flex-col flex-wrap gap-4">
                    <div className="flex flex-col gap-2">
                        <h3 className="flex items-center gap-2 text-xl font-semibold">
                            <SiCplusplus />
                            <span className="ml">C++</span>
                        </h3>
                        <div className="ml-4 flex flex-row flex-wrap gap-4 text-lg">
                            <span className="flex items-center gap-2">
                                <SiSiv3d />
                                OpenSiv3D
                            </span>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h3 className="flex items-center gap-2 text-xl font-semibold">
                            <SiPython />
                            <span className="ml">Python</span>
                        </h3>
                        <div className="ml-4 flex flex-row flex-wrap gap-4 text-lg">
                            <span className="flex items-center gap-2">
                                <SiFlask />
                                Flask
                            </span>
                            <span className="flex items-center gap-2">
                                <SiFastapi />
                                FastAPI
                            </span>
                            <span className="flex items-center gap-2">
                                <SiScikitlearn />
                                scikit-learn
                            </span>
                            <span className="flex items-center gap-2">
                                <SiPytorch />
                                PyTorch
                            </span>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h3 className="flex items-center gap-2 text-xl font-semibold">
                            <SiTypescript />
                            <span className="ml">Typescript</span>
                        </h3>
                        <div className="ml-4 flex flex-row flex-wrap gap-4 text-lg">
                            <span className="flex items-center gap-2">
                                <SiReact />
                                React
                            </span>
                            <span className="flex items-center gap-2">
                                <SiNextdotjs />
                                Next.js
                            </span>
                            <span className="flex items-center gap-2">
                                <SiRemix />
                                Remix
                            </span>
                            <span className="flex items-center gap-2">
                                <SiVuedotjs />
                                Vue.js
                            </span>
                            <span className="flex items-center gap-2">
                                <SiElectron />
                                Electron
                            </span>
                            <span className="flex items-center gap-2">
                                <SiAkashicEngine />
                                AkashicEngine
                            </span>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h3 className="flex items-center gap-2 text-xl font-semibold">
                            <SiCsharp />
                            <span className="ml">C#</span>
                        </h3>
                        <div className="ml-4 flex flex-row flex-wrap gap-4 text-lg">
                            <span className="flex items-center gap-2">
                                <SiDotnet />
                                WPF
                            </span>
                            <span className="flex items-center gap-2">
                                <SiUnity />
                                Unity
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
