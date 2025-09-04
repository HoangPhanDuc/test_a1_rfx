import { FaRegStar, FaStar } from "react-icons/fa";
import { PiQuotes } from "react-icons/pi";

export default function CommentDescription({ name, rating, comment, image }) {
  const fullStars = rating;
  const emptyStars = 5 - rating;
  return (
    <div className="w-[616px] h-[335.2px] bg-[#E9F6F9] rounded-3xl relative">
      <div className="flex justify-between items-center ms-4 me-12 pt-12">
        <div className="flex items-center gap-5">
          <div>
            <img
              src={image}
              alt="avatar"
              className="w-[76px] h-[76px] rounded-full object-cover"
            />
          </div>
          <div>
            <div className="text-[#113D48] font-manrope font-semibold text-2xl">{name}</div>
            <div className="font-inter text-[#6E7070]">Traveller</div>
          </div>
        </div>
        <div className="flex">
          {Array(fullStars)
            .fill(0)
            .map((_, i) => (
              <FaStar key={i} color="#FFA944" />
            ))}
          {Array(emptyStars)
            .fill(0)
            .map((_, i) => (
              <FaRegStar key={`empty-${i}`} />
            ))}
        </div>
      </div>
      <div className="mt-6 ms-4 w-[490.34px] h-[129px] text-xl font-inter font-medium">
        {comment}
      </div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
        <div className="w-[78px] h-[78px] border-solid border-2 rounded-full border-[#ffffff] bg-[#ffffff] flex justify-center items-center">
          <PiQuotes size={32} color="#1CA8CB" />
        </div>
      </div>
    </div>
  );
}
