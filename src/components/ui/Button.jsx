import React, { useState } from "react";

export const Button = ({ onSelect }) => {
  const arr = [
    { id: 1, name: "Bütün" },
    { id: 2, name: "Satılıq" },
    { id: 3, name: "Kirayə" },
    { id: 4, name: "Günlük" }
  ];

  const [activeId, setActiveId] = useState(1);

  return (
    <div className="bg-white w-fit flex gap-2" style={{ borderRadius: "12px 12px 0px 0px" }}>
      {arr.map((elem) => {
        const isActive = activeId === elem.id;

        return (
          <button
            key={elem.id}
            onClick={() => {
              setActiveId(elem.id);
              onSelect(elem.name);
            }}
            style={{ borderRadius: "12px 12px 0px 0px" }}
            className={`py-[10px] w-[102px] h-[44px] px-[28px] leading-[24px] tracking-wide text-sm font-medium transition-all duration-300 cursor-pointer
              ${isActive
                ? "bg-[#02836F] text-white border-transparent"
                : "bg-white text-[#02836F]"
              }`}
          >
            {elem.name}
          </button>
        );
      })}
    </div>
  );
};
