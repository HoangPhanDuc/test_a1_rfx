import { useMemo } from "react";
import ThailandImg from "../assets/images/destination-1-1jpg@2x.png";

const tours = [
  { title: "Wildlife", img: ThailandImg },
  { title: "Walking", img: ThailandImg },
  { title: "Cruises", img: ThailandImg },
  { title: "Hiking", img: ThailandImg },
  { title: "Airbirds", img: ThailandImg },
];

const transforms = [
  "rotate(7.09deg) translateY(40px)",
  "rotate(3.55deg) translateY(8px)",
  "rotate(0deg) translateY(0px)",
  "rotate(-3.55deg) translateY(8px)",
  "rotate(-7.09deg) translateY(40px)",
].reverse();

export default function TourContainer({ activeIndex, onSelect }) {
  const visibleTours = useMemo(() => {
    const arr = [...tours];
    const shift = 2 - activeIndex;
    return arr.map((_, i) => arr[(i - shift + arr.length) % arr.length]);
  }, [activeIndex]);

  return (
    <div className="flex justify-center gap-8 transition-transform duration-700 ease-in-out">
      {visibleTours.map((tour, idx) => (
        <div
          key={idx}
          onClick={() =>
            onSelect((activeIndex + idx - 2 + tours.length) % tours.length)
          }
          className="flex flex-col items-center bg-white rounded-[24px] shadow-md overflow-hidden cursor-pointer hover:scale-105 transition-transform"
          style={{
            transform: transforms[idx],
            transformOrigin: "bottom center",
          }}
        >
          <img
            src={tour.img}
            alt={tour.title}
            className="w-[306.8px] h-[303.84px] object-cover rounded-[24px] bg-gray-200"
          />
          <h3 className="mt-4 text-2xl font-semibold font-manrope">
            {tour.title}
          </h3>
          <button className="text-sm text-gray-500 hover:text-[#1ca8cb] font-inter font-semibold">
            See More
          </button>
        </div>
      ))}
    </div>
  );
}
