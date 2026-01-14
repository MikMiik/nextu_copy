"use client";
import { useEffect, useRef, useState } from "react";
import { useClientOnly } from "@/hooks/use-hydration";
import Image from "next/image";
import { setLocale } from "@/i18n/action";
import { useRouter } from "next/navigation";

const languages = [
  {
    code: "vi",
    label: "VIE",
    flag: "https://flagcdn.com/w40/vn.png",
  },
  {
    code: "en",
    label: "ENG",
    flag: "https://flagcdn.com/w40/gb.png",
  },
];

export default function LanguageSwitcher() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(languages[0]);
  const isClient = useClientOnly();
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const router = useRouter();

  const changeLanguage = async (lang: typeof selected) => {
    await setLocale(lang.code);
    router.refresh();

    setSelected(lang);
    setOpen(false);
  };

  useEffect(() => {
    if (isClient) {
      const savedLang = localStorage.getItem("i18nextLng");
      const matched = languages.find((l) => l.code === savedLang);
      if (matched) setSelected(matched);
    }
  }, [isClient]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Không render gì cho đến khi component đã mount ở client-side
  if (!isClient) {
    return (
      <div className="inline-flex items-center gap-2 rounded-md px-2 py-1 bg-white">
        <div className="w-5 h-5 rounded-sm bg-gray-200 animate-pulse"></div>
        <span className="font-medium text-sm text-gray-400">...</span>
      </div>
    );
  }

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      {/* Nút chính */}
      <button
        onClick={() => setOpen(!open)}
        className="inline-flex items-center gap-2 rounded-md px-2 py-1 bg-white hover:bg-gray-100"
      >
        <Image
          src={selected.flag}
          alt={selected.code}
          width={20}
          height={20}
          className="w-5 h-5 rounded-sm"
        />
        <span className="font-medium text-sm">{selected.label}</span>
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute right-0 z-10 mt-2 w-24 rounded-md shadow-lg bg-white border border-gray-200">
          <ul className="py-1">
            {languages.map((lang) => (
              <li
                key={lang.code}
                onClick={() => changeLanguage(lang)}
                className={`flex items-center gap-2 px-2 py-1.5 cursor-pointer text-sm
                ${
                  lang.code === selected.code
                    ? "bg-orange-200 font-semibold"
                    : "hover:bg-gray-100"
                }`}
              >
                <Image
                  src={lang.flag}
                  alt={lang.code}
                  width={20}
                  height={20}
                  className="w-5 h-5 rounded-sm"
                />
                {lang.label}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
