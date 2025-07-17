'use client';

import React, { useState } from 'react';

const FooterIcon = ({ icon, backgroundColor }) => {
  const [isHovered, setIsHovered] = useState(false);

  const baseStyle = {
    ...(isHovered && backgroundColor
      ? backgroundColor.startsWith('linear-gradient')
        ? { backgroundImage: backgroundColor, backgroundColor: undefined }
        : { backgroundColor }
      : {}),
  };

  return (
    <button
      className="w-8 h-8 px-[6px] py-[5px] flex items-center justify-center aspect-square border border-solid border-primary cursor-pointer rounded-full text-primary transition-all duration-200 hover:text-white hover:border-none"
      style={baseStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="hover:scale-110 transition-transform duration-200">
        {icon}
      </div>
    </button>
  );
};

export default FooterIcon;
