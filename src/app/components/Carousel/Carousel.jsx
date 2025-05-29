"use client";
import React from 'react';
import { Carousel } from 'antd';
import Image from 'next/image';

import image1 from '../../../../public/images/destinations/area-image2.jpg';
import image2 from '../../../../public/images/destinations/area-image4.jpg';
import image3 from '../../../../public/images/destinations/area-image6.jpg';
import image4 from '../../../../public/images/destinations/area-image5.jpg';
import backgroundImage from '../../../../public/images/destinations/area-image-hero.jpg';

const images = [
    {
        src: image1,
        title: "Mountain Paradise",
        description: "Breathtaking mountain views and pristine alpine adventures",
        badge: "Adventure",
        alt: "Majestic mountain landscape with snow-capped peaks and crystal clear lakes",
        location: "Swiss Alps"
    },
    {
        src: image2,
        title: "Ocean Escape",
        description: "Crystal clear turquoise waters and white sandy beaches",
        badge: "Relaxation",
        alt: "Tropical ocean paradise with pristine beaches and coral reefs",
        location: "Maldives"
    },
    {
        src: image3,
        title: "Forest Adventure",
        description: "Ancient forests and wildlife exploration experiences",
        badge: "Nature",
        alt: "Dense green forest with towering trees and natural hiking trails",
        location: "Amazon Rainforest"
    },
    {
        src: image4,
        title: "Desert Mystique",
        description: "Golden sand dunes and starlit desert camping",
        badge: "Mystery",
        alt: "Vast golden sand dunes under dramatic desert sunset skies",
        location: "Sahara Desert"
    }
];

