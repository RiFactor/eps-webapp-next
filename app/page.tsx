import Image from "next/image";
import ImageCarousel from "./image-gallery/imageCarousel";
import Fade from "./image-gallery/fade";

export default function HomePage() {
  return (
    <>
      <main>
        <h1 className="flex justify-center text-brand-white bg-brand-blue">
          External Pressure Solutions
        </h1>
        <p>
          External Pressure Solutions is dedicated to ensuring that homes and
          businesses are kept pristine in the Dorset and Hampshire area.
        </p>
      </main>
    </>
  );
}
