import { IoMdTime } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";
import { MdArrowDropDown, MdKeyboardArrowDown } from "react-icons/md";

export default function TopNav() {
  return (
    <div className="w-full border-b border-gray-300 h-[47px] text-sm text-gray-900 flex items-center justify-between px-[72px]">
      <div className="flex justify-between items-center gap-10">
        <div className="flex items-center gap-2 min-w-[220px]">
          <IoLocationOutline size={14} />
          <span className="font-medium font-inter leading-[26px]">
            45 New Eskaton Road, Austria
          </span>
        </div>
        <span>|</span>
        <div className="flex items-center gap-2 min-w-[295px]">
          <IoMdTime size={14} />
          <span className="font-medium font-inter  leading-[26px]">
            Sun to Friday: 8.00 am - 7.00 pm, Austria
          </span>
        </div>
      </div>

      <div className="flex items-center gap-8">
        <button className="w-[100px] h-[34px] flex items-center gap-1 border border-gray-300 rounded-full justify-center">
          <span className="text-sm font-inter">Language</span>
          <MdArrowDropDown className="w-[8px] h[4px]" />
        </button>

        <div className="w-[226.05px] h-[28px] flex justify-between items-center">
          <span className="font-inter text-sm cursor-pointer">Faq</span>
          <span>|</span>
          <span className="font-inter text-sm cursor-pointer">Support</span>
          <span>|</span>
          <div className="flex items-center gap-1 cursor-pointer">
            <span className="font-inter text-sm">Sign in/ Register</span>
            <MdKeyboardArrowDown className="w-[9.65px] h-[26px]" />
          </div>
        </div>
      </div>
    </div>
  );
}
