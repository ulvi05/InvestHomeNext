"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import InvestHomeLogo from "../../../assets/images/InvestHomeLogo.png";
import { GoPlusCircle } from "react-icons/go";
// import { useTranslation } from "i18next";
import Link from "next/link";

const Header = () => {
  const pathname = usePathname();
  // const { t } = useTranslation();

  const navLinks = [
    { href: "/buy-sell", label: "Ev alqı-satqısı" },
    { href: "/rent", label: "Kirayə"},
    { href: "/about", label: "Haqqımızda" },
    { href: "/services", label: "Xidmətlər" },
    { href: "/blog", label: "Bloq" },
    { href: "/become-agent", label: "Agent ol" },
  ];

  return (
    <>
      <div className="max-w-full w-auto h-[80px] m-auto flex flex-row justify-between items-center px-[80px] max-[1185px]:flex-col max-[1185px]:pt-[20px] max-[1185px]:mb-[20px] max-[880px]:gap-[20px] max-[880px]:relative">
        <div className="w-auto h-full flex flex-row justify-center items-center gap-[48px] max-[1440px]:gap-[10px] max-[1185px]:self-start">
          <Link href="/">
            <div className=" w-auto h-full flex flex-row justify-center items-center gap-[15px] max-[880px]:hidden">
              <Image
                src={InvestHomeLogo}
                alt="Invest Home Logo"
                width={60}
                height={55}
                priority
                className="flex-shrink-0"
              />
              <p className="font-semibold text-xl mt-[8px] max-[1440px]:hidden">
                İnvest Home
              </p>
            </div>
          </Link>
          <div>
            <ul className="flex flex-row items-center justify-around w-auto gap-[22px] text-base text-center">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`cursor-pointer transition-all px-3 py-1 rounded-2xl w-auto ${
                      pathname === link.href ? "text-[#FF9D14]" : ""
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="h-full w-[320px] flex flex-row justify-between items-center max-[1185px]:self-end max-[880px]:w-auto">
          <Image
            src={InvestHomeLogo}
            alt="Invest Home Logo"
            width={60}
            height={55}
            className="flex-shrink-0 min-[880px]:hidden max-[880px]:absolute max-[880px]:left-[80px]"
          />
          <div></div>
          <svg
            className="max-[880px]:mr-[20px]"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M7.5 3.44981C8.17024 3.44981 8.80175 3.57317 9.40039 3.81992L9.65527 3.93418C10.3381 4.26088 10.9134 4.70399 11.3887 5.26621L12 5.98887L12.6104 5.26719C13.0263 4.77557 13.5194 4.37457 14.0938 4.06309L14.3447 3.93516C15.0184 3.61295 15.734 3.45047 16.5 3.44981C17.8675 3.44981 18.9683 3.89959 19.8594 4.79063C20.7504 5.68166 21.2002 6.78253 21.2002 8.15C21.2002 9.84841 20.5795 11.4233 19.2764 12.8951C18.0565 14.2728 16.6892 15.6598 15.1738 17.0563L14.5156 17.6549L14.5107 17.6588L12.8105 19.2086L12.7969 19.2213L12.7842 19.234C12.6853 19.3329 12.5769 19.4008 12.4521 19.4439C12.2872 19.5009 12.1374 19.525 12 19.525C11.8635 19.525 11.714 19.501 11.5488 19.4439C11.4238 19.4007 11.3147 19.3326 11.2148 19.233L11.1895 19.2096L9.46484 17.6344C7.93428 16.2338 6.53591 14.8449 5.26855 13.4684L4.7334 12.8795C3.42338 11.4169 2.79921 9.8473 2.7998 8.15L2.80566 7.89707C2.85826 6.64595 3.3052 5.62605 4.14062 4.79063C5.03166 3.89959 6.13253 3.44981 7.5 3.44981Z"
              stroke="black"
              strokeWidth="1.6"
            />
          </svg>
          <Link href="/login">
            <button className="w-[156px] h-[50px] bg-white rounded-[50px] text-black flex flex-row justify-center items-center gap-[10px] text-[18px] cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M5.5 14.5C5.5 12.0147 7.51472 10 10 10C12.4853 10 14.5 12.0147 14.5 14.5"
                  stroke="#1B1F27"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
                <path
                  d="M10.0008 9.99998C11.492 9.99998 12.7008 8.79119 12.7008 7.29998C12.7008 5.80882 11.492 4.59998 10.0008 4.59998C8.50957 4.59998 7.30078 5.80882 7.30078 7.29998C7.30078 8.79119 8.50957 9.99998 10.0008 9.99998Z"
                  stroke="#1B1F27"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10 19C14.9706 19 19 14.9706 19 10C19 5.02944 14.9706 1 10 1C5.02944 1 1 5.02944 1 10C1 14.9706 5.02944 19 10 19Z"
                  stroke="#1B1F27"
                  strokeWidth="1.6"
                />
              </svg>
              {/* {t("Daxil ol")} */}
              Daxil ol
            </button>
          </Link>
          <button className="w-[156px] h-[50px] bg-[#FF9D14] rounded-[50px] text-white flex flex-row justify-center items-center gap-[16px] text-[18px] cursor-pointer">
            <GoPlusCircle className="text-[20px]" /> Elan ver
             {/* {t("Elan ver")} */}
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
