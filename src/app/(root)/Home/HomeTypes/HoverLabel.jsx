import React, { useRef, useState } from "react";

const HoverLabel = ({ iconSrc, label,bgColor }) => {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const [width, setWidth] = useState(24); 

  const handleMouseEnter = () => {
    if (textRef.current && containerRef.current) {
      const textWidth = textRef.current.offsetWidth;
      setWidth(24 + textWidth + 14); 
    }
  };

  const handleMouseLeave = () => {
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
      <div className="w-[24px] h-[24px] flex items-center justify-center shrink-0">
        <img src={iconSrc} alt="icon" />
      </div>
      <span
        ref={textRef}
        className="ml-2 text-[#FAFAFA] text-[12px] font-[400] whitespace-nowrap"
      >
        {label}
      </span>
    </div>
  );
};

export default HoverLabel;
