export const LoginSignupButton = ({ actionName }) => {
  return (
    <button className="w-[414px] h-[48px] flex justify-center items-center bg-primary rounded-[8px] border border-solid border-white text-white text-center text-[16px] font-medium ">
      {actionName}
    </button>
  );
};

export const LoginSignupButtonWithHover = ({ actionName }) => {
  return (
    <button className="w-[414px] h-[48px] flex justify-center items-center bg-primary rounded-[8px] border border-solid border-white text-white text-center text-[16px] font-medium transition-all duration-300 cursor-pointer hover:bg-white hover:text-primary hover:border-primary">
      {actionName}
    </button>
  );
};
