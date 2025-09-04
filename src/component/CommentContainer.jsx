import { useState, useEffect } from "react";
import ThailandImg from "../assets/images/destination-1-1jpg@2x.png";
import CommentDescription from "./CommentDescription";
import DotGroups from "./DotGroups";

export default function CommentContainer() {
  const arr = [
    {
      name: "Angelina Rose",
      rating: 5,
      comment:
        "“Solar panels adorn the roof, harnessing renewable energy to power the home and even feed excess electricity back into the grid. High-performance insulation and triple-glazed”",
      image: ThailandImg,
    },
    {
      name: "Andrew Simon",
      rating: 5,
      comment:
        "“A home that perfectly blends sustainability with luxury until discovered Ecoland Residence. The moment I stepped community, I knew it was where I wanted to live.”",
      image: ThailandImg,
    },
    {
      name: "Maria Doe",
      rating: 5,
      comment:
        "“The home boasts sleek, contemporary architecture with clean lines and expansive windows, allowing natural light to flood the interiors It incorporates passive design principles”",
      image: ThailandImg,
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    if (!autoPlay) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % arr.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [arr.length, autoPlay]);

  const handleUserAction = (index) => {
    setActiveIndex(index);
    setAutoPlay(false);
  };

  useEffect(() => {
    if (autoPlay) return;
    const timeout = setTimeout(() => setAutoPlay(true), 3000);
    return () => clearTimeout(timeout);
  }, [autoPlay]);

  const getPosition = (index) => {
    if (index === activeIndex) return "center";
    if (index === (activeIndex + 1) % arr.length) return "right";
    if (index === (activeIndex - 1 + arr.length) % arr.length) return "left";
    return "hidden";
  };

  return (
    <div className="w-[1980px] h-[578.2px] flex flex-col justify-center items-center overflow-hidden">
      <div className="relative flex justify-center items-center w-full h-[400px]">
        {arr.map((value, index) => {
          const pos = getPosition(index);

          return (
            <div
              key={index}
              className={`absolute transition-all duration-700 
              ${
                pos === "center"
                  ? "z-20 scale-105 -translate-y-14 opacity-100"
                  : ""
              } 
              ${
                pos === "left"
                  ? "z-10 scale-95 -translate-x-[700px] opacity-80"
                  : ""
              } 
              ${
                pos === "right"
                  ? "z-10 scale-95 translate-x-[700px] opacity-80"
                  : ""
              } 
              ${pos === "hidden" ? "opacity-0 pointer-events-none" : ""}
              `}
              onClick={() => handleUserAction(index)}
            >
              <CommentDescription
                name={value.name}
                rating={value.rating}
                comment={value.comment}
                image={value.image}
              />
            </div>
          );
        })}
      </div>

      <div className="pt-28 flex justify-center">
        <DotGroups
          count={arr.length}
          activeIndex={activeIndex}
          setActiveIndex={(i) => handleUserAction(i)}
          spacing={42}
        />
      </div>
    </div>
  );
}
