import Shop from "./Shop";
import { useEffect } from "react";
import { SwiperButton } from "./SwiperButton";
import { useGlobalContext } from "../context";

const Hero = () => {
  const { size, setSize, swiper } = useGlobalContext();

  useEffect(() => {
    setSize(window.innerWidth);
    const resize = () => {
      window.addEventListener("resize", () => setSize(window.innerWidth));
    };
    resize();
    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div className="grid grid-cols-1 grid-rows-2 lg:grid-cols-3 lg:grid-rows-[70vh]">
      <div
        className={`row-span-1 relative bg-cotain lg:row-span-1 lg:col-start-1 lg:col-end-3`}
      >
        <img
          alt="image"
          src={
            size > 1024
              ? `/images/desktop-image-hero-${swiper}.jpg`
              : `/images/mobile-image-hero-${swiper}.jpg`
          }
          className="w-full h-full object-cover"
        />
        <SwiperButton styles="absolute right-0 bottom-0 lg:hidden" />
      </div>
      <Shop styles="row-span-2 lg:row-span-1 place-content-center" />
    </div>
  );
};

export default Hero;
