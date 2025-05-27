"use client";

import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";


export default function Footer() {
    const { theme } = useTheme();
    return (
        <footer className="py-5 flex justify-between items-center border-t border-[#242535] dark:border-white mt-10">
            <Link href="/" className="flex items-center">
                <Image
                    src={
                        theme === "light"
                            ? "/images/ui/logo-area.svg"
                            : "/images/ui/logo-area-dark-mode.svg"
                    }
                    alt="area-logo"
                    width={40}
                    height={40}
                    priority
                />
                <div className="text-2xl font-bold">
                    A<span className="font-normal">rea</span>
                </div>
            </Link>
            {/* <div className="flex flex-col md:flex-row md:space-x-10 text-gray-500 dark:text-gray-400">
                <Link href={"/"}>Terms of Use</Link>
                <Link href={"/"}>Privacy Policy</Link>
                <Link href={"/"}>Cookie Policy</Link>
            </div> */}
            <div className="text-sm text-gray-500 dark:text-gray-400">
                © {new Date().getFullYear()} Area. All rights reserved.
            </div>
        </footer>
    )
}
