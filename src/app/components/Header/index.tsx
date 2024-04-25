"use client";

import { useTheme } from "next-themes";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaBars, FaMoon, FaSun } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";

export default function Header() {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const handleThemeChange = () => {
        const value = theme === "light" ? "dark" : "light";
        setTheme(value);
    };
    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    useEffect(() => {
        setMounted(true);
    }, []);
    if (!mounted) return null;
    return (
        <header className="fixed left-0 top-0 z-50 flex h-16 w-full items-center justify-end bg-transparent px-4">
            <button
                type="button"
                aria-label="toggle theme"
                onClick={handleThemeChange}
                className="relative size-10 max-h-[40px] max-w-[40px] select-none rounded-full text-center align-middle font-sans text-xs font-medium uppercase transition-all active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            >
                <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                    {theme === "light" ? <FaSun size={20} /> : <FaMoon size={20} />}
                </span>
            </button>
            <button
                type="button"
                aria-label="toggle menu"
                onClick={handleMenuToggle}
                className="relative z-20 size-10 max-h-[40px] max-w-[40px] select-none rounded-full text-center align-middle font-sans text-xs font-medium uppercase transition-all active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            >
                <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                    {isMenuOpen ? <FaXmark size={20} /> : <FaBars size={20} />}
                </span>
            </button>
            <div
                className={`fixed left-0 top-0 z-10 size-full bg-neutral-100/90 dark:bg-neutral-900/90
                 ${isMenuOpen ? "block" : "hidden"}`}
                onClick={handleMenuToggle}
            >
                <ul className="flex h-full flex-col items-center justify-center text-3xl">
                    <li className="group relative mb-4">
                        <Link href="/">Profile</Link>
                        <span className="absolute bottom-0 left-1/2 block h-0.5 w-0 -translate-x-1/2 bg-neutral-900 transition-all duration-500 group-hover:w-full group-hover:max-w-full dark:bg-neutral-100"></span>
                    </li>
                    <li className="group relative mb-4">
                        <Link href="/works">Works</Link>
                        <span className="absolute bottom-0 left-1/2 block h-0.5 w-0 -translate-x-1/2 bg-neutral-900 transition-all duration-500 group-hover:w-full group-hover:max-w-full dark:bg-neutral-100"></span>
                    </li>
                    <li className="group relative mb-4">
                        <Link href="/history">History</Link>
                        <span className="absolute bottom-0 left-1/2 block h-0.5 w-0 -translate-x-1/2 bg-neutral-900 transition-all duration-500 group-hover:w-full group-hover:max-w-full dark:bg-neutral-100"></span>
                    </li>
                    <li className="group relative mb-4">
                        <Link href="/posts">Posts</Link>
                        <span className="absolute bottom-0 left-1/2 block h-0.5 w-0 -translate-x-1/2 bg-neutral-900 transition-all duration-500 group-hover:w-full group-hover:max-w-full dark:bg-neutral-100"></span>
                    </li>
                </ul>
            </div>
        </header>
    );
}
