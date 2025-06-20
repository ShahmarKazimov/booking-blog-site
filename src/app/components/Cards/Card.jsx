import React from "react";
import Icons from "../ui/icons/icons";
import Link from "next/link";

const Card = ({ property }) => {
    return (
        <div className="border border-black/10 relative flex justify-between w-full flex-col rounded-xl bg-white text-gray-700 shadow-xl">
            <div>
                <div className="relative mx-4 mt-4 overflow-hidden text-white shadow-lg rounded-xl">
                    <img src={property.images[0]} alt={property.title} className="w-full h-56 object-cover" />
                    <div className="absolute inset-0 w-full h-full bg-gradient-to-tr from-transparent via-transparent to-black/60" />
                </div>
                <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                        <h5 className="text-xl font-medium text-blue-gray-900">{property.title}</h5>
                        <p className="flex items-center gap-1.5 text-base text-blue-gray-900">
                            {Icons.star}
                            {property.rating}
                        </p>
                    </div>
                    <p className="text-base text-gray-700">{property.description}</p>
                </div>
            </div>
            <div className="px-6 pb-6 flex flex-col gap-y-4">
                <div className="inline-flex flex-wrap items-center gap-3 group">
                    {property.amenities.map((amenity, index) => (
                        <span
                            key={index}
                            title={amenity.label}
                            className="cursor-pointer rounded-full border p-3 text-gray-900 bg-gray-900/5 hover:bg-gray-900/10 group-hover:opacity-70 transition-colors"
                        >
                            {Icons[amenity.icon]}
                        </span>
                    ))}
                    {property.extraAmenities > 0 && (
                        <span className="cursor-pointer rounded-full border p-3 text-gray-900 bg-gray-900/5 hover:bg-gray-900/10 group-hover:opacity-70 transition-colors">
                            +{property.extraAmenities}
                        </span>
                    )}
                </div>
                <Link href={`/${property.slug}`} >
                    <button className="cursor-pointer w-full rounded-lg bg-gray-900 py-3.5 px-7 text-sm font-bold uppercase text-white shadow-md hover:shadow-lg transition-all">
                        Details
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Card;
