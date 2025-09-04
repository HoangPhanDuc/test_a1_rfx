export default function BrandImage({ image }) {
  return (
    <div className="w-[150px] h-[150px]">
      <img className="w-full h-full object-cover" src={image} alt="image" />
    </div>
  );
}
