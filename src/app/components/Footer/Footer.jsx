"use client";
import Link from "next/link";

const footerLinks = [
    { title: "Terms of Use", href: "/terms", description: "Our terms and conditions" },
    { title: "Privacy Policy", href: "/privacy", description: "How we protect your data" },
    { title: "Cookie Policy", href: "/cookies", description: "Our cookie usage policy" },
    { title: "Contact Us", href: "/contact", description: "Get in touch with our team" },
    { title: "About", href: "/about", description: "Learn more about Area36" },
    { title: "Destinations", href: "/destinations", description: "Explore all destinations" }
];

const socialLinks = [
    { name: "Facebook", href: "https://facebook.com/area36", icon: "📘" },
    { name: "Instagram", href: "https://instagram.com/area36", icon: "📷" },
    { name: "Twitter", href: "https://twitter.com/area36", icon: "🐦" },
    { name: "YouTube", href: "https://youtube.com/area36", icon: "📺" }
];

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer
            className="bg-black text-white border-t border-gray-800 mt-10"
            role="contentinfo"
            aria-label="Site Footer"
        >
            {/* Main Footer Content */}
            <div className="max-w-7xl mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

                    {/* Company Info */}
                    <div className="lg:col-span-2">
                        <Link
                            href="/"
                            className="flex items-center mb-6 group"
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

                        <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
                            Discover the world's most breathtaking destinations with Area36.
                            We provide premium travel experiences, expert guidance, and unforgettable adventures
                            for every type of traveler.
                        </p>

                        {/* Contact Info */}
                        <div className="space-y-2 text-sm text-gray-400">
                            <div className="flex items-center">
                                <span className="mr-2" aria-hidden="true">📧</span>
                                <a
                                    href="mailto:info@area36.com"
                                    className="hover:text-blue-400 transition-colors"
                                    aria-label="Email us at info@area36.com"
                                >
                                    info@area36.com
                                </a>
                            </div>
                            <div className="flex items-center">
                                <span className="mr-2" aria-hidden="true">📞</span>
                                <a
                                    href="tel:+1234567890"
                                    className="hover:text-blue-400 transition-colors"
                                    aria-label="Call us at +1 234 567 890"
                                >
                                    +1 (234) 567-890
                                </a>
                            </div>
                            <div className="flex items-center">
                                <span className="mr-2" aria-hidden="true">📍</span>
                                <span>New York, NY 10001</span>
                            </div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
                        <nav aria-label="Footer Navigation">
                            <ul className="space-y-3">
                                {footerLinks.slice(0, 3).map((link, index) => (
                                    <li key={index}>
                                        <Link
                                            href={link.href}
                                            className="text-gray-400 hover:text-blue-400 transition-colors duration-200 text-sm block"
                                            title={link.description}
                                            aria-label={link.description}
                                        >
                                            {link.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>

                    {/* Company Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-white">Company</h3>
                        <nav aria-label="Company Links">
                            <ul className="space-y-3">
                                {footerLinks.slice(3).map((link, index) => (
                                    <li key={index}>
                                        <Link
                                            href={link.href}
                                            className="text-gray-400 hover:text-blue-400 transition-colors duration-200 text-sm block"
                                            title={link.description}
                                            aria-label={link.description}
                                        >
                                            {link.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>

                        {/* Social Media */}
                        <div className="mt-6">
                            <h4 className="text-sm font-medium mb-3 text-white">Follow Us</h4>
                            <div className="flex space-x-3">
                                {socialLinks.map((social, index) => (
                                    <a
                                        key={index}
                                        href={social.href}
                                        className="w-8 h-8 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        aria-label={`Visit our ${social.name} page`}
                                        title={`Follow us on ${social.name}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <span className="text-sm" aria-hidden="true">{social.icon}</span>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Footer */}
            <div className="border-t border-gray-800 bg-gray-900">
                <div className="max-w-7xl mx-auto px-4 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">

                        {/* Copyright */}
                        <div className="text-sm text-gray-400">
                            <span>© {currentYear} Area36. All rights reserved.</span>
                            <span className="mx-2">|</span>
                            <span>Premium Travel Experiences Worldwide</span>
                        </div>

                        {/* Bottom Links */}
                        <div className="flex flex-wrap justify-center md:justify-end space-x-6 text-xs">
                            <Link
                                href="/sitemap.xml"
                                className="text-gray-500 hover:text-gray-300 transition-colors"
                                aria-label="View sitemap"
                            >
                                Sitemap
                            </Link>
                            <Link
                                href="/accessibility"
                                className="text-gray-500 hover:text-gray-300 transition-colors"
                                aria-label="Accessibility statement"
                            >
                                Accessibility
                            </Link>
                            <Link
                                href="/security"
                                className="text-gray-500 hover:text-gray-300 transition-colors"
                                aria-label="Security information"
                            >
                                Security
                            </Link>
                        </div>
                    </div>

                    {/* Trust Badges */}
                    <div className="flex justify-center mt-6 space-x-6 opacity-60">
                        <div className="flex items-center text-xs text-gray-500">
                            <span className="mr-1" aria-hidden="true">🔒</span>
                            <span>SSL Secured</span>
                        </div>
                        <div className="flex items-center text-xs text-gray-500">
                            <span className="mr-1" aria-hidden="true">✅</span>
                            <span>GDPR Compliant</span>
                        </div>
                        <div className="flex items-center text-xs text-gray-500">
                            <span className="mr-1" aria-hidden="true">⭐</span>
                            <span>4.9/5 Rating</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Structured Data for SEO */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Organization",
                        "name": "Area36",
                        "description": "Premium travel destinations and adventure experiences worldwide",
                        "url": "https://area36.com",
                        "logo": "https://area36.com/images/ui/logo-area.svg",
                        "contactPoint": {
                            "@type": "ContactPoint",
                            "telephone": "+1-234-567-890",
                            "contactType": "customer support",
                            "email": "info@area36.com"
                        },
                        "address": {
                            "@type": "PostalAddress",
                            "addressLocality": "New York",
                            "addressRegion": "NY",
                            "postalCode": "10001",
                            "addressCountry": "US"
                        },
                        "sameAs": [
                            "https://facebook.com/area36",
                            "https://instagram.com/area36",
                            "https://twitter.com/area36",
                            "https://youtube.com/area36"
                        ]
                    })
                }}
            />
        </footer>
    );
}