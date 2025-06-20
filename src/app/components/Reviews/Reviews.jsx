"use client";
import React, { useState, useEffect } from "react";
import { testimonials } from "../../data/testimonials";

const TestimonialSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [slidesToShow, setSlidesToShow] = useState(3);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 480) {
                setSlidesToShow(1);
            } else if (window.innerWidth <= 768) {
                setSlidesToShow(1);
            } else if (window.innerWidth <= 1024) {
                setSlidesToShow(2);
            } else {
                setSlidesToShow(3);
            }
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) =>
                prev >= testimonials.length - slidesToShow ? 0 : prev + 1
            );
        }, 4000);

        return () => clearInterval(interval);
    }, [slidesToShow]);

    return (
        <section className="w-full flex justify-center items-center relative overflow-hidden px-4 lg:px-0 py-8 sm:py-12" aria-labelledby="testimonial-heading">
            {/* Animated background */}
            <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
                <div className="absolute top-1/4 left-1/4 w-32 h-32 sm:w-64 sm:h-64 bg-blue-100 rounded-full opacity-20 blur-3xl animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-48 h-48 sm:w-96 sm:h-96 bg-purple-100 rounded-full opacity-15 blur-3xl animate-pulse" />
            </div>

            <div className="w-full max-w-7xl mx-auto relative z-10">
                {/* Header */}
                <header className="text-center mb-6 sm:mb-8">
                    <div className="text-center">
                        <div className="inline-block">
                            <h2 id="testimonial-heading" className="text-2xl md:text-3xl font-bold text-black relative mb-3 sm:mb-4">
                                What Our Customers Say
                            </h2>
                        </div>
                    </div>
                    <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto mb-4">
                        Discover why thousands of customers trust our timepieces for their most important moments.
                    </p>
                </header>

                {/* Main slider */}
                <main className="relative overflow-hidden mx-auto sm:max-w-2xl lg:max-w-7xl">
                    <div
                        className="flex gap-x-5 transition-transform duration-700 ease-out"
                        style={{
                            transform: `translateX(-${(currentSlide * 100) / testimonials.length}%)`,
                            width: `${(testimonials.length * 100) / slidesToShow}%`,
                        }}
                    >
                        {testimonials.map((testimonial) => (
                            <article
                                key={testimonial.id}
                                style={{ width: `${100 / testimonials.length}%` }}
                            >
                                <blockquote className="bg-white/80 backdrop-blur-sm p-4 sm:p-6 rounded-2xl flex flex-col items-center text-center border border-black/10 sm:shadow-sm min-h-[320px] sm:min-h-[380px] lg:min-h-[400px]">

                                    {/* Quote Icon */}
                                    <div className="mb-4 sm:mb-5 relative">
                                        <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-xl animate-pulse"></div>
                                        <div className="relative bg-black p-2 sm:p-3 rounded-full">
                                            <svg
                                                className="w-4 h-4 sm:w-6 sm:h-6 text-white"
                                                fill="currentColor"
                                                viewBox="0 0 24 24"
                                                aria-hidden="true"
                                            >
                                                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-10zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                                            </svg>
                                        </div>
                                    </div>

                                    {/* Testimonial Text */}
                                    <p className="text-gray-700 text-xs sm:text-sm font-medium leading-relaxed italic mb-6 sm:mb-8 line-clamp-4 sm:line-clamp-none">
                                        "{testimonial.text}"
                                    </p>

                                    {/* Profile Info */}
                                    <footer className="flex flex-col items-center">
                                        <div className="mb-3 sm:mb-4 relative">
                                            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-md opacity-30 animate-pulse"></div>
                                            <img
                                                src={testimonial.imgSrc}
                                                alt={`${testimonial.name} profile`}
                                                className="relative w-12 h-12 sm:w-16 sm:h-16 rounded-full border-2 sm:border-3 border-white object-cover hover:scale-110 transition-transform duration-300"
                                            />
                                        </div>
                                        <strong className="text-sm sm:text-lg font-bold text-gray-800 mb-1 sm:mb-2">
                                            {testimonial.name}
                                        </strong>
                                        <small className="text-blue-600 text-xs sm:text-sm uppercase tracking-wide font-medium">
                                            {testimonial.job}
                                        </small>
                                    </footer>
                                </blockquote>
                            </article>
                        ))}
                    </div>
                </main>

                {/* Navigation Dots */}
                <nav className="flex justify-center pt-4 sm:pt-6 space-x-2" aria-label="Testimonial navigation">
                    {Array.from({ length: testimonials.length - slidesToShow + 1 }).map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentSlide(index)}
                            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 ${currentSlide === index ? "bg-black scale-125" : "bg-gray-300 hover:bg-gray-400"
                                }`}
                            aria-label={`Go to testimonial ${index + 1}`}
                            aria-current={currentSlide === index ? "true" : undefined}
                        />
                    ))}
                </nav>

                {/* Mobile Arrows */}
                <div className="flex justify-between items-center mt-4 sm:hidden">
                    <button
                        onClick={() => setCurrentSlide(prev => prev > 0 ? prev - 1 : testimonials.length - slidesToShow)}
                        className="bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-lg border border-black/5 hover:bg-white transition-colors"
                        aria-label="Previous testimonial"
                    >
                        <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                    <span className="text-sm text-gray-500 font-medium">
                        {currentSlide + 1} / {testimonials.length - slidesToShow + 1}
                    </span>

                    <button
                        onClick={() => setCurrentSlide(prev => prev < testimonials.length - slidesToShow ? prev + 1 : 0)}
                        className="bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-lg border border-black/5 hover:bg-white transition-colors"
                        aria-label="Next testimonial"
                    >
                        <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default TestimonialSlider;
