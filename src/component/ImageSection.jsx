import ThailandImg from "../assets/images/destination-1-1jpg@2x.png";

export default function ImageSection() {
  return (
    <div className="grid grid-cols-2 gap-6 w-full max-w-[636px]">
      <div className="row-span-2">
        <img
          className="rounded-t-[156px] rounded-bl-[156px] w-[312px] h-[630px] object-cover"
          alt="big-left"
          src={ThailandImg}
        />
      </div>

      <div>
        <img
          className="rounded-t-[156px] rounded-br-[156px] w-[312px] h-[315px] object-cover"
          alt="top-right"
          src={ThailandImg}
        />
      </div>

      <div>
        <img
          className="rounded-b-[156px] rounded-tl-[156px] w-[312px] h-[315px] object-cover"
          alt="bottom-right"
          src={ThailandImg}
        />
      </div>
    </div>
  );
}
