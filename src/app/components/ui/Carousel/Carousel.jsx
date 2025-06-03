"use client";
import React from 'react';
import HeroSection from '../HeroSection/HeroSection';
import DestinationCarousel from './DestinationCarousel';
import { destinationImages } from '../../data/ImageData';
import '../../../../../src/app/globals.css';

const Carousel = () => {
    return (
        <main className="relative">
            <HeroSection />
            <DestinationCarousel images={destinationImages} />
        </main>
    );
};

export default Carousel;