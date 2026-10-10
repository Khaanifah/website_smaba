"use client";

import { useRef } from "react";

export default function Slider({ children }) {
  const ref = useRef(null);

  const scroll = (arah) => {
    const el = ref.current;
    el.scrollBy({ left: arah * el.clientWidth * 0.8, behavior: "smooth" });
  };

  const tombol =
    "absolute top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white text-xl text-ocean-900 shadow-md hover:bg-ocean-100 md:flex";

  return (
    <div className="relative">
      <button onClick={() => scroll(-1)} aria-label="Geser kiri" className={`${tombol} -left-5`}>
        &lsaquo;
      </button>

      <div
        ref={ref}
        className="flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth px-1 py-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {children}
      </div>

      <button onClick={() => scroll(1)} aria-label="Geser kanan" className={`${tombol} -right-5`}>
        &rsaquo;
      </button>
    </div>
  );
}