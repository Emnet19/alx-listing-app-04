import React from "react";

export default function PropertyCard({ property }) {
  return (
    <div className="border rounded-lg shadow-lg overflow-hidden">
      <img
        src={property.imageUrl}
        alt={property.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-lg font-bold">{property.title}</h2>
        <p className="text-gray-600">{property.location}</p>
        <p className="text-green-600 font-semibold mt-1">${property.price}/night</p>
      </div>
    </div>
  );
}
