"use client";

import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useRouter } from "next/navigation";
import { registerUser } from "@/lib/authService";
import { toast } from "react-toastify";
import Image from "next/image";
import AuthLayout from "../AuthLayout";
import Phone from "../../../../public/icons/phone-auth.svg";
import Google from "../../../../public/icons/google.svg";
import Apple from "../../../../public/icons/apple.svg";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import Link from "next/link";

const globalPhoneRegex = /^\+?[1-9]\d{7,14}$/;

const schema = yup.object({
  fullName: yup
    .string()
    .required("Ad soyad vacibdir")
    .test(
      "two-words",
      "Zəhmət olmasa həm ad, həm soyad daxil edin",
      (v) => v && v.trim().split(" ").length >= 2
    ),
  phone: yup
    .string()
    .required("Telefon nömrəsi vacibdir")
    .matches(globalPhoneRegex, "Telefon nömrəsi düzgün formatda deyil"),
  terms: yup.boolean().oneOf([true], "Zəhmət olmasa şərtləri qəbul edin"),
});

const RegisterPage = () => {
  const {
    control,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const router = useRouter();
  const isMobile = useMediaQuery("(max-width:768px)");

  const onSubmit = async (data) => {
    try {
      await registerUser({ fullName: data.fullName, phone: data.phone });
      localStorage.setItem("phone", data.phone);
      localStorage.setItem("entranceType", "SIGNUP");
      router.replace("/otp");
    } catch (error) {
      if (error.response?.status === 302) {
        toast.info(error.response.data.message || "OTP artıq göndərilib");
      } else {
        toast.error(error.response?.data?.message || "Xəta baş verdi");
      }
    }
  };

  return (
    <AuthLayout reverse>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col w-full px-4 md:px-0"
      >
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-2xl font-medium text-1">Qeydiyyat</h1>
          <p className="text-lg text-1 text-center">
            Yüzlərlə əmlak elanına baxmaq və öz evinizi elan etmək üçün hesab
            yaradın.
          </p>
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="fullName" className="text-sm font-medium text-black">
            Ad Soyad<span className="text-red-500">*</span>
          </label>
          <input
            id="fullName"
            type="text"
            placeholder="Ad soyadınızı daxil edin"
            {...register("fullName")}
            className="border border-black p-2 rounded-md text-base placeholder:pl-2"
          />
          <div className="h-[28px] text-sm text-red-500">
            {errors.fullName?.message}
          </div>
        </div>

        <div className="flex flex-col gap-1 mt-[4px]">
          <label htmlFor="phone" className="text-sm font-medium text-black">
            Telefon<span className="text-red-500">*</span>
          </label>
          <div className="relative w-full">
            <Controller
              name="phone"
              control={control}
              defaultValue="+994"
              render={({ field }) => (
                <input
                  {...field}
                  type="tel"
                  id="phone"
                  placeholder="994*********"
                  className="h-[44px] px-4 border border-black w-full text-base rounded-lg"
                />
              )}
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
              <Image src={Phone.src} alt="phone" width={20} height={20} />
            </span>
          </div>
          <div className="h-[28px] text-sm text-red-500">
            {errors.phone?.message}
          </div>
        </div>

        <div className="flex flex-col gap-1 mt-[4px]">
          <div className="flex items-center gap-2.5">
            <input
              id="terms"
              type="checkbox"
              {...register("terms")}
              className="w-5 h-5 accent-primary cursor-pointer"
            />
            <label
              htmlFor="terms"
              className="text-base text-black cursor-pointer"
            >
              <span className="text-primary hover:text-green-800">
                Şərtlər və qaydaları
              </span>{" "}
              oxudum, razıyam.
            </label>
          </div>
          <div className="h-[28px] text-sm text-red-500">
            {errors.terms?.message}
          </div>
        </div>

        <div className="mt-[4px] flex flex-col gap-6">
          <button
            type="submit"
            className="w-full bg-primary text-white py-3 px-6 rounded-lg hover:opacity-90"
          >
            Qeydiyyatdan keç
          </button>

          <div className="flex items-center justify-center gap-4">
            <span className="h-px w-full bg-[#866AB4]" />
            <span className="text-sm text-1 whitespace-nowrap">və ya</span>
            <span className="h-px w-full bg-[#866AB4]" />
          </div>
          <div className="flex md:flex-col flex-row gap-3">
            <button
              type="button"
              className="w-full flex items-center justify-center gap-2 border border-primary text-[#1B1F27] py-[10px] md:py-3 rounded-lg hover:bg-green-50"
            >
              <Image src={Google.src} alt="Google" width={20} height={20} />
              <span className="font-medium hidden md:inline">
                Sign in with Google
              </span>
            </button>

            <button
              type="button"
              className="w-full flex items-center justify-center gap-2 border border-primary text-[#1B1F27] py-[10px] md:py-3 rounded-lg hover:bg-green-50"
            >
              <Image src={Apple.src} alt="Apple" width={20} height={20} />
              <span className="font-medium hidden md:inline">
                Sign in with Apple
              </span>
            </button>
          </div>
          {isMobile && (
            <p className="mt-4 text-center text-sm">
              Hesabın var?{" "}
              <Link href="/login" className="text-primary">
                Daxil ol
              </Link>
            </p>
          )}
        </div>
      </form>
    </AuthLayout>
  );
};

export default RegisterPage;
