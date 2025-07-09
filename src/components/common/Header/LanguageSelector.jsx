import React, { useState, useEffect } from "react";
import { useTranslation } from "i18next";
import { IoIosArrowDown } from "react-icons/io";
import AzFlag from "../../assets/img/AZ.svg";
import EnFlag from "../../assets/img/US.svg";
import RuFlag from "../../assets/img/RU.svg";

const LANG_KEY = "appSelectedLanguage";

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const storedLang = localStorage.getItem(LANG_KEY) || "AZ";

  const [selectedLang, setSelectedLang] = useState(storedLang);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    i18n.changeLanguage(selectedLang.toLowerCase());
  }, []);

  const handleSelect = (lang) => {
    setSelectedLang(lang);
    i18n.changeLanguage(lang.toLowerCase());
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
          <img
            src={flags[selectedLang]}
            alt={selectedLang}
            className="w-5 h-5"
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
