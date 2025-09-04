import { useEffect, useState } from "react";
import ThailandImg from "../assets/images/destination-1-1jpg@2x.png";
import DotGroups from "./DotGroups";
import TourGuildeCard from "./TourGuildeCard";

export default function TourGuideContainer() {
  const guides = [
    { name: "Jane Cooper", image: ThailandImg },
    { name: "Guy Hawkins", image: ThailandImg },
    { name: "Jenny Wilson", image: ThailandImg },
    { name: "Jacob Jones", image: ThailandImg },
  ];

  const total = guides.length;
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prev) => (prev + 1) % total);
    }, 3000);
    return () => clearInterval(interval);
  }, [total]);

  const visibleGuides = Array.from(
    { length: 4 },
    (_, i) => guides[(startIndex + i) % total]
  );

  return (
    <div className="h-full flex flex-col justify-around">
      <div className="w-full flex justify-center gap-8 flex-wrap">
        {visibleGuides.map((guide, index) => (
          <TourGuildeCard key={index} image={guide.image} name={guide.name} />
        ))}
      </div>

      <div className="flex justify-center">
        <DotGroups
          count={total}
          activeIndex={startIndex}
          setActiveIndex={setStartIndex}
          spacing={46}
        />
      </div>
    </div>
  );
}
