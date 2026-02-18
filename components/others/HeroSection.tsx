import React from "react";
import PicsLoop from "./PicsLoop";
import { MoveRight } from "lucide-react";

export default function HeroSection() {
  return (
    <div className="w-full flex items-center justify-center mb-12 mt-12 px-4">
      <div className="w-full max-w-lg flex flex-col items-center gap-6 text-center">
        <div className="rounded-full bg-white shadow-md px-4 py-1 text-sm font-medium text-neutral-800">
          Chosen by 2500+ Women
        </div>
        <h1 className="text-4xl md:text-6xl font-semibold leading-snug text-neutral-950">
          Just One Drop <br />{" "}
          <div className="inline-flex items-center gap-2 text-primary-600">
            Endless <PicsLoop /> Glow{" "}
          </div>
        </h1>
        <p className="text-lg text-neutral-700 max-w-md ">
          Raydiant keeps your skin soft, smooth, and naturally radiant. With
          just one drop, it hydrates and nourishes your skin so you can glow all
          day.
        </p>
        <button className="bg-neutral-950 text-white font-semibold px-6 py-2.5 rounded-lg hover:bg-neutral-800 transition-colors cursor-pointer w-fit inline-flex items-center gap-2">
          Buy Now <MoveRight className="ml-1" size={16} />
        </button>
      </div>
    </div>
  );
}
