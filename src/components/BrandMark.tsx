import React from "react";
import Image from "next/image";

export function BrandMark({
  className = "w-9 h-9",
  size = 40,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <div className={`relative inline-flex items-center justify-center shrink-0 ${className}`}>
      <Image
        src="/logo.png"
        alt="AWL Metaverse"
        width={size}
        height={size}
        className="object-contain filter drop-shadow-[0_2px_8px_rgba(255,255,255,0.15)] transition-transform duration-300 hover:scale-105"
        priority
      />
    </div>
  );
}
