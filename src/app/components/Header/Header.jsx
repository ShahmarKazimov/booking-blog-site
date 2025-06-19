import Link from "next/link";
import StickyHeader from "../Header/StickyHeader";

export default function Header() {
    return (
        <>
            <header
                className="relative right-0 left-0 bg-transparent text-white transition-all duration-300 ease-in-out z-50"
                role="banner"
            >
                <div className="flex items-center justify-between py-2 px-10">
                    <div className="flex items-center group">
                        <Link
                            href="/"
                            aria-label="Area36"
                            title="Area36"
                            className="flex items-center group gap-x-2"
                        >
                            <figure className="flex items-center">
                                <img
                                    src="/images/ui/area-logo.png"
                                    alt="Area36 Logo"
                                    width={65}
                                    height={65}
                                    loading="lazy"
                                />
                            </figure>
                            <figcaption className="sr-only">Area36 Brand Logo</figcaption>

                            <h1 className="text-[2rem] font-bold text-white">
                                A<span className="font-normal">rea<span className="font-medium text-blue-500">36</span></span>
                            </h1>
                        </Link>
                    </div>
                </div>
            </header>

            <StickyHeader />
        </>
    );
}