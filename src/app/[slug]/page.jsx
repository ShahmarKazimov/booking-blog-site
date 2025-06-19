import homes from '../data/homes';
import { notFound } from 'next/navigation';
import ImageGallery from '../components/HomeDetails/HomeDetails';
import { MapPin, Home, UserRound } from 'lucide-react';
import Link from 'next/link';

export function generateStaticParams() {
    return homes.map(home => ({
        slug: home.slug
    }));
}

export default async function HomeDetailPage({ params }) {
    // params'ı await et
    const { slug } = await params;
    const home = homes.find(h => h.slug === slug);

    if (!home) return notFound();

    return (
        <div className="min-h-screen">
            <div className="max-w-7xl mx-auto px-4 py-8">
                {/* Header */}
                <div className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                        <Home size={24} />
                        {home.title}
                    </h2>
                </div>

                <ImageGallery images={home.images} title={home.title} />

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                        <div className="rounded-2xl shadow-sm p-8 mb-6">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                                Description
                            </h2>
                            <p className="text-gray-700 text-lg leading-relaxed">
                                {home.description}
                            </p>
                        </div>

                        {home.features && (
                            <div className="rounded-2xl shadow-sm p-8">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {home.features.map((feature, i) => (
                                        <div key={i} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                            <span className="text-gray-700">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="lg:col-span-1">
                        <div className="bg-white rounded-2xl shadow-sm px-5 py-[1rem] sticky top-8">
                            <div className="mb-[0.6rem]">
                                <div className="flex justify-between py-2 border-b border-gray-100">
                                    <div className="flex items-center gap-1 text-gray-600">
                                        <MapPin size={18} />
                                        <span className="text-gray-600">Location</span>
                                    </div>
                                    <span className="font-medium text-gray-900">{home.location}</span>
                                </div>
                                <div className="flex justify-between py-2 border-b border-gray-100">

                                    <div className="flex items-center gap-1 text-gray-600">
                                        <UserRound size={18} />
                                        <span className="text-gray-600">Owner</span>
                                    </div>
                                    <span className="font-medium text-gray-900">{home.owner}</span>
                                </div>
                            </div>
                            <Link
                                href="https://wa.me/994504271987?text=Hello, I would like to get more information about this house."
                                target="_blank"
                                rel="noopener noreferrer">
                                <button className="cursor-pointer w-full rounded-lg bg-gray-900 py-3.5 px-7 text-sm font-bold uppercase text-white shadow-md hover:shadow-lg transition-all">
                                    Contact
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}