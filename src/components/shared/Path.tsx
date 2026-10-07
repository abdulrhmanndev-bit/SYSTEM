import React from "react";

const path =
  "M0 240 C280 255 480 285 700 255 C930 225 1080 125 1200 70 C1290 30 1360 5 1440 0";

export default function Path() {
  return (
    <div className="relative py-4">
      <svg
        aria-hidden="true"
        viewBox="0 0 1440 300"
        preserveAspectRatio="none"
        className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-52 w-full overflow-visible text-trip-assigned"
      >
        {/* Path */}
        <path
          id="ctaPath"
          d={path}
          fill="none"
          stroke="currentColor"
          strokeWidth="4"
          strokeDasharray="7 12"
          opacity="0.35"
        />

        {/* Moving Point 1 */}
        <ellipse rx="7" ry="10" fill="currentColor" opacity="0.8">
          <animateMotion dur="10s" repeatCount="indefinite">
            <mpath href="#ctaPath" />
          </animateMotion>
        </ellipse>

        {/* Moving Point 2 */}
        <ellipse rx="5" ry="7" fill="currentColor" opacity="0.55">
          <animateMotion dur="10s" begin="-5s" repeatCount="indefinite">
            <mpath href="#ctaPath" />
          </animateMotion>
        </ellipse>
      </svg>
    </div>
  );
}
