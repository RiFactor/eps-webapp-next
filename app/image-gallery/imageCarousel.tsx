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
  };

  const handleNextImage = () => {
    console.log(imageIndex, "old");
    const newIndex = { ...imageIndex };
    newIndex.current =
      imageIndex.current == photoGallery.length - 1
        ? 0
        : imageIndex.current + 1;

    newIndex.prev =
      imageIndex.prev == photoGallery.length - 1 ? 0 : imageIndex.prev + 1;

    newIndex.next =
      imageIndex.next == photoGallery.length - 1 ? 0 : imageIndex.next + 1;
    setImageIndex({ ...newIndex });

    console.log(imageIndex, "new");
  };
  return (
    // <div className="flex flex-col h-9/10 w-full bg-green-300 carousel">
    <div className="flex flex-col gap-5 pt-5 bg-amber-200">
      <div className="flex flex-row">
        <CarouselImage index={imageIndex.prev} />
        <CarouselImage index={imageIndex.current} status="current" />
        {/* update w/ next */}
        <CarouselImage index={imageIndex.next} />
        {/* <CarouselImage index={imageIndex.next} /> */}
      </div>
      {/* fixed bottom-0 */}
      <div className="flex flex-row justify-between">
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
