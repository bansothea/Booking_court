"use client";

import { useState } from "react";
import { Heart, ChevronLeft, ChevronRight } from "lucide-react";

const ListingCard = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    "/images/Desktop.png",
    "/images/Google.jpg",
    "/images/Logo.png",
  ];

  // Function to go to next image
  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  // Function to go to previous image
  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="max-w-xs rounded-2xl overflow-hidden shadow-md bg-white">
      {/* Image Section */}
      <div className="relative">
        {/* Image Carousel */}
        <img src={images[currentImage]} alt="Listing" className="w-full h-48 object-cover rounded-t-2xl" />

        {/* Guest Favorite Tag */}
        <span className="absolute top-3 left-3 bg-white text-sm font-semibold px-3 py-1 rounded-lg shadow-md">
          Guest favorite
        </span>

        {/* Heart Icon (Favorite) */}
        <button className="absolute top-3 right-3 p-1 bg-white rounded-full shadow-md">
          <Heart className="w-5 h-5 text-gray-500" />
        </button>

        {/* Left Arrow Button */}
        <button
          onClick={prevImage}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
        >
          <ChevronLeft className="w-5 h-5 text-gray-600" />
        </button>

        {/* Right Arrow Button */}
        <button
          onClick={nextImage}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
        >
          <ChevronRight className="w-5 h-5 text-gray-600" />
        </button>

        {/* Image Dots Navigation */}
        <div className="absolute bottom-3 flex space-x-1 left-1/2 transform -translate-x-1/2">
          {images.map((_, index) => (
            <button
              key={index}
              className={`w-2.5 h-2.5 rounded-full ${
                currentImage === index ? "bg-white" : "bg-gray-400"
              }`}
              onClick={() => setCurrentImage(index)}
            />
          ))}
        </div>
      </div>

      {/* Details Section */}
      <div className="p-4">
        {/* Location and Rating */}
        <div className="flex justify-between items-center">
          <p className="text-gray-900 font-semibold">London, UK</p>
          <span className="text-gray-600 text-sm flex items-center">
            ⭐ 4.9
          </span>
        </div>

        {/* Host Info */}
        <p className="text-gray-600 text-sm">Stay with Genevieve · Web/graphic designer</p>

        {/* Date Range */}
        <p className="text-gray-500 text-sm">Mar 11 – 16</p>

        {/* Price */}
        <p className="text-gray-900 font-semibold mt-1">$66 <span className="text-gray-600 font-normal">night</span></p>
      </div>
    </div>
  );
};

export default ListingCard;
