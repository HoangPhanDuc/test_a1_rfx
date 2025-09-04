import React from "react";
import image1 from "../assets/images/group--7--16@2x.png";
import image2 from "../assets/images/group--9--16@2x.png";
import image3 from "../assets/images/group--6--16@2x.png";
import image4 from "../assets/images/group--5--16@2x.png";
import image5 from "../assets/images/group--8--16@2x.png";
import BrandImage from "./BrandImage";

export default function Brand() {
  return (
    <div className="w-[1776px] h-[150px] flex justify-around">
      <BrandImage image={image1} />
      <BrandImage image={image2} />
      <BrandImage image={image3} />
      <BrandImage image={image4} />
      <BrandImage image={image3} />
      <BrandImage image={image1} />
      <BrandImage image={image5} />
      <BrandImage image={image2} />
    </div>
  );
}
