import { useState, useEffect } from "react";
import { brandName, business } from "@/data/business";

export const ExperienceImage = () => {
  const images = business.assets.gallery;
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="relative self-start box-border caret-transparent overflow-hidden rounded-[20px] w-full">
      <div className="relative w-full" style={{ aspectRatio: "4/3" }}>
        {images.map((src, i) => (
          <img
            key={src}
            src={src}
            alt={`${brandName()} exterior cleaning work across ${business.region}`}
            className={`absolute inset-0 w-full h-full object-cover rounded-[20px] transition-opacity duration-700 ${i === current ? "opacity-100" : "opacity-0"}`}
          />
        ))}
        <div
          className="absolute inset-0 pointer-events-none rounded-[20px]"
          style={{ background: "#323232", mixBlendMode: "multiply", opacity: 0.4 }}
        />
        <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2 h-2 rounded-full transition-colors ${i === current ? "bg-white" : "bg-white/40"}`}
              aria-label={`Go to image ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
