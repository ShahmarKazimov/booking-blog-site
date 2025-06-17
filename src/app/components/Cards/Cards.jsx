import React from "react";
import Card from "./Card";
import { areaData } from "../data/areaData"; 

const Cards = () => {
  return (
    <section className="flex justify-end items-start min-h-screen px-4 py-10">
      <div className="w-full max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-900">Featured Properties</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {areaData.map((property) => (
            <Card key={property.id} property={property} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cards;
