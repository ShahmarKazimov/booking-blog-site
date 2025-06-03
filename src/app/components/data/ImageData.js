// components/data/ImageData.js
import image1 from '../../../../public/images/destinations/area-image2.jpg';
import image2 from '../../../../public/images/destinations/area-image4.jpg';
import image3 from '../../../../public/images/destinations/area-image6.jpg';
import image4 from '../../../../public/images/destinations/area-image5.jpg';
import backgroundImage from '../../../../public/images/destinations/area-image-hero.jpg';

export const destinationImages = [
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

export const heroBackgroundImage = backgroundImage;