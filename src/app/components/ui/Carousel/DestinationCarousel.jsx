"use client";
import React from 'react';
import { Carousel } from 'antd';
import Image from 'next/image';

const DestinationCarousel = ({ images }) => {
    return (
        <section className="py-16 px-4 bg-gradient-to-b from-gray-50 to-white" aria-label="Featured Destinations">
            <div className="text-center mb-12">
                <div className="inline-block">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent relative">
                        Explore Our Featured Destinations
                        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full" aria-hidden="true"></div>
                    </h2>
                </div>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed mt-6">
                    Discover the beauty of our handpicked destinations. Each location offers unique experiences, stunning landscapes, and unforgettable adventures tailored for every type of traveler.
                </p>
            </div>

            {/* Beautiful Carousel Container */}
            <div className="max-w-7xl mx-auto">
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
                                <article className="relative w-full aspect-[4/3] sm:aspect-[16/10] rounded-xl overflow-hidden group shadow-lg">
                                    <div className="relative w-full h-full">
                                        <Image
                                            src={item.src}
                                            alt={item.alt}
                                            fill
                                            priority={index === 0}
                                            className="object-cover transition-all duration-700 group-hover:scale-105 group-hover:brightness-110"
                                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                            quality={85}
                                        />
                                    </div>

                                    {/* Image Overlays */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" aria-hidden="true"></div>
                                    <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 to-purple-900/10" aria-hidden="true"></div>

                                    {/* Top Badges */}
                                    <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                                        {/* Category Badge */}
                                        <div className="px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-full text-sm font-semibold text-gray-800 shadow-lg">
                                            <span aria-label={`Category: ${item.badge}`}>{item.badge}</span>
                                        </div>

                                        {/* Location Badge */}
                                        <div className="px-3 py-1 bg-black/40 backdrop-blur-sm rounded-full text-xs font-medium text-white shadow-lg">
                                            📍 {item.location}
                                        </div>
                                    </div>

                                    {/* Content Overlay */}
                                    <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-6 text-white">
                                        <div className="space-y-1">
                                            <h3 className="text-lg sm:text-3xl font-bold drop-shadow-lg leading-tight">
                                                {item.title}
                                            </h3>
                                            <p className="text-xs sm:text-base opacity-90 drop-shadow-md line-clamp-2">
                                                {item.description}
                                            </p>
                                            <button
                                                className="sm:mt-4 mt-1 px-3 sm:px-6 py-1 sm:py-2.5 cursor-pointer bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full text-white text-xs sm:text-sm font-medium transition-all hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-white/50"
                                                aria-label={`Explore ${item.title} destination`}
                                                type="button"
                                            >
                                                Explore Now
                                            </button>
                                        </div>
                                    </div>
                                </article>
                            </div>
                        ))}
                    </Carousel>
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

            <style jsx>{`
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
        </section>
    );
};

export default DestinationCarousel;