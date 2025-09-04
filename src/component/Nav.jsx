import { HiOutlineArrowRight } from "react-icons/hi";
import { MdKeyboardArrowDown } from "react-icons/md";
import logo from "../assets/images/logo-image.png";

export default function Nav() {
  return (
    <div className="w-full bg-white h-[92px] flex items-center shadow-sm relative">
      <div className="w-[364px] h-full flex items-center gap-4">
        <img src={logo} alt="Logo" className="h-24 object-cover" />
      </div>

      <nav className="w-[867.52px] h-full flex justify-between items-center">
        <div className="group">
          <span className="h-full capitalize text-base font-medium cursor-pointer flex items-center gap-1">
            Home
            <span>
              <MdKeyboardArrowDown />
            </span>
          </span>

          <div
            className="absolute top-full left-0 w-full h-[300px] bg-white shadow-md 
            opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 
            pointer-events-none group-hover:pointer-events-auto
            transition-all duration-150 ease-in-out z-50 overflow-auto"
          >
            <div className="mx-auto flex justify-start gap-4 p-4"></div>
          </div>
        </div>

        <span className="h-full capitalize text-base font-medium cursor-pointer flex items-center">
          About Us
        </span>

        <div className="group">
          <span className="h-full capitalize text-base font-medium cursor-pointer flex items-center gap-1">
            Destinations
            <span>
              <MdKeyboardArrowDown />
            </span>
          </span>
          <div
            className="absolute top-full left-0 w-full h-[300px] bg-white shadow-md 
            opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 
            pointer-events-none group-hover:pointer-events-auto
            transition-all duration-150 ease-in-out z-50 overflow-auto"
          >
            <div className="mx-auto flex justify-start gap-4 p-4"></div>
          </div>
        </div>

        <span className="capitalize font-medium cursor-pointer">Services</span>
        <div className="group">
          <span className="h-full capitalize text-base font-medium cursor-pointer flex items-center gap-1">
            Trip
            <span>
              <MdKeyboardArrowDown />
            </span>
          </span>
          <div
            className="absolute top-full left-0 w-full h-[300px] bg-white shadow-md 
            opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 
            pointer-events-none group-hover:pointer-events-auto
            transition-all duration-150 ease-in-out z-50 overflow-auto"
          >
            <div className="mx-auto flex justify-start gap-4 p-4"></div>
          </div>
        </div>

        <div className="group">
          <span className="h-full capitalize text-base font-medium cursor-pointer flex items-center gap-1">
            Pages
            <span>
              <MdKeyboardArrowDown />
            </span>
          </span>
          <div
            className="absolute top-full left-0 w-full h-[300px] bg-white shadow-md 
            opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 
            pointer-events-none group-hover:pointer-events-auto
            transition-all duration-150 ease-in-out z-50 overflow-auto"
          >
            <div className="mx-auto flex justify-start gap-4 p-4"></div>
          </div>
        </div>

        <div className="group">
          <span className="h-full capitalize font-medium cursor-pointer">
            <span className="h-full capitalize text-base font-medium cursor-pointer flex items-center gap-1">
              Blog
              <span>
                <MdKeyboardArrowDown />
              </span>
            </span>
          </span>
          <div
            className="absolute top-full left-0 w-full h-[300px] bg-white shadow-md 
            opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 
            pointer-events-none group-hover:pointer-events-auto
            transition-all duration-150 ease-in-out z-50 overflow-auto"
          >
            <div className="mx-auto flex justify-start gap-4 p-4"></div>
          </div>
        </div>
        <span className="h-full capitalize font-medium cursor-pointer flex items-center">
          Contact Us
        </span>
      </nav>

      <div className="ml-auto pr-[72px]">
        <button className="w-[229.39px] h-[56px] flex justify-center gap-2 items-center bg-[#113d48] font-inter text-white rounded-[48px]">
          Request a quote
          <HiOutlineArrowRight />
        </button>
      </div>
    </div>
  );
}
