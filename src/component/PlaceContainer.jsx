import { useState, useEffect } from "react";
import PlaceCard from "./PlaceCard";
import ThailandImg from "../assets/images/destination-1-1jpg@2x.png";
import DotGroups from "./DotGroups";

export default function PlaceContainer() {
  const places = [
    {
      title: "Ghorepani Poon Hill Trek",
      location: "Bhutan, Pokhara",
      price: "$569.00",
      days: "5 Days",
      image: ThailandImg,
    },
    {
      title: "Langtang Valley Trekking",
      location: "Bhutan, India, Pokhara",
      price: "$600.00",
      days: "6 Days",
      image: ThailandImg,
    },
    {
      title: "Short Trek around Pokhara",
      location: "Bhutan, India, Tibet",
      price: "$250.00",
      days: "6 Days",
      image: ThailandImg,
    },
    {
      title: "Island Peak Climbing",
      location: "Nepal, Pokhara, Tibet",
      price: "$569.00",
      days: "3 Days",
      image: ThailandImg,
    },
  ];

  const total = places.length;
  const [startIndex, setStartIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    if (!autoPlay) return;
    const interval = setInterval(() => {
      setStartIndex((prev) => (prev + 1) % total);
    }, 3000);
    return () => clearInterval(interval);
  }, [total, autoPlay]);

  const handleDotClick = (index) => {
    setStartIndex(index);
    setAutoPlay(false);
  };

  useEffect(() => {
    if (autoPlay) return;
    const timeout = setTimeout(() => setAutoPlay(true), 3000);
    return () => clearTimeout(timeout);
  }, [autoPlay]);

  const visiblePlaces = Array.from(
    { length: 4 },
    (_, i) => places[(startIndex + i) % total]
  );

  return (
    <div className="w-[1344px] mx-auto h-[608px] flex flex-col justify-between overflow-hidden">
      <div className="flex justify-center gap-8 transition-all duration-700">
        {visiblePlaces.map((place, index) => (
          <div key={index} className="flex-shrink-0 w-[300px]">
            <PlaceCard {...place} />
          </div>
        ))}
      </div>

      <div className="flex justify-center items-center mb-4">
        <DotGroups
          count={total}
          activeIndex={startIndex}
          setActiveIndex={handleDotClick}
          spacing={46}
        />
      </div>
    </div>
  );
}
