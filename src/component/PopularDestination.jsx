import { useState, useEffect } from "react";
import PopularDestinationContainer from "./PopularDestinationContainer";
import TextSection from "./TextSection";
import ThailandImg from "../assets/images/destination-1-1jpg@2x.png";

export default function PopularDestination() {
  const destinations = [
    { img: ThailandImg, title: "Island", listings: 9 },
    { img: ThailandImg, title: "Nepal", listings: 14 },
    { img: ThailandImg, title: "Thailand", listings: 22 },
    { img: ThailandImg, title: "Maldives", listings: 18 },
    { img: ThailandImg, title: "Belgium", listings: 12 },
  ];

  const total = destinations.length;
  const [centerIndex, setCenterIndex] = useState(2);
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    if (!autoPlay) return;
    const interval = setInterval(() => {
      setCenterIndex((prev) => (prev + 1) % total);
    }, 3000);
    return () => clearInterval(interval);
  }, [autoPlay, total]);

  const handleClick = (idx) => {
    setCenterIndex(idx);
    setAutoPlay(false);
  };

  useEffect(() => {
    if (autoPlay) return;
    const timeout = setTimeout(() => setAutoPlay(true), 3000);
    return () => clearTimeout(timeout);
  }, [autoPlay]);

  const getCardStyles = (distance) => {
    switch (distance) {
      case -2:
        return "-translate-x-[510px] scale-75 z-10";
      case -1:
        return "-translate-x-[260px] scale-90 z-20";
      case 0:
        return "scale-100 z-30";
      case 1:
        return "translate-x-[260px] scale-90 z-20";
      case 2:
        return "translate-x-[510px] scale-75 z-10";
      default:
        return "opacity-0 pointer-events-none";
    }
  };

  return (
    <div className="w-full flex flex-col items-center">
      <div className="flex flex-col items-center mb-12">
        <TextSection
          subtitle="Top Destination"
          title="Popular Destination"
          color="#113D48"
          fontSizeSubtitle={40}
          fontSizeTitle={48}
        />
      </div>

      <div className="relative flex justify-center items-center h-[636px] w-[1344px]">
        {destinations.map((_, idx) => {
          let distance = idx - centerIndex;
          if (distance > total / 2) distance -= total;
          if (distance < -total / 2) distance += total;

          return (
            <div
              key={idx}
              className={`absolute transition-all duration-500 ease-in-out w-[432px] h-[636px] cursor-pointer ${getCardStyles(
                distance
              )}`}
              onClick={() => handleClick(idx)}
            >
              <PopularDestinationContainer
                imgSrc={destinations[idx].img}
                title={destinations[idx].title}
                listings={destinations[idx].listings}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
