"use client";
import { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { photoGallery } from "./images";
import CarouselImage from "./image";

export default function ImageCarousel() {
  const [imageIndex, setImageIndex] = useState({
    prev: photoGallery.length - 1,
    current: 0,
    next: 1,
  });

  console.log(imageIndex, "page load");

  const handlePrevImage = () => {
    // console.log(photoGallery.length); // e.g. length 6 but index 5
    console.log(imageIndex);
    // but if it is end of list then start again? and check length?? so minus -1
    // setImageIndex(imageIndex == photoGallery.length - 1 ? 0 : imageIndex - 1);
    console.log(imageIndex, "old");
    // PREVIOUS SO MINUS 1
    const newIndex = { ...imageIndex };
    newIndex.current =
      imageIndex.current == 0
        ? photoGallery.length - 1
        : imageIndex.current - 1;

    newIndex.prev =
      imageIndex.prev == 0 ? photoGallery.length - 1 : imageIndex.prev - 1;

    newIndex.next =
      imageIndex.next == 0 ? photoGallery.length - 1 : imageIndex.next - 1;
    setImageIndex({ ...newIndex });

    // newIndex.current =
    //   imageIndex.current == 0
    //     ? photoGallery.length - 1
    //     : imageIndex.current - 1;
    // setImageIndex({ ...newIndex });
    console.log(imageIndex, "new");
  };
  const handleNextImage = () => {
    console.log("next");
  };
  return (
    <div className="flex flex-col h-9/10 w-full bg-green-300 carousel">
      <div className="flex flex-row">
        <CarouselImage index={imageIndex.prev} />
        <CarouselImage index={imageIndex.current} />
        {/* <CarouselImage index={imageIndex.next} /> */}
      </div>
      {/* fixed bottom-0 */}
      <div className="flex flex-row gap-5 bg-amber-400 mb-20 justify-between w-full">
        {/* make it bigger */}
        <button
          onClick={() => {
            handlePrevImage();
          }}
        >
          {/* style as arrows with alt text */}
          <IoIosArrowBack />
        </button>
        <button onClick={() => handleNextImage()}>
          <IoIosArrowForward />
        </button>
      </div>
    </div>
  );
}
