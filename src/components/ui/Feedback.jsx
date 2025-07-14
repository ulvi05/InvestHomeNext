import Image from "next/image";



const Feedback = ({ name, image, stars, description }) => {
  return (
    <div className="w-[500px] h-[358px] bg-white rounded-[30px] shadow-[10px_10px_30px_0px_rgba(0,0,0,0.10)] flex flex-col px-[60px] ">
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
      <h4 className="w-[380px] h-auto text-2 text-[19.4px] font-medium mt-[18.74px]">
        {description}
      </h4>
      <hr className="w-[400px] h-[1px] text-[#D4D4D4] mt-[11px]" />
      <div className="w-full h-auto flex flex-row justify-between items-center mt-[20px] mb-[28px]">
        <div className="flex flex-row gap-[15px] items-center">
          <div className="w-[50px] h-[50px] rounded-full bg-[#D9D9D9]">
            <Image
              className="w-full h-full rounded-full object-cover"
              src={image}
              alt="..."
              width={50}
              height={50}
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