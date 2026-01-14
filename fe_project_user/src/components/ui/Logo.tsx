"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

interface LogoProps {
  /** Đường dẫn đến file logo (từ thư mục public). Ví dụ: "/logo.png" */
  logoSrc?: string;
  /** Alt text cho logo image */
  alt?: string;
  /** Chiều rộng logo (mặc định: 120) */
  width?: number;
  /** Chiều cao logo (mặc định: 40) */
  height?: number;
  /** Scale factor để phóng to logo (mặc định: 1.0). Ví dụ: 1.5 = lớn hơn 50% */
  scale?: number;
  /** Hiển thị text "Next Living" nếu không có logo image */
  showTextFallback?: boolean;
}

export function Logo({
  logoSrc = "/1.png",
  alt = "Next Living Logo",
  showTextFallback = true,
}: LogoProps) {
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <Link href="/" className="flex items-center h-full">
      {logoSrc && !imageError ? (
        <div className="relative w-24 h-full sm:w-32 md:w-40  lg:w-48 ">
          <Image
            src={logoSrc}
            alt={alt}
            unoptimized
            fill
            className="object-contain"
            priority
            onLoad={() => {
              setImageLoaded(true);
              console.log("Logo image loaded successfully:", logoSrc);
            }}
            onError={() => {
              console.error("Logo image failed to load:", logoSrc);
              setImageError(true);
            }}
          />
        </div>
      ) : null}
      {(!logoSrc || imageError) && showTextFallback ? (
        <span className="text-lg sm:text-xl md:text-2xl font-black bg-gradient-to-r from-[#28c4dd] via-[#5661b3] to-[#0c1f47] bg-clip-text text-transparent">
          Next Living
        </span>
      ) : null}
    </Link>
  );
}
