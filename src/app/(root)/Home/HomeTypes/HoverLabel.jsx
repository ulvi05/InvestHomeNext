"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";

const HoverLabel = ({ iconSrc, label, bgColor }) => {
  const containerRef = useRef(null);
  const textRef = useRef(null);

  const [width, setWidth] = useState(24);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 425);
      setWidth(window.innerWidth <= 425 ? 18 : 24);
    };

    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);

    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  const handleMouseEnter = () => {
    if (isMobile) return;
    if (textRef.current && containerRef.current) {
      const textWidth = textRef.current.offsetWidth;
      setWidth(24 + textWidth + 7);
    }
  };

  const handleMouseLeave = () => {
    if (isMobile) return;
    setWidth(24);
  };

  return (
    <div
      ref={containerRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ width: `${width}px`, backgroundColor: bgColor }}
      className="transition-all duration-300 ease-in-out rounded-full overflow-hidden flex items-center text-center cursor-pointer"
    >
      <div className="max-[426px]:w-[18px] max-[426px]:h-[18px] w-[24px] h-[24px] flex items-center justify-center shrink-0">
        <Image
          src={iconSrc}
          alt="icon"
          width={isMobile ? 10 : 14}
          height={isMobile ? 10 : 14}
        />
      </div>
      <span
        ref={textRef}
        className="ml-[1px] text-[#FAFAFA] text-[12px] font-[400] whitespace-nowrap"
      >
        {label}
      </span>
    </div>
  );
};

export default HoverLabel;
