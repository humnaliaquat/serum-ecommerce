"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const images = [
  "/ReviewPics/one.jpg",
  "/ReviewPics/two.jpg",
  "/ReviewPics/third.jpg",
];

export default function PicsLoop() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-xs mx-auto      flex items-center justify-center">
      <div className="relative  w-18 h-18 border-4 shadow-md  border-white rounded-2xl overflow-hidden rotate-6">
        {images.map((src, index) => (
          <Image
            key={index}
            src={src}
            alt={`review pic ${index + 1}`}
            fill
            className={`object-cover rounded-lg absolute top-0 left-0 transition-opacity duration-1000 transform  ${
              index === currentIndex ? "opacity-100  " : "opacity-0 "
            }`}
          />
        ))}
      </div>
    </div>
  );
}
