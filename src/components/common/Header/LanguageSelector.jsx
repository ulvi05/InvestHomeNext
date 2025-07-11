'use client'

import React, { useState, useEffect } from "react";
import Image from "next/image";
// import { useTranslation } from "i18next";
import { IoIosArrowDown } from "react-icons/io";
import AzFlag from "../../../../public/icons/AZ.svg";
import EnFlag from "../../../../public/icons/US.svg";
import RuFlag from "../../../../public/icons/RU.svg";


const LANG_KEY = "appSelectedLanguage";

const LanguageSelector = () => {
  // const { i18n } = useTranslation();

  const [selectedLang, setSelectedLang] = useState("AZ");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // This code now runs only on the client, where localStorage is available.
    const storedLang = localStorage.getItem(LANG_KEY) || "AZ";
    setSelectedLang(storedLang);
    // i18n.changeLanguage(storedLang.toLowerCase());
  }, []); // The empty dependency array ensures this runs only once on mount.

  const handleSelect = (lang) => {
    setSelectedLang(lang);
    // i18n.changeLanguage(lang.toLowerCase());
    localStorage.setItem(LANG_KEY, lang);
    setIsOpen(false);
  };

  const flags = {
    AZ: AzFlag,
    EN: EnFlag,
    RU: RuFlag,
  };

  return (
    <div className="flex flex-row  items-center">
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className=" cursor-pointer flex flex-row items-center gap-[5px] text-[18px] text-white dark:text-[var(--main-color)] text-sm rounded-md px-3 py-1 focus:outline-none"
        >
          <Image
            src={flags[selectedLang]}
            alt={selectedLang}
            width={20}
            height={20}
          />
          {selectedLang}
          <IoIosArrowDown
            className={`transition-transform duration-300 ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}
          />
        </button>

        {isOpen && (
          <ul className="absolute bg-white text-center right-0 mt-1 w-12 bg- border border-gray-300 rounded-md shadow-lg z-40">
            {["AZ", "EN", "RU"].map((lang) => (
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
