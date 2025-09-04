import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

export default function TourGuildeCard({ image, name }) {
  return (
    <div className="w-[312px] h-[390.33px] flex items-end">
      <div className="w-full h-[290.33px] bg-[#FFFFFF] rounded-2xl relative flex justify-center items-end">
        <div className="w-[200px] h-[200px] absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <img
            className="w-full h-full rounded-full object-cover"
            src={image}
            alt="image tour card"
          />
        </div>
        <div className="w-[280px] h-[144.33px] bg-[#E9F6F9] rounded-2xl mb-4 flex flex-col items-center justify-center">
          <div className="text-center gap-2">
            <div className="font-semibold font-manrope text-2xl text-[#0D0D0C]">
              {name}
            </div>
            <div className="font-medium font-manrope text-[#0D0D0C]">
              Tourist Guide
            </div>
          </div>
          <div className="flex justify-center gap-1 mt-3">
            <div className="w-8 h-8 border-solid border-2 rounded-full border-[#1CA8CB] flex justify-center items-center">
              <FaFacebookF size={14} color="#1CA8CB" />
            </div>
            <div className="w-8 h-8 border-solid border-2 rounded-full border-[#1CA8CB] flex justify-center items-center">
              <FaTwitter size={14} color="#1CA8CB" />
            </div>
            <div className="w-8 h-8 border-solid border-2 rounded-full border-[#1CA8CB] flex justify-center items-center">
              <FaInstagram size={14} color="#1CA8CB" />
            </div>
            <div className="w-8 h-8 border-solid border-2 rounded-full border-[#1CA8CB] flex justify-center items-center">
              <FaYoutube size={14} color="#1CA8CB" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
