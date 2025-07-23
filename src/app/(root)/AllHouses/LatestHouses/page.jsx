"use client";

import React, { useState } from "react";
import HouseTypeSelector from "../../Home/HomeTypes/HouseTypeSelector";
import { houseData } from "@/components/core/house";
import HouseCard from "@/components/ui/HouseCard";

const Page = () => {
  const [activeType, setActiveType] = useState("enSon");

  const filteredHouses =
    activeType === "enSon"
      ? houseData
      : houseData.filter((house) => house.type === activeType);

  return (
    <>
      <HouseTypeSelector
        houseType="Ən son siyahıya alınmış əmlaklar"
        activeType={activeType}
        setActiveType={setActiveType}
      />

      <div className="max-w-[1600px] mx-auto max-[769px]:px-[40px] px-20 mt-[62px]">
        <div className="w-full h-auto flex flex-row items-center justify-between gap-y-10 flex-wrap">
          {filteredHouses.map((house) => (
            <HouseCard key={house.id} house={house} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Page;
