import { photoGallery } from "./images";

interface IProps {
  index: number;
  classname?: string;
  status?: "prev" | "current" | "next";
}

export default function CarouselImage({ index, status }: IProps) {
  return (
    // if "prev" or "current" then just hide the images on small screens
    <div
      key={photoGallery[index]?.id}
      // or add 'card' in classname style
      // fix height / size?! h-96 is ok
      //   className="flex flex-col items-center rounded justify-center bg-blue-200 carousel-image"
      //   ${status === "current" && }
      className="flex flex-col w-1/3 justify-between" // add gap
      //   transition: transform 0.5s ease-in-out;
    >
      <img
        src={photoGallery[index]?.src}
        alt={photoGallery[index]?.alt}
        // look at responsive cropping photo...
        // className="flex h-80 items-center bg-red-200 p-5 transition ease-in-out delay-300 motion-reduce:transition-none"
        // className="flex w-100% h-auto rounded"
        className={`flex object-contain  ${
          status === "current" ? "h-80" : "h-50"
        }`} // make it rounded
        // className={`${!status && "opacity-50"} "flex object-contain h-80"`}
        // w-20 h-20
        // fixed md:top-0 md:right-0
      ></img>
      {/* <p className="flex justify-center">
        {photoGallery[index]?.alt} {photoGallery[index].id}
      </p> */}
    </div>
  );
}
