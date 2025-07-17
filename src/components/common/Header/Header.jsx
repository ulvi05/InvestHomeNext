"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import InvestHomeLogo from "../../../../public/images/InvestHomeLogo.png";
import MobileInvestHomeLogo from "../../../../public/images/logo.png";
// import { useTranslation } from "i18next";
import Link from "next/link";
import HamBar from "./HamBar";
import { useState } from "react";

const Header = () => {
  const pathname = usePathname();
  // const { t } = useTranslation();

  const [isOpen, setOpen] = useState(false);

  const navLinks = [
    { href: "/buy-sell", label: "Ev Alqı-satqısı" },
    { href: "/rent", label: "Kirayə" },
    { href: "/about", label: "Haqqımızda" },
    { href: "/services", label: "Xidmətlər" },
    { href: "/blog", label: "Bloq" },
    { href: "/become-agent", label: "Agent Ol" },
  ];

  return (
    <>
    <HamBar state={isOpen} setState={setOpen} />
      <section className="bg-white max-[930px]:mb-[12px] max-[768px]:mb-0">
        <div className="max-w-[1600px] w-auto mx-auto px-[80px] max-[768px]:px-[40px] max-[425px]:px-[16px]">
          <div className="flex justify-between items-center py-[12px]">
            <div className="max-[930px]:w-[100%] h-full flex max-[930px]:justify-between justify-center items-center max-[1050px]:gap-[16px] max-[1000px]:gap-[8px] gap-[34px]">
              <Link className="" href="/">
                <div className="w-auto h-full flex justify-center items-center gap-[15px]">
                  <Image
                    src={InvestHomeLogo}
                    alt="Invest Home Logo"
                    width={60}
                    height={55}
                    priority
                    className="max-[425px]:hidden flex-shrink-0"
                  />
                  <Image
                    src={MobileInvestHomeLogo}
                    alt="Invest Home Logo"
                    width={32}
                    height={32}
                    priority
                    className="min-[425px]:hidden flex-shrink-0"
                  />
                  <p className="max-[1200px]:hidden max-[425px]:block max-[425px]:text-[16px] text-[20px] font-semibold text-xl whitespace-nowrap">
                    İnvest Home
                  </p>
                </div>
              </Link>
              <div className="max-[768px]:hidden">
                <ul className="flex">
                  {navLinks.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className={`whitespace-nowrap cursor-pointer max-[1020px]:px-[8px] px-[16px] text-[16px] transition-all font-[500] ${pathname === link.href ? "text-[#FF9D14]" : ""
                          }`}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div onClick={()=>{setOpen(true)}} className="w-[24px] h-[24px] hidden max-[768px]:flex items-center justify-center">
                <i className="text-[24px] fa-solid fa-bars"></i>
              </div>
            </div>

            <div className="max-[930px]:hidden flex gap-[24px] items-center">
              <div className="heart-icon cursor-pointer">
                <svg
                  className=""
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
              </div>
              <Link href="/login">
                <button className="text-black flex justify-center items-center gap-[10px] text-[18px] cursor-pointer">
                  <div className="profile-icon">
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
                  </div>
                  <span className="max-[1440px]:hidden text-[16px] flex-shrink-0 font-[500]">Daxil ol</span>
                </button>
              </Link>
              <button className="py-[12px] max-[1440px]:px-[12px] px-[26px] rounded-[50px] bg-[#FF9D14] text-white flex justify-center items-center gap-[20px] cursor-pointer">
                <div className="plus-icon relative h-[20px] w-[20px]">
                  <i className="fa-regular fa-circle text-[20px]"></i>
                  <i className="fa-solid fa-plus absolute top-[50%] left-[50%] translate-[-50%]"></i>
                </div>
                <span className="max-[1440px]:hidden text-[16px] flex-shrink-0 font-[500]">Elan ver</span>
              </button>
            </div>
          </div>
          <div className=" max-[930px]:flex max-[768px]:hidden hidden gap-[24px] items-center justify-end">
            <div className="cursor-pointer heart-icon">
              <svg
                className=""
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
            </div>
            <Link href="/login">
              <button className="text-black flex justify-center items-center gap-[10px] text-[18px] cursor-pointer">
                <div className="profile-icon">
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
                </div>
                <span className="max-[1440px]:hidden text-[16px] flex-shrink-0 font-[500]">Daxil ol</span>
              </button>
            </Link>
            <button className="py-[12px] max-[1440px]:px-[12px] px-[26px] rounded-[50px] bg-[#FF9D14] text-white flex justify-center items-center gap-[20px] cursor-pointer">
              <div className="plus-icon relative h-[20px] w-[20px]">
                <i className="fa-regular fa-circle text-[20px]"></i>
                <i className="fa-solid fa-plus absolute top-[50%] left-[50%] translate-[-50%]"></i>
              </div>
              <span className="max-[1440px]:hidden text-[16px] flex-shrink-0 font-[500]">Elan ver</span>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
