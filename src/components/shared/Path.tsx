import React from "react";

export default function Path() {
  return (
    <div className="relative py-4">
      {/* Decorative Path */}
      <svg
        aria-hidden="true"
        viewBox="0 0 1440 300"
        preserveAspectRatio="none"
        className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-52 w-full text-trip-assigned"
      >
        <path
          d="M0 240 C280 255 480 285 700 255 C930 225 1080 125 1200 70 C1290 30 1360 5 1440 0"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeDasharray="7 12"
          opacity="0.35"
        />

        {/* Start Dot */}
        <circle cx="10" cy="240" r="8" fill="currentColor" opacity="0.55" />

        {/* Middle Dot */}
        <circle cx="1130" cy="104" r="10" fill="currentColor" opacity="0.65" />
      </svg>
    </div>
  );
}
