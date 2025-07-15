"use client";

import { LoginSignupButtonWithHover } from "@/components/ui/LoginSignupButton";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const AuthAside = () => {
  const pathname = usePathname();
  const isLogin = pathname === "/login";

  return (
    <>
      <div className="flex flex-col gap-[60px] items-center">
        <div className="text-white flex flex-col gap-[52px] w-[466px] mt-[108px]">
          <div className="flex flex-col items-center gap-[12px]">
            <Image
              src="/login-invest-logo.jpg"
              width={100}
              height={100}
              className="rounded-full"
              alt="logo"
            />
            <p className="text-[20px] font-[600]">İnvest Home</p>
          </div>
          <p className="text-[36px] font-[600]">
            “Yeni evinizi tapmağa bir addım yaxınsınız”
          </p>
        </div>

        <div className="flex flex-col gap-[24px]">
          <p className="text-white font-[500] leading-[24px]">
            {isLogin
              ? "Hesabınız yoxdur? Qeydiyyatdan keçin!"
              : "Artıq hesabınız var? Daxil olun!"}
          </p>
          <Link href={isLogin ? "/register" : "/login"}>
            <LoginSignupButtonWithHover
              actionName={isLogin ? "Qeydiyyat" : "Daxil ol"}
            />
          </Link>
        </div>
      </div>

      <svg
        className="absolute top-[42px] right-[86px]"
        xmlns="http://www.w3.org/2000/svg"
        width="154"
        height="154"
        viewBox="0 0 154 154"
        fill="none"
      >
        <circle
          opacity="0.5"
          cx="77.2664"
          cy="77.2671"
          r="76.3288"
          transform="rotate(30 77.2664 77.2671)"
          fill="url(#paint0_linear_428_3581)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_428_3581"
            x1="77.2664"
            y1="0.938293"
            x2="77.2664"
            y2="153.596"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </>
  );
};

export default AuthAside;
