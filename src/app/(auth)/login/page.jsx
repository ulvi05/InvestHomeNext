"use client";

import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useRouter } from "next/navigation";
import { loginWithPhone } from "@/lib/authService";
import { toast } from "react-toastify";
import Image from "next/image";
import AuthLayout from "@/app/(auth)/AuthLayout";
import Google from "../../../../public/icons/google.svg";
import Apple from "../../../../public/icons/apple.svg";
import Phone from "../../../../public/icons/phone-auth.svg";
import Link from "next/link";
import { useMediaQuery } from "@/hooks/useMediaQuery";

const globalPhoneRegex = /^\+?[1-9]\d{7,14}$/;

const schema = yup.object({
  phone: yup
    .string()
    .required("Telefon nömrəsi vacibdir")
    .matches(globalPhoneRegex, "Telefon nömrəsi düzgün formatda deyil"),
});

const LoginPage = () => {
  const isMobile = useMediaQuery("(max-width:768px)");
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const router = useRouter();

  const onSubmit = async (data) => {
    try {
      const result = await loginWithPhone(data.phone);
      localStorage.setItem("phone", data.phone);
      localStorage.setItem("entranceType", "LOGIN");
      router.replace("/otp");
    } catch (error) {
      if (error.response?.status === 404) {
        toast.error(error.response.data.message || "İstifadəçi tapılmadı");
      } else {
        toast.error(error.response?.data?.message || "Xəta baş verdi");
      }
    }
  };

  return (
    <AuthLayout>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col w-full px-4 md:px-0"
      >
        <div className="flex flex-col items-center gap-8 pb-8">
          <h1 className="text-2xl md:text-4xl font-medium text-1">Daxil ol</h1>
          <p className="text-lg text-1 text-center">
            "Invest <span className="text-[var(--color-primary)]">Home</span> –
            Gələcəyin evini bu gün seç, rahatlığını sabahdan yaşa!"
          </p>
        </div>

        <div className="flex flex-col gap-1 mb-4 md:mb-[28px]">
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
            {errors.phone?.message && <span>{errors.phone.message}</span>}
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <Link href="../otp">
            <button
              type="submit"
              className="w-full bg-primary text-white py-2.5 md:py-3 px-6 rounded-lg hover:opacity-90"
            >
              Daxil ol
            </button>
          </Link>

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
              Hesabın yoxdur?{" "}
              <Link href="/register" className="text-primary">
                Qeydiyyatdan keç
              </Link>
            </p>
          )}
        </div>
      </form>
    </AuthLayout>
  );
};

export default LoginPage;
