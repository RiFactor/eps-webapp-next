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
  const [imageIndex, setImageIndex] = useState(0);

  const handlePrevImage = () => {
    // console.log(photoGallery.length); // e.g. length 6 but index 5
    console.log(imageIndex);
    // but if it is end of list then start again? and check length?? so minus -1
    // setImageIndex(imageIndex == photoGallery.length - 1 ? 0 : imageIndex - 1);
    setImageIndex(imageIndex == 0 ? photoGallery.length - 1 : imageIndex - 1);
    console.log(imageIndex);
  };
  const handleNextImage = () => {
    console.log("next");
  };
  return (
    <div>
      <div
        key={photoGallery[imageIndex].id}
        // or add 'card' in classname style
        // fix height / size?!
        className="flex flex-col gap-5 items-center rounded h-96 justify-center bg-blue-200"
      >
        <img
          src={photoGallery[imageIndex].src}
          alt={photoGallery[imageIndex].alt}
          className="flex h-80 items-center bg-red-200 p-5"
          // w-20 h-20
          // fixed md:top-0 md:right-0
        ></img>
        <p className="flex p-5 rounded card">
          {photoGallery[imageIndex].quote}
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-5 fixed bottom-0 bg-amber-400 mb-20">
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
