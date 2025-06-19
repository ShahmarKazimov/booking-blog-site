import Link from "next/link";

// Server-side function to get current year
function getCurrentYear() {
    return new Date().getFullYear();
}

export default async function Footer() {
    const currentYear = getCurrentYear();

    // Structured data for SEO
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Area36",
        "description": "Premium travel destinations and adventure experiences worldwide",
        "url": "https://area36.com",
        "logo": "https://area36.com/images/ui/logo-area.svg",
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+994504271987",
            "contactType": "customer support",
            "email": "info@area36.com"
        },
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Gabala",
            "addressRegion": "Azerbaijan",
            "addressCountry": "AZ"
        },
        "sameAs": [
            "https://facebook.com/area36",
            "https://instagram.com/area36",
            "https://twitter.com/area36",
            "https://youtube.com/area36"
        ]
    };

    const socialLinks = [
        {
            name: "Facebook",
            href: "https://facebook.com/area36",
            icon: (
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
            )
        },
        {
            name: "Instagram",
            href: "https://instagram.com/area36",
            icon: (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.017 0C8.396 0 7.932.013 6.706.072 5.481.131 4.632.333 3.892.63a5.89 5.89 0 0 0-2.131 1.389A5.89 5.89 0 0 0 .372 4.111C.075 4.85-.127 5.7-.186 6.924-.245 8.15-.258 8.614-.258 12.235s.013 4.085.072 5.31c.059 1.226.261 2.076.558 2.815.306.79.717 1.459 1.389 2.131.672.672 1.341 1.083 2.131 1.389.739.297 1.589.499 2.815.558 1.226.059 1.69.072 5.311.072s4.085-.013 5.31-.072c1.226-.059 2.076-.261 2.815-.558a5.89 5.89 0 0 0 2.131-1.389 5.89 5.89 0 0 0 1.389-2.131c.297-.739.499-1.589.558-2.815.059-1.226.072-1.69.072-5.311s-.013-4.085-.072-5.31c-.059-1.226-.261-2.076-.558-2.815a5.89 5.89 0 0 0-1.389-2.131A5.89 5.89 0 0 0 19.777.63C19.038.333 18.188.131 16.962.072 15.736.013 15.272 0 11.651 0h.366zm-.081 21.542c-3.564 0-4-.015-5.391-.072-1.241-.059-1.915-.233-2.365-.388a3.942 3.942 0 0 1-1.459-.949 3.942 3.942 0 0 1-.949-1.459c-.155-.45-.329-1.124-.388-2.365-.057-1.391-.072-1.827-.072-5.391s.015-4 .072-5.391c.059-1.241.233-1.915.388-2.365a3.942 3.942 0 0 1 .949-1.459 3.942 3.942 0 0 1 1.459-.949c.45-.155 1.124-.329 2.365-.388 1.391-.057 1.827-.072 5.391-.072s4 .015 5.391.072c1.241.059 1.915.233 2.365.388a3.942 3.942 0 0 1 1.459.949 3.942 3.942 0 0 1 .949 1.459c.155.45.329 1.124.388 2.365.057 1.391.072 1.827.072 5.391s-.015 4-.072 5.391c-.059 1.241-.233 1.915-.388 2.365a3.942 3.942 0 0 1-.949 1.459 3.942 3.942 0 0 1-1.459.949c-.45.155-1.124.329-2.365.388-1.391.057-1.827.072-5.391.072z" clipRule="evenodd" />
                    <circle cx="12" cy="12" r="3.5" />
                    <circle cx="17.5" cy="6.5" r="1" />
                </svg>
            )
        },
        {
            name: "Twitter",
            href: "https://twitter.com/area36",
            icon: (
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743A11.65 11.65 0 013.392 4.5a4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
            )
        },
        {
            name: "YouTube",
            href: "https://youtube.com/area36",
            icon: (
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd" />
                </svg>
            )
        }
    ];

    return (
        <footer
            className="bg-black text-white border-t border-gray-800 mt-10"
            role="contentinfo"
            aria-label="Site Footer"
        >
            {/* Main Footer Content */}
            <div className="max-w-7xl mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                    <div className="lg:col-span-1">
                        <Link
                            href="/"
                            className="flex items-center mb-6 group gap-x-2"
                            aria-label="Area36 Home Page"
                            title="Area36 - Premium Travel Destinations"
                        >
                            <img
                                src="/images/ui/area-logo.png"
                                alt="Area36 Logo"
                                width={65}
                                height={65}
                                loading="lazy"
                            />
                            <div className="text-[2rem] font-bold text-white">
                                A<span className="font-normal">rea<span className="font-medium text-blue-500">36</span></span>
                            </div>
                        </Link>

                        <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
                            Find your ideal rental home with Area36. We offer comfortable properties and a smooth renting experience.
                        </p>
                    </div>

                    {/* Contact Us Section */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-white">Contact Us</h3>
                        <div className="space-y-3 text-sm text-gray-400">
                            <div className="flex items-center">
                                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                </svg>
                                <a
                                    href="mailto:info@area36.com"
                                    className="hover:text-blue-400 transition-colors"
                                    aria-label="Email us at info@area36.com"
                                >
                                    info@area36.com
                                </a>
                            </div>
                            <div className="flex items-center">
                                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                </svg>
                                <a
                                    href="tel:+994504271987"
                                    className="hover:text-blue-400 transition-colors"
                                    aria-label="Call us at +994 50 427 19 87"
                                >
                                    +994 (50) 427-19-87
                                </a>
                            </div>
                            <div className="flex items-center">
                                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                </svg>
                                <span>Gabala, Azerbaijan</span>
                            </div>
                        </div>
                    </div>

                    {/* Social Media */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-white">Follow Us</h3>
                        <div className="flex space-x-3">
                            {socialLinks.map((social, index) => (
                                <Link
                                    key={index}
                                    href={social.href}
                                    className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    aria-label={`Visit our ${social.name} page`}
                                    title={`Follow us on ${social.name}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {social.icon}
                                </Link>
                            ))}
                        </div>
                        
                        {/* Copyright moved here for better layout */}
                        <div className="text-sm text-gray-400 mt-8">
                            <span>© {currentYear} Area36. All rights reserved.</span>
                        </div>
                    </div>
                </div>
            </div>

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(structuredData)
                }}
            />
        </footer>
    );
}