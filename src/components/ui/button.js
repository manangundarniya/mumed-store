// src/components/ui/button.js

import React from "react";

export const Button = ({ children, className = "", ...props }) => {
  return (
    <button
      className={`px-3 py-2 flex items-center gap-2 rounded-md font-medium transition-colors ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
