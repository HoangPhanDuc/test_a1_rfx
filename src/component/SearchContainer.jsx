import { IoLocationOutline } from "react-icons/io5";
import { MdAccessTime } from "react-icons/md";
import { PiBicycle } from "react-icons/pi";
import Search from "./Search";

export default function SearchContainer() {
  return (
    <div className="w-[1320px] h-[110px] flex justify-center items-center bg-white border-2 border-[#1CA8CB] rounded-2xl">
      <div className="w-[1252px] h-[56px] flex items-center">
        <Search
          content="Destination"
          icon={<IoLocationOutline size={20} color="#1CA8CB" />}
        />
        <Search
          content="Activity"
          icon={<PiBicycle size={20} color="#1CA8CB" />}
        />
        <Search
          content="0 Days - 6 Days"
          icon={<IoLocationOutline size={20} color="#1CA8CB" />}
        />
        <Search
          content="$200 - $580"
          icon={<MdAccessTime size={20} color="#1CA8CB" />}
        />
        <div className="flex flex-1 justify-center">
          <button className="w-[157.72px] h-14 bg-[#1CA8CB] rounded-[48px] text-white cursor-pointer">
            Search
          </button>
        </div>
      </div>
    </div>
  );
}
