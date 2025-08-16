import AuthAside from "@/components/common/Auth/AuthAside";
import { useMediaQuery } from "@/hooks/useMediaQuery";

const AuthLayout = ({ children, reverse = false }) => {
  const isMobile = useMediaQuery("(max-width:768px)");

  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2">
      <div
        className={`flex items-start justify-center bg-white ${
          reverse ? "md:order-2" : "md:order-1"
        }`}
      >
        <div className="w-full max-w-md p-0 mt-[114px]">{children}</div>
      </div>

      {!isMobile && (
        <div
          className={`bg-primary flex flex-col items-center text-center relative ${
            reverse ? "md:order-1" : "md:order-2"
          }`}
        >
          <AuthAside />
        </div>
      )}
    </div>
  );
};

export default AuthLayout;
