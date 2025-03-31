import { useState } from "react";
import { SwiperButton } from "./SwiperButton";

const Hero = () => {
  const [swiper, setSwiper] = useState(1);

  const handleLeft = () => {
    if (swiper !== 3) {
      setSwiper((prev) => prev + 1);
    }
    setSwiper(1);
  };
  const handleRight = () => {
    if (swiper < 1) {
      setSwiper((prev) => prev - 1);
    }
  };

  return (
    <div className="w-full relative">
      <img
        src={`/images/mobile-image-hero-${swiper}.jpg`}
        alt={"Hero image"}
        className="w-full object-cover bg-red-500 absolute top-0 lef-0 right-0 bottom-0 z-10"
      />
      <SwiperButton eventLeft={handleLeft} eventRight={handleRight} />
    </div>
  );
};

export default Hero;
