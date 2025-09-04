import GalleryImageSrc from "../assets/images/destination-1-1jpg@2x.png";

export default function GalaryImageContainer() {
  return (
    <div className="grid grid-flow-col gap-4 justify-center items-center">
      <div className="flex flex-col">
        <img
          src={GalleryImageSrc}
          alt="gallery"
          className="w-[281.83px] h-[264.34px] rounded-3xl object-cover"
        />
      </div>

      <div className="flex flex-col gap-4">
        <img
          src={GalleryImageSrc}
          alt="gallery"
          className="w-[281.83px] h-[218.39px] rounded-3xl object-cover"
        />
        <img
          src={GalleryImageSrc}
          alt="gallery"
          className="w-[281.83px] h-[218.39px] rounded-3xl object-cover"
        />
      </div>

      <img
        src={GalleryImageSrc}
        alt="gallery"
        className="w-[281.83px] h-[455.17px] rounded-3xl object-cover"
      />

      <div className="flex flex-col gap-4">
        <img
          src={GalleryImageSrc}
          alt="gallery"
          className="w-[281.83px] h-[218.39px] rounded-3xl object-cover"
        />
        <img
          src={GalleryImageSrc}
          alt="gallery"
          className="w-[281.83px] h-[218.39px] rounded-3xl object-cover"
        />
      </div>

      <div className="flex flex-col">
        <img
          src={GalleryImageSrc}
          alt="gallery"
          className="w-[281.83px] h-[264.34px] rounded-3xl object-cover"
        />
      </div>
    </div>
  );
}
