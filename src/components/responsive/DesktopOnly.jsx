"use client";

import React from "react";

const DesktopOnly = ({ children }) => {
  return (
    <div className="hidden md:block">
      {children}
    </div>
  );
};

export default DesktopOnly;
