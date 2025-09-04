import Button from "./Button";
import TextSection from "./TextSection";
import ImageBanner from "../assets/images/package-tour-can-tho-da-nang-hue-hoi-an-4n3d--pMLc_1849.jpg";

export default function Banner() {
  return (
    <div
      className="relative w-full h-[805.38px] bg-cover bg-top"
      style={{ backgroundImage: `url(${ImageBanner})` }}
    >
      <div className="relative z-10 max-w-5xl mx-auto flex flex-col justify-center h-full">
        <div className="position-absolute top-[206px] left-[300px]">
          <TextSection
            subtitle={"Get unforgetable pleasure with us"}
            title={"Explore beauty of the whole world"}
            color="#FFFFFF"
            fontSizeSubtitle={40}
            fontSizeTitle={80}
          />
        </div>

        <div className="position-absolute top-[480.78px] flex">
          <Button
            w={205.81}
            h={63.6}
            bgColor={"#1CA8CB"}
            borderColor={"#1CA8CB"}
            color={"#FFFFFF"}
            content={"Explore Tours"}
          />
          <span className="ms-4"></span>
          <Button
            w={205.81}
            h={63.6}
            bgColor={""}
            borderColor={"#FFFFFF"}
            color={"#FFFFFF"}
            content={"Our Services"}
          />
        </div>
      </div>
    </div>
  );
}
