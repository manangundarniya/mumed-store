// src/components/ui/input.js
import React from "react";
import clsx from "clsx";

export function Input({ className = "", ...props }) {
  return (
    <input
      className={clsx(
        "w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition",
        className
      )}
      {...props}
    />
  );
}
