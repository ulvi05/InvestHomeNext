"use client";
import { createContext, useContext, useEffect, useState } from "react";
import AzFlag from "../../public/icons/AZ.svg";
import RuFlag from "../../public/icons/RU.svg";
import EnFlag from "../../public/icons/US.svg";

const LANG_KEY = "appSelectedLanguage";

const LangContext = createContext();

export const LangProvider = ({ children }) => {
  const [selectedLang, setSelectedLang] = useState("AZE");

  useEffect(() => {
    const storedLang = localStorage.getItem(LANG_KEY) || "AZE";
    setSelectedLang(storedLang);
  }, []);

  const handleSelect = (lang) => {
    setSelectedLang(lang);
    localStorage.setItem(LANG_KEY, lang);
  };

  const flags = [
    { name: "AZE", flag: AzFlag },
    { name: "ENG", flag: EnFlag },
    { name: "RUS", flag: RuFlag },
  ];


  const currentFlag =
    flags.find((f) => f.name === selectedLang)?.flag || AzFlag;

  return (
    <LangContext.Provider
      value={{ selectedLang, handleSelect, currentFlag, flags }}
    >
      {children}
    </LangContext.Provider>
  );
};

export const useLang = () => useContext(LangContext);
