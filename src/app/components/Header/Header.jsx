"use client";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { MdDarkMode, MdLightMode } from "react-icons/md";

const links = [{ displayName: "Blog", href: "/blog" }];

export default function Header() {
    const { theme, setTheme } = useTheme()
    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    }

    return (
        <header className="flex items-center justify-between py-5">
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
            <div className="flex space-x-10">
                <nav className="space-x-10">
                    {links.map((link, idx) => (
                        <Link key={idx} href={link.href}>
                            {link.displayName}
                        </Link>
                    ))}
                </nav>
                <button
                    onClick={toggleTheme}
                    className="focus:outline-none cursor-pointer rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 relative overflow-hidden group"
                    aria-label="Toggle theme"
                >
                    <div className="relative w-6 h-6">
                        {/* Light Mode Icon */}
                        <MdLightMode
                            className={`absolute inset-0 w-6 h-6 text-yellow-500 transition-all duration-700 ease-in-out transform ${theme === "dark"
                                ? "translate-y-0 rotate-0 scale-100 opacity-100"
                                : "-translate-y-10 rotate-180 scale-0 opacity-0"
                                }`}
                        />
                        {/* Dark Mode Icon */}
                        <MdDarkMode
                            className={`absolute inset-0 w-6 h-6 text-[#242535] dark:text-gray-300 transition-all duration-700 ease-in-out transform ${theme === "dark"
                                ? "translate-y-10 rotate-180 scale-0 opacity-0"
                                : "translate-y-0 rotate-0 scale-100 opacity-100"
                                }`}
                        />

                        {/* Rotating Background Circle */}
                        <div className={`absolute inset-0 rounded-full transition-all duration-500 transform ${theme === "dark"
                            ? "bg-yellow-200/20 scale-150 rotate-180"
                            : "bg-gray-200/20 scale-150 rotate-0"
                            }`}></div>
                    </div>

                    {/* Hover Glow Effect */}
                    <div className={`absolute inset-0 rounded-full opacity-0 group-hover:opacity-30 transition-all duration-300 blur-sm ${theme === "dark"
                        ? "bg-yellow-400"
                        : "bg-gray-600"
                        }`}></div>
                </button>
            </div>
        </header>
    )
}