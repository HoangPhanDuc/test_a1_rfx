import TextSection from "./TextSection";
import TextDescription from "./TextDescription";

export default function TextDestination({ icon, title, content }) {
  return (
    <div className="flex mt-5">
      <div className="rounded-full bg-[#1CA8CB] w-[72px] h-[72px] flex justify-center items-center">
        {icon}
      </div>
      <div className="ms-5">
        <div>
          <TextSection title={title} color={"#113D48"} fontSizeTitle={24} />
        </div>
        <div className="mt-2">
          <TextDescription color="#6E7070" content={content} size="16px" />
        </div>
      </div>
    </div>
  );
}
