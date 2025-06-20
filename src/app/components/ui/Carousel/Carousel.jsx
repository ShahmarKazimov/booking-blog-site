import React from 'react';
import DestinationCarousel from './DestinationCarousel';
import { carouselImages } from '../../../data/carouselImages';
import '../../../../../src/app/globals.css';
import areaCover from "../../../../../public/images/destinations/area36_slide1.jpg";
import areaCoverHoney from "../../../../../public/images/destinations/area36_honey_slide3.jpg";
import Image from 'next/image';

export const metadata = {
    title: 'Area36 – Luxury Resorts & Destinations',
    description: 'Discover stunning destinations including Area36 luxury resorts and exclusive honeymoon suites. Browse our featured destination gallery.',
    keywords: 'destinations, travel, luxury resorts, Area36, honeymoon, vacation',
    openGraph: {
        title: 'Area36 – Luxury Travel Destinations',
        description: 'Explore our curated collection of premium travel destinations and resorts around the world.',
        type: 'website',
        url: 'https://your-domain.com', // TODO: After deployment, update this URL
        siteName: 'Area36',
        images: [
            {
                url: 'https://your-domain.com/og-image.jpg', // TODO: After deployment, update this URL
                width: 1200,
                height: 630,
                alt: 'Area36 luxury travel destinations',
            },
        ],
    },
};

const DestinationsPage = () => {
    return (
        <div className="flex flex-col">
            {/* Main Content */}
            <main className="relative px-4 lg:px-0" role="main">
                <div className="text-center">
                    <div className="inline-block">
                        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-black relative">
                            Explore Our Featured Destinations
                        </h2>
                    </div>
                </div>
                <div className="max-w-7xl mx-auto">
                    {/* Page Title for Screen Readers */}
                    <h1 className="sr-only">Destination Gallery and Featured Areas</h1>

                    {/* Destinations Gallery Section */}
                <section
  className="grid grid-cols-1 gap-6 md:gap-4 md:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2 sm:h-auto lg:h-[35rem]"
  aria-label="Destination gallery"
>
  {/* Main Carousel */}
  <article className="lg:col-span-3 lg:row-span-2 md:col-span-2">
    <h2 className="sr-only">Destination Carousel</h2>
    <DestinationCarousel
      images={carouselImages}
      aria-label="Destination photo carousel"
      className="h-full"
    />
  </article>

  {/* Featured Area 1 */}
  <article className="lg:col-span-2 lg:row-span-1 lg:col-start-4 md:col-span-1">
    <h3 className="sr-only">Area36 Featured Image</h3>
    <figure className="h-full">
      <Image
        src={areaCover}
        alt="Area36 destination - luxury resort view with stunning landscape"
        className="rounded-lg object-cover w-full h-full"
        priority={true}
        placeholder="blur"
        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        quality={90}
      />
    </figure>
  </article>

  {/* Featured Area 2 */}
  <article className="lg:col-span-2 lg:row-span-1 lg:col-start-4 md:col-span-1">
    <h3 className="sr-only">Area36 Honey Featured Image</h3>
    <figure className="h-full">
      <Image
        src={areaCoverHoney}
        alt="Area36 Honey section - exclusive honeymoon suite with romantic atmosphere"
        className="rounded-lg object-cover w-full h-full"
        priority={true}
        placeholder="blur"
        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        quality={90}
      />
    </figure>
  </article>
</section>

                </div>
            </main>
        </div>
    );
};

export default DestinationsPage;