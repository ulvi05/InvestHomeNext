import Image from "next/image";
import LanguageSelector from "./LanguageSelector";

import LocationIcon from "../../../../public/icons/location.svg";
import PhoneIcon from "../../../../public/icons/ic_sharp-phone.svg";
import MailIcon from "../../../../public/icons/mail.svg";

const ContactHeader = () => {
  return (
    <>
      <div className="w-[full]  bg-primary">
        <div className="px-[80px]  h-10 m-auto text-[16px] text-white flex flex-row justify-between items-center">
          <div className="w-auto h-full flex flex-row items-center justify-start gap-[15px] flex-1 min-w-0 mr-[20px]">
            <Image
              src={LocationIcon}
              width={12}
              height={16}
              alt="location"
              className="shrink-0"
            />
            <p className="leading-[22px] max-[1150px]:truncate">
              Rusel plaza, Babək prospekti 10 e, Baku, Azerbaijan
            </p>
          </div>
          <div className="w-auto h-full flex flex-row items-center justify-between gap-[30px]">
            <div className="w-auto h-full flex flex-row items-center justify-between gap-[6px]">
              <Image
                src={PhoneIcon}
                width={20}
                height={20}
                alt="phone"
                className="mb-1"
              />

              <p className="flex flex-row leading-[22px]">+994 55 222 41 20</p>
            </div>
            <div className="w-auto h-full flex flex-row items-center justify-between gap-[6px]">
              <Image
                src={MailIcon}
                width={18}
                height={15}
                alt="mail"
                className="mb-[2px]"
              />
              <p className="flex flex-row leading-[22px]">info@investhome.az</p>
            </div>
            <LanguageSelector />
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactHeader;
