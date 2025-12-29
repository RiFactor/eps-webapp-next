"use client";
import { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const photoGallery = [
  {
    id: 1,
    src: "assets/images/cat.jpg",
    alt: "cat",
    quote: "",
  },
  {
    id: 2,
    src: "assets/images/dog.jpg",
    alt: "dog",
    quote: "",
  },
  {
    id: 3,
    src: "assets/images/dog2.jpg",
    alt: "dog",
    quote: "",
  },
  {
    id: 4,
    src: "assets/images/koala.jpg",
    alt: "koala",
    quote: "",
  },
  //   {
  //     id: 5,
  //     src: "assets/images/photo5.jpg",
  //     alt: "",
  //     quote: ""
  //   },
  //   {
  //     id: 6,
  //     src: "assets/images/photo6.jpg",
  //     alt: "",
  //     quote: "",
  //   },
];
// END OF COPY

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
        <div
          key={photoGallery[imageIndex.prev].id}
          // or add 'card' in classname style
          // fix height / size?! h-96 is ok
          className="flex flex-col items-center rounded justify-center bg-blue-200 carousel-image"
        >
          <img
            src={photoGallery[imageIndex.prev].src}
            alt={photoGallery[imageIndex.prev].alt}
            // look at responsive cropping photo...
            className="flex h-80 items-center bg-red-200 p-5 transition ease-in-out delay-300 motion-reduce:transition-none"
            // w-20 h-20
            // fixed md:top-0 md:right-0
          ></img>
          <p className="flex p-5 rounded card">
            {photoGallery[imageIndex.prev].alt}
          </p>
        </div>
        <div
          key={photoGallery[imageIndex.current].id}
          // or add 'card' in classname style
          // fix height / size?! h-96 is ok
          className="flex flex-col items-center rounded justify-center bg-blue-200 carousel-image"
        >
          <img
            src={photoGallery[imageIndex.current].src}
            alt={photoGallery[imageIndex.current].alt}
            // look at responsive cropping photo...
            className="flex h-80 items-center bg-red-200 p-5 transition ease-in-out delay-300 motion-reduce:transition-none"
            // w-20 h-20
            // fixed md:top-0 md:right-0
          ></img>
          <p className="flex p-5 rounded card">
            {photoGallery[imageIndex.current].alt}
          </p>
        </div>
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
