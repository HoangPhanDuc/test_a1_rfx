import Dot from "./Dot";

export default function DotGroups({
  count = 5,
  activeIndex = 0,
  spacing = 46,
  width,
  setActiveIndex,
}) {
  return (
    <div
      className="h-5 flex justify-center items-center"
      style={{ width: width ? `${width}px` : "auto" }}
    >
      {Array.from({ length: count }).map((_, idx) => (
        <div
          key={idx}
          onClick={() => setActiveIndex(idx)}
          style={{ marginLeft: idx === 0 ? 0 : spacing }}
          className="cursor-pointer"
        >
          <Dot color={idx === activeIndex ? "#1ca8cb" : "#113d48"} />
        </div>
      ))}
    </div>
  );
}
