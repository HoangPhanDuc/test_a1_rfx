import { HiOutlineArrowRight } from "react-icons/hi";

export default function Button(props) {
  return (
    <>
      <div>
        <button
          style={{
            backgroundColor: props.bgColor,
            width: `${props.w}px`,
            height: `${props.h}px`,
            color: props.color,
            border: `1px solid ${props.borderColor}`,
          }}
          className="flex items-center justify-center font-inter gap-2 rounded-[48px] hover:opacity-90 cursor-pointer transition"
        >
          {props.content}
          <HiOutlineArrowRight />
        </button>
      </div>
    </>
  );
}
