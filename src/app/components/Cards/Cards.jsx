import React from "react";
import Card from "./Card";
import homes from "../../data/homes";

const Cards = () => {
  return (
    <section className="px-4 lg:px-0 flex justify-end items-start min-h-screen py-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <div className="inline-block">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-black relative">
              Featured Properties
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {homes.map((property) => (
            <Card key={property.id} property={property} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cards;
