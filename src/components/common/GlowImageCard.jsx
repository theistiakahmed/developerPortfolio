import React, { useEffect, useState } from "react";
import { FastAverageColor } from "fast-average-color";

const GlowImageCard = ({ image, des, title }) => {
  const [glowColor, setGlowColor] = useState("59,130,246");

  useEffect(() => {
    if (!image) return;

    const fac = new FastAverageColor();

    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = image;

    img.onload = () => {
      try {
        const color = fac.getColor(img);
        setGlowColor(
          `${color.value[0]},${color.value[1]},${color.value[2]}`
        );
      } catch {
        setGlowColor("59,130,246");
      }
    };

    img.onerror = () => {
      setGlowColor("59,130,246");
    };
  }, [image]);

  return (
    <>
      <div
        className="group relative w-[180px] md:w-[200px] md:h-[220px]  rounded-2xlbg-black/5 dark:bg-white/10 backdrop-blur-xl border border-black/10 dark:border-white/20 rounded-2xl  inline-block overflow-visible transition-all duration-300 hover:-translate-y-2"
      >
        {/* Glow Effect */}
        <div
          className="absolute inset-0 rounded-2xl blur-2xl opacity-0 group-hover:opacity-25 blur-xl transition-all duration-500 -z-10 scale-110"
          style={{
            backgroundColor: `rgb(${glowColor})`,
          }}
        ></div>

        <img
          className="w-[100px] h-[100px] m-auto mt-5"
          src={image}
          alt=""
        />

        <h3 className="text-center pt-5 font-bold text-[20px]">
          {title}
        </h3>

        <h4 className="text-gray-400 mt-2 text-center">
          {des}
        </h4>
      </div>
    </>
  );
};

export default GlowImageCard;