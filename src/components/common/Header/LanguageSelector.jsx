"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image"; // Keep Image import for flags
import ArrowDown from "../../../../public/icons/ArrowDown.svg";

// Static imports of SVGs from /public (used as image paths, not components)
import AzFlag from "../../../../public/icons/AZ.svg";
import EnFlag from "../../../../public/icons/US.svg";
import RuFlag from "../../../../public/icons/RU.svg";

const LANG_KEY = "appSelectedLanguage";

const LanguageSelector = () => {
  const [selectedLang, setSelectedLang] = useState("AZE");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const storedLang = localStorage.getItem(LANG_KEY) || "AZE";
    setSelectedLang(storedLang);
  }, []);

  const handleSelect = (lang) => {
    setSelectedLang(lang);
    localStorage.setItem(LANG_KEY, lang);
    setIsOpen(false);
  };

  // Flag mapping
  const flags = {
    AZE: AzFlag,
    ENG: EnFlag,
    RUS: RuFlag,
  };

  const currentFlag = flags[selectedLang] || AzFlag; // fallback if key missing

  return (
    <div className="flex flex-row items-center">
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="cursor-pointer flex flex-row items-center text-[14px] text-white dark:text-[var(--main-color)] rounded-md px-3 py-1 focus:outline-none"
        >
          <Image
            src={currentFlag}
            alt={selectedLang}
            width={20}
            height={20}
            className="mr-[6px]"
          />
          {selectedLang}
          <Image
            src={ArrowDown}
            alt="Arrow Down"
            width={26}
            height={26}
            className={`transition-transform duration-300 ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}
          />
        </button>

        {isOpen && (
          <ul className="absolute bg-white text-center right-0 mt-1 w-12 border border-gray-300 rounded-md shadow-lg z-40">
            {["AZE", "ENG", "RUS"].map((lang) => (
              <li
                key={lang}
                onClick={() => handleSelect(lang)}
                className={`${
                  selectedLang === lang
                    ? "text-[var(--primary-color)]"
                    : "text-gray-400"
                } px-3 py-1 rounded-md cursor-pointer`}
              >
                {lang}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default LanguageSelector;
