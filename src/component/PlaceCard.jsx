import { MdMyLocation } from "react-icons/md";
import Button from "./Button";
import { IoMdTime } from "react-icons/io";

export default function PlaceCard({ title, location, price, days, image }) {
  return (
    <div className="rounded-2xl w-[312px] h-[482.98px] box-border bg-white border border-[#bcced2] overflow-hidden relative">
      <div className="w-full h-[272.24px] overflow-hidden rounded-t-2xl">
        <img
          src={image}
          alt={title}
          className="w-[310px] h-[272.24px] object-cover"
        />
        {/* <div className="absolute top-0 left-0 w-full h-[272px] bg-gradient-to-b from-transparent to-black/20 rounded-t-2xl"></div> */}
      </div>

      <div className="p-6">
        <h3 className="text-lg font-medium font-manrope mb-2">{title}</h3>
        <div className="flex items-center text-gray-500 text-sm mb-2">
          <MdMyLocation className="w-4 h-4" />
          <span className="font-inter text-base">{location}</span>
        </div>
        <div className="flex items-center mb-2 font-inter">
          <span className="text-2xl font-medium">{price}</span>
          <span className="text-gray-500 ml-2 text-lg">/Person</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center text-[#113d48]">
            <IoMdTime className="w-5 h-5 mr-2" />
            <div className="font-inter text-base">{days}</div>
          </div>
          <Button
            w={150.83}
            h={48}
            bgColor={""}
            borderColor={"#E1E4E5"}
            color={"#113D48"}
            content={"Book Now"}
          />
        </div>
      </div>
    </div>
  );
}
