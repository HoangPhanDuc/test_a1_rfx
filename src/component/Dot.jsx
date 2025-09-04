export default function Dot({ color = "#113d48" }) {
  return (
    <div
      className="rounded-lg w-4 h-4 border-solid border-[1px] box-border"
      style={{
        borderColor: color,
        backgroundColor: color === "#1ca8cb" ? "#1ca8cb" : "transparent",
      }}
    />
  );
}
