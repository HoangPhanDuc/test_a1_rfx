import Button from "./Button";

export default function PopularDestinationContainer({
  imgSrc,
  title,
  listings,
}) {
  return (
    <div className="relative rounded-3xl overflow-hidden group">
      <img
        src={imgSrc}
        alt={title}
        className="w-[432px] h-[636px] object-cover rounded-3xl transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-3xl" />
      <div className="w-[432px] absolute bottom-[53px] text-white flex justify-around">
        <div>
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="">{listings} Listing</p>
        </div>
        <Button content={"View All"}/>
      </div>
    </div>
  );
}
