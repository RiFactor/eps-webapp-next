import { photoGallery } from "./images";

interface IProps {
  index: number;
}

export default function CarouselImage({ index }: IProps) {
  return (
    <div
      key={photoGallery[index]?.id}
      // or add 'card' in classname style
      // fix height / size?! h-96 is ok
      className="flex flex-col items-center rounded justify-center bg-blue-200 carousel-image"
    >
      <img
        src={photoGallery[index]?.src}
        alt={photoGallery[index]?.alt}
        // look at responsive cropping photo...
        className="flex h-80 items-center bg-red-200 p-5 transition ease-in-out delay-300 motion-reduce:transition-none"
        // w-20 h-20
        // fixed md:top-0 md:right-0
      ></img>
      <p className="flex p-5 rounded card">{photoGallery[index]?.alt}</p>
    </div>
  );
}
