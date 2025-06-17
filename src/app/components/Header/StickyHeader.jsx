"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function StickyHeader({ links }) {
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

    // Only render fixed header when scrolled
    if (!isFixed) return null;

    return (
        <header
            className="fixed top-0 left-0 w-full bg-black/50 backdrop-blur-md shadow-lg transition-all duration-300 ease-in-out z-50"
            role="banner"
            aria-label="Sticky Navigation - Scroll State"
        >
            <div className="flex items-center justify-between py-2 px-4">
                <div className="flex items-center group">
                    <Link
                        href="/"
                        aria-label="Area36 Homepage - Premium Travel Destinations"
                        title="Area36 - Premium Travel Destinations"
                        className="flex items-center group"
                    >
                        <figure className="flex items-center m-0">
                            <img
                                src="/images/ui/logo-area.svg"
                                alt="Area36 Logo - Premium Travel Brand"
                                width={50}
                                height={50}
                                loading="lazy"
                            />
                            <figcaption className="sr-only">Area36 Brand Logo</figcaption>
                        </figure>

                        <h1 className="text-3xl font-bold text-white">
                            A<span className="font-normal">rea<span className="font-medium text-blue-400">36</span></span>
                        </h1>
                    </Link>
                </div>

                <nav
                    className="flex space-x-10 justify-center items-center"
                    role="navigation"
                    aria-label="Main Navigation - Sticky"
                >
                    <ul className="flex space-x-10 list-none m-0 p-0" role="menubar">
                        {links.map((link, idx) => (
                            <li key={idx} role="none">
                                <Link
                                    href={link.href}
                                    className="hover:text-blue-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-sm px-2 py-1"
                                    role="menuitem"
                                    aria-label={`Go to ${link.displayName} page`}
                                    title={`${link.displayName} - Curated travel content`}
                                >
                                    {link.displayName}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
}