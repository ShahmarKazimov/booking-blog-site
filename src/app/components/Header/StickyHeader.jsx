"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function StickyHeader() {
    const pathname = usePathname();
    const isHome = pathname === "/";
    const [isFixed, setIsFixed] = useState(!isHome);

    useEffect(() => {
        if (!isHome) return;

        const handleScroll = () => {
            setIsFixed(window.scrollY > 200);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [isHome]);

    if (isHome && !isFixed) return null;


    return (
        <header
            className={`fixed top-0 left-0 w-full bg-black/50 backdrop-blur-md shadow-lg transition-all duration-300 ease-in-out z-50`}
            role="banner"
            aria-label="Sticky Navigation"
        >
            <div className="flex items-center justify-between py-2 px-[0.7rem] sm:px-10">
                <div className="flex items-center group">
                    <Link
                        href="/"
                        aria-label="Area36 Homepage - Premium Travel Destinations"
                        title="Area36 - Premium Travel Destinations"
                        className="flex items-center group gap-x-2"
                    >
                        <figure className="flex items-center m-0">
                            <img
                                src="/images/ui/area-logo.png"
                                alt="Area36 Logo - Premium Travel Brand"
                                width={65}
                                height={65}
                                loading="lazy"
                            />
                            <figcaption className="sr-only">Area36 Brand Logo</figcaption>
                        </figure>

                        <h1 className="text-[2rem] font-bold text-white">
                            A<span className="font-normal">rea<span className="font-medium text-blue-500">36</span></span>
                        </h1>
                    </Link>
                </div>

            </div>
        </header>
    );
}
