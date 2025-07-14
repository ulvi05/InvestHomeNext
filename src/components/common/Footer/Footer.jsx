'use client';

import Image from "next/image";
import Link from "next/link";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import InvestHomeLogo from "../../../../public/images/logo.png";
import LocationBlack from "../../../../public/icons/locationBlack.svg";
import PhoneBlack from "../../../../public/icons/phoneBlack.svg";
import MailBlack from "../../../../public/icons/mailBlack.svg";
import Arrow from "../../../../public/icons/Arrow 2.svg"


const Footer = () => {
  return (
    <div className="relative bg-[#E4E7F5]">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-[#4361EE] opacity-10 -z-10"></div>

      {/* Footer Container */}
      <div className="relative z-10 font-medium px-6 sm:px-10 lg:px-20 py-16
  grid grid-cols-1 gap-12
  sm:grid-cols-2
  lg:grid-cols-4">

        {/* Logo and Contact Info */}
        <div className="flex flex-col gap-8">
          <div className="flex items-center gap-3">
            <Image src={InvestHomeLogo} alt="Invest Home" width={50} height={50} />
            <span className="text-[var(--text-color-2)] font-semibold text-xl">İnvest Home</span>
          </div>
          <div className="flex flex-col gap-4 text-2">
            <div className="flex items-center gap-2">
              <Image src={LocationBlack} alt="Location" width={20} height={20} />
              <span>Rusel Plaza, Babək pr.</span>
            </div>
            <div className="flex items-center gap-2">
              <Image src={PhoneBlack} alt="Phone" width={20} height={20} />
              <a href="tel:+994552224120">+994 55 222 41 20</a>
            </div>
            <div className="flex items-center gap-2">
              <Image src={MailBlack} alt="Mail" width={20} height={20} />
              <a href="mailto:investhomaz@gmail.com">investhomaz@gmail.com</a>
            </div>
          </div>
        </div>

          <div className="flex flex-col gap-6">
            <span className="text-[var(--text-color-1)] text-lg">Bakı, Azərbaycan</span>
            <ul className="flex flex-col gap-2 text-[var(--text-color-2)]">
              {["Nizami", "Narimanov", "Xatai", "Nasimi", "Sebail", "Xazar", "Suraxani", "Yasamal", "Sabunchu", "Binagadi"].map((place) => (
                <li key={place}>
            <Link href="/">{place}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
        <div className="flex flex-col gap-6">
          <span className="text-[var(--text-color-1)] text-lg">Quick Links</span>
          <ul className="flex flex-col gap-2 text-[var(--text-color-2)]">
            {[
              { name: "Ev Alqı-satqısı", href: "/" },
              { name: "Kirayə", href: "/" },
              { name: "Haqqımızda", href: "/" },
              { name: "Xidmətlər", href: "/" },
              { name: "Bloq", href: "/" },
              { name: "Agent ol", href: "/" },
            ].map((link) => (
              <li key={link.name}>
                <Link href={link.href}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Email Subscription + Socials */}
        <div className="flex flex-col gap-6">
          <span className="text-[var(--text-color-1)] text-lg">Təkliflərinizi bizimlə bölüşün!</span>

          <div className="relative w-full max-w-sm">
            <input
              type="text"
              placeholder="Email Adress"
              className="w-full h-12 pl-5 pr-16 rounded-full bg-white shadow-md outline-none placeholder-gray-400"
            />
            <button className="absolute top-1.5 right-2 w-10 h-10 rounded-full bg-[var(--primary-color)] flex items-center justify-center">
              <Image src={Arrow} alt="Submit" width={20} height={20} />
            </button>
          </div>

          <div>
            <span className="text-[var(--text-color-1)] text-lg">Follow Us On</span>
            <div className="flex items-center gap-4 mt-3 text-[var(--primary-color)]">
              <a href="#" aria-label="LinkedIn"><FaLinkedinIn className="text-xl" /></a>
              <a href="#" aria-label="Facebook"><FaFacebookF className="text-xl" /></a>
              <a href="#" aria-label="Instagram"><FaInstagram className="text-xl" /></a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Footer;
