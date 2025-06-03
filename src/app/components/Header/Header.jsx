"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

const links = [{ displayName: "Blog", href: "/blog" }];

export default function Header() {
    const [isFixed, setIsFixed] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 200) {
                setIsFixed(true);
            } else {
                setIsFixed(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`transition-all duration-300 ease-in-out z-50 ${isFixed
                ? "fixed top-0 left-0 w-full bg-black/50 backdrop-blur-md shadow-lg"
                : "absolute right-0 left-0 bg-transparent text-white"
                }`}
            role="banner"
        >
            <div className="flex items-center justify-between py-2 px-4">
                <Link
                    href="/"
                    className="flex items-center group"
                    aria-label="Area36 Home Page"
                    title="Area36 - Premium Travel Destinations"
                >
                    <img
                        src="/images/ui/logo-area.svg"
                        alt="Area36 Logo"
                        width={50}
                        height={50}
                    />

                    <div className="text-3xl font-bold text-white">
                        A<span className="font-normal">rea<span className="font-medium text-blue-400">36</span></span>
                    </div>
                </Link>

                <div className="flex space-x-10 justify-center items-center">
                    <nav
                        className="space-x-10"
                        role="navigation"
                        aria-label="Navigation"
                    >
                        {links.map((link, idx) => (
                            <Link
                                key={idx}
                                href={link.href}
                                className="hover:text-blue-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-sm px-2 py-1"
                                aria-label={`${link.displayName} go to page`}
                                title={`${link.displayName} - discover maintained travel content`}
                            >
                                {link.displayName}
                            </Link>
                        ))}
                    </nav>
                </div>
            </div>
        </header>
    );
}