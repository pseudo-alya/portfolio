"use client";

import Image from "next/image";
import { useState } from "react";

export default function ProfileAvatar({ src, alt, initials }) {
  const [error, setError] = useState(false);

  if (error || !src) {
    return (
      <div className="h-full w-full rounded-full flex items-center justify-center bg-gradient-to-br from-[#0d1224] to-[#1a1443]">
        <span className="text-5xl font-bold gradient-text select-none">
          {initials}
        </span>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={320}
      height={320}
      className="rounded-full object-cover h-full w-full"
      onError={() => setError(true)}
    />
  );
}
