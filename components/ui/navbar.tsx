import React from "react";
import { MoveRight } from "lucide-react";

export default function Navbar() {
  return (
    <div className="w-full h-16 border-b border-neutral-300 flex items-center justify-between px-6">
      {/* logo */}
      <div className="flex items-center ">
        <h1
          className="text-2xl text-neutral-950
 font-medium "
        >
          Glowvera
        </h1>
      </div>
      {/* navigation links */}
      <div
        className="flex items-center gap-8 font-medium text-neutral-800
 "
      >
        <a href="#" className="hover:text-neutral-500">
          Benefits
        </a>
        <a href="#" className="hover:text-neutral-500">
          Ingredients
        </a>
        <a href="#" className="hover:text-neutral-500">
          How it works
        </a>
        <a href="#" className="hover:text-neutral-500">
          FAQs
        </a>
      </div>
      {/* buy now btn */}
      <button
        className="inline-flex items-center justify-center gap-2 
      bg-neutral-950 text-white 
       px-4 py-2.5 rounded-lg hover:bg-neutral-800 transition-colors cursor-pointer w-fit"
      >
        Buy Now
        <MoveRight size={16} />
      </button>
    </div>
  );
}
