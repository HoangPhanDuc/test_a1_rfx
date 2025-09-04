import { RxDividerVertical } from "react-icons/rx";
import Button from "./Button";

export default function NewArticalCard({ date, minute, content, image }) {
  return (
    <div className="w-[424px] h-full flex flex-col">
      <div className="w-full h-[350.3px] rounded-2xl">
        <img
          className="w-full h-full rounded-2xl object-cover"
          src={image}
          alt="img"
        />
      </div>
      <div className="flex-1 flex flex-col pt-6">
        <div className="font-inter text-[#6E7070] flex items-center space-x-2 text-[14px]">
          <span>{date}</span>
          <span>
            <RxDividerVertical />
          </span>
          <span>{minute}</span>
        </div>
        <div className="mt-4 font-semibold font-inter text-2xl text-[#113D48]">
          {content}
        </div>
        <div className="mt-auto pt-4">
          <Button
            w={157.97}
            h={48}
            bgColor={""}
            borderColor={"#113D48"}
            color={"#113D48"}
            content="Read More"
          />
        </div>
      </div>
    </div>
  );
}
