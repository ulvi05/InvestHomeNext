"use client";

import React from "react";

const MobileOnly = ({ children }) => {
  return (
    <div className="block md:hidden">
      {children}
    </div>
  );
};

export default MobileOnly;