const ImageCarousel = () => {
    return (
        <main className="relative">
            {/* Background Hero Section */}
            <section
                className="relative sm:-top-[5.2rem] -top-[11rem] left-0 w-full sm:h-[630px] z-[-1]"
                aria-label="Hero Section"
            >
                <div className="relative w-full h-[720px]">
                    <Image
                        src={backgroundImage}
                        alt="Area36 Hero - Stunning travel destinations and breathtaking landscapes"
                        fill
                        priority
                        className="object-cover brightness-50"
                        sizes="100vw"
                        quality={85}
                    />
                </div>

                {/* Enhanced Multi-layer Gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/70" aria-hidden="true"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-transparent to-purple-900/20" aria-hidden="true"></div>

                {/* Floating Particles Effect */}
                <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
                    <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/20 rounded-full animate-float-slow"></div>
                    <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-white/30 rounded-full animate-float-medium"></div>
                    <div className="absolute bottom-1/4 left-1/5 w-1.5 h-1.5 bg-white/25 rounded-full animate-float-fast"></div>
                </div>

                {/* Overlay Content */}
                <div className="absolute inset-0 flex flex-col justify-center items-center text-white z-10">
                    <div className="text-center space-y-6 max-w-4xl px-4">
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-2xl animate-fade-in-up">
                            <span className="bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
                                Welcome to Area36
                            </span>
                        </h1>
                        <p className="text-xl md:text-2xl drop-shadow-lg opacity-90 animate-fade-in-up animation-delay-300">
                            Experience the world's most beautiful destinations and create unforgettable memories
                        </p>
                        <div className="flex justify-center space-x-8 mt-8 animate-fade-in-up animation-delay-600" role="banner">
                            <div className="text-center">
                                <div className="text-3xl font-bold" aria-label="50 plus destinations">50+</div>
                                <div className="text-sm opacity-80">Destinations</div>
                            </div>
                            <div className="w-px h-12 bg-white/30" aria-hidden="true"></div>
                            <div className="text-center">
                                <div className="text-3xl font-bold" aria-label="Over 1 million happy travelers">1M+</div>
                                <div className="text-sm opacity-80">Happy Travelers</div>
                            </div>
                            <div className="w-px h-12 bg-white/30" aria-hidden="true"></div>
                            <div className="text-center">
                                <div className="text-3xl font-bold" aria-label="4.9 out of 5 rating">4.9</div>
                                <div className="text-sm opacity-80">Rating</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Carousel Section */}
            <section className="py-16 px-4 bg-gradient-to-b from-gray-50 to-white" aria-label="Featured Destinations">
                <div className="text-center mb-12">
                    <div className="inline-block">
                        <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent relative">
                            Explore Our Featured Destinations
                            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full" aria-hidden="true"></div>
                        </h2>
                    </div>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed mt-6">
                        Discover the beauty of our handpicked destinations. Each location offers unique experiences, stunning landscapes, and unforgettable adventures tailored for every type of traveler.
                    </p>
                </div>

                {/* Beautiful Carousel Container */}
                <div className="max-w-5xl mx-auto">
                    <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-white p-8 border border-gray-100">
                        {/* Decorative Background Pattern */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full -translate-y-16 translate-x-16 opacity-30" aria-hidden="true"></div>
                        <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-pink-100 to-yellow-100 rounded-full translate-y-12 -translate-x-12 opacity-30" aria-hidden="true"></div>

                        <Carousel
                            autoplay
                            dots={{ className: "custom-dots" }}
                            autoplaySpeed={4000}
                            speed={800}
                            effect="fade"
                            accessibility={true}
                            aria-label="Travel destinations carousel"
                        >
                            {images.map((item, index) => (
                                <div key={index}>
                                    <article className="relative w-full h-[500px] rounded-2xl overflow-hidden group shadow-lg">
                                        <div className="relative w-full h-full">
                                            <Image
                                                src={item.src}
                                                alt={item.alt}
                                                fill
                                                priority={index === 0}
                                                className="object-cover transition-all duration-700 group-hover:scale-105 group-hover:brightness-110"
                                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                                                quality={85}
                                            />
                                        </div>

                                        {/* Enhanced Image Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" aria-hidden="true"></div>
                                        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 to-purple-900/10" aria-hidden="true"></div>

                                        {/* Category Badge */}
                                        <div className="absolute top-6 left-6 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full text-sm font-semibold text-gray-800 shadow-lg">
                                            <span aria-label={`Category: ${item.badge}`}>{item.badge}</span>
                                        </div>

                                        {/* Location Badge */}
                                        <div className="absolute top-6 right-20 px-3 py-1 bg-black/40 backdrop-blur-sm rounded-full text-xs font-medium text-white shadow-lg">
                                            📍 {item.location}
                                        </div>

                                        {/* Content Overlay */}
                                        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                                            <div className="space-y-4">
                                                <h3 className="text-4xl font-bold drop-shadow-lg">
                                                    {item.title}
                                                </h3>
                                                <p className="text-xl opacity-90 drop-shadow-md max-w-md">
                                                    {item.description}
                                                </p>
                                                <button
                                                    className="mt-4 px-6 py-3 bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30 rounded-full text-white font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-white/50"
                                                    aria-label={`Explore ${item.title} destination`}
                                                    type="button"
                                                >
                                                    Explore Now
                                                </button>
                                            </div>
                                        </div>

                                        {/* Enhanced Decorative Corner */}
                                        <div className="absolute top-6 right-6 w-14 h-14 border-2 border-white/40 rounded-full flex items-center justify-center backdrop-blur-sm group-hover:border-white/60 transition-all duration-300" aria-hidden="true">
                                            <div className="w-3 h-3 bg-white rounded-full animate-pulse group-hover:scale-125 transition-transform duration-300"></div>
                                        </div>

                                        {/* Bottom Decorative Line */}
                                        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-60" aria-hidden="true"></div>
                                    </article>
                                </div>
                            ))}
                        </Carousel>
                    </div>

                    {/* Enhanced Decorative Elements */}
                    <div className="flex justify-center mt-8 space-x-3" aria-hidden="true">
                        <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full animate-bounce shadow-sm"></div>
                        <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-purple-500 rounded-full animate-bounce delay-100 shadow-sm"></div>
                        <div className="w-3 h-3 bg-gradient-to-r from-pink-400 to-pink-500 rounded-full animate-bounce delay-200 shadow-sm"></div>
                    </div>

                    {/* Stats Section */}
                    <section className="grid grid-cols-3 gap-8 mt-12 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl border border-gray-100" aria-label="Service Features">
                        <div className="text-center">
                            <div className="text-2xl font-bold text-gray-800 mb-1">Premium</div>
                            <div className="text-sm text-gray-600">Quality Destinations</div>
                        </div>
                        <div className="text-center border-x border-gray-200">
                            <div className="text-2xl font-bold text-gray-800 mb-1">24/7</div>
                            <div className="text-sm text-gray-600">Customer Support</div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl font-bold text-gray-800 mb-1">Secure</div>
                            <div className="text-sm text-gray-600">Booking System</div>
                        </div>
                    </section>
                </div>
            </section>

            <style jsx>{`
                .animate-fade-in-up {
                    animation: fadeInUp 1s ease-out forwards;
                    opacity: 0;
                }
                
                .animation-delay-300 {
                    animation-delay: 0.3s;
                }
                
                .animation-delay-600 {
                    animation-delay: 0.6s;
                }
                
                .animate-float-slow {
                    animation: float 6s ease-in-out infinite;
                }
                
                .animate-float-medium {
                    animation: float 4s ease-in-out infinite;
                }
                
                .animate-float-fast {
                    animation: float 3s ease-in-out infinite;
                }
                
                @keyframes fadeInUp {
                    from { 
                        opacity: 0; 
                        transform: translateY(30px); 
                    }
                    to { 
                        opacity: 1; 
                        transform: translateY(0); 
                    }
                }
                
                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-10px); }
                }
                
                :global(.custom-dots) {
                    bottom: -40px !important;
                }
                
                :global(.custom-dots li button) {
                    width: 14px !important;
                    height: 14px !important;
                    border-radius: 50% !important;
                    background: rgba(255, 255, 255, 0.4) !important;
                    border: 2px solid transparent !important;
                    transition: all 0.3s ease !important;
                    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1) !important;
                }
                
                :global(.custom-dots li.slick-active button) {
                    background: linear-gradient(45deg, #3b82f6, #8b5cf6) !important;
                    border-color: #ffffff !important;
                    transform: scale(1.3) !important;
                    box-shadow: 0 4px 8px rgba(59, 130, 246, 0.4) !important;
                }
                
                :global(.custom-dots li:hover button) {
                    background: rgba(255, 255, 255, 0.7) !important;
                    transform: scale(1.15) !important;
                    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.15) !important;
                }
            `}</style>
        </main>
    );
};

export default ImageCarousel;