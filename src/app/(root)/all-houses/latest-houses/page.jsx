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
        <div className="w-full grid grid-cols-4 max-[1025px]:grid-cols-3 max-[769px]:grid-cols-2 max-[426px]:grid-cols-1 gap-[24px]">
          {filteredHouses.map((house) => (
            <HouseCard key={house.id} house={house} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Page;
