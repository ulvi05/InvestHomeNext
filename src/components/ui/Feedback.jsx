import Image from "next/image";



const Feedback = ({ name, image, stars, description }) => {
  return (
    <div className="bg-white rounded-[30px] flex flex-col px-[60px] max-[650px]:px-[20px] ">
      <svg
        className="mt-[34px]"
        xmlns="http://www.w3.org/2000/svg"
        width="60"
        height="38"
        viewBox="0 0 60 38"
        fill="none"
      >
        <path
          d="M15.9606 0L0 37.2632H21.7241L30.1478 0H15.9606ZM45.8128 0L29.8522 37.2632H51.5764L60 0H45.8128Z"
          fill="#FFC700"
          fillOpacity="0.4"
        />
      </svg>
      <h4 className="text-2 text-[19.4px] font-medium mt-[18.74px]">
        {description}
      </h4>
      <hr className="w-full h-[1px] text-[#D4D4D4] mt-[11px]" />
      <div className="flex flex-row justify-between items-center mt-[20px] mb-[28px]">
        <div className="flex flex-row gap-[15px] items-center">
          <div className="rounded-full bg-[#D9D9D9]">
            <Image
              className="min-w-[50px] min-h-[50px] rounded-full object-cover"
              src={image}
              alt="..."
              width={0}
              height={0}
            />
          </div>
          <h4 className="text-2 text-[19.4px] font-medium">
            {name}
          </h4>
        </div>
        <Image
        src={stars}
        alt="stars"
        width={86}
        height={13.43}
      />
      </div>
    </div>
  );
};

export default Feedback;