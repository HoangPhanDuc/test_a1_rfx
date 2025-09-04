export default function CircleContainerWithDot({ value, label, percentage }) {
  const rotation = percentage * 3.6 - 90;
  const container = 312;
  const radius = container / 2;
  return (
    <div className="relative flex items-center justify-center w-[312px] h-[312px]">
      <div className="absolute w-full h-full rounded-full border border-[#1ca8cb]" />

      <div
        className="absolute left-1/2 top-1/2"
        style={{
          transform: `translate(-50%, -50%) rotate(${rotation}deg)`,
          transformOrigin: "center center",
          transition: "transform 1.5s ease-out",
        }}
      >
        <div
          style={{
            transform: `translateX(${radius}px)`,
          }}
        >
          <div className="relative w-6 h-6">
            <div className="absolute inset-0 rounded-full bg-[rgba(28,168,203,0.2)]" />
            <div className="absolute top-[6px] left-[6px] w-3 h-3 rounded-full bg-[#1ca8cb]" />
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center w-[264px] h-[264px] rounded-full bg-[#f0f9fb]">
        <span className="text-3xl font-bold">{value}</span>
        <span className="text-gray-700 text-sm">{label}</span>
      </div>
    </div>
  );
}
