import Image from "next/image";
import ImageCarousel from "./image-gallery/imageCarousel";

export default function HomePage() {
  return (
    <>
      <main>
        <h1 className="flex justify-center">template page</h1>
        <ImageCarousel />
      </main>
    </>
  );
}
