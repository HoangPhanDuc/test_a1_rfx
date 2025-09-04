import { IoIosArrowDown } from "react-icons/io";

export default function Search({ icon, content }) {
  return (
    <div className="w-[248.58px] h-[41px] border-e border-[#E1E4E5]">
      <div className="w-[222.58px] h-full flex justify-between items-center">
        <div className="ms-8 gap-2 flex items-center">
          {icon}
          <div className="text-[#6E7070]">{content}</div>
        </div>
        <div>
          <IoIosArrowDown />
        </div>
      </div>
    </div>
  );
}
