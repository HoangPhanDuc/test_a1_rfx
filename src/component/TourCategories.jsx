import { useState } from "react";
import DotGroups from "./DotGroups";
import TextSection from "./TextSection";
import TourContainer from "./TourContainer";

export default function TourCategories() {
  const [activeIndex, setActiveIndex] = useState(0);
  const total = 5;

  return (
    <div className="w-[1774px] h-[906.81px]">
      <div className="flex flex-col justify-center items-center mt-[185px]">
        <TextSection
          subtitle={"Wornderful Place For You"}
          title={"Tour Categories"}
          color={"#113D48"}
          fontSizeSubtitle={40}
          fontSizeTitle={48}
        />
      </div>
      <div className="w-full h-[453.13px] flex flex-col justify-between mt-[48.68px]">
        <div className="w-full">
          <TourContainer activeIndex={activeIndex} onSelect={setActiveIndex} />
        </div>
        <div className="flex justify-center items-center">
          <DotGroups
            count={total}
            activeIndex={activeIndex}
            spacing={46}
            width={250}
            setActiveIndex={setActiveIndex}
          />
        </div>
      </div>
    </div>
  );
}
