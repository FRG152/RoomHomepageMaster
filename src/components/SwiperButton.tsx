import { useGlobalContext } from "../context";

interface SwiperButtonProps {
  styles?: string;
}

export const SwiperButton = ({ styles }: SwiperButtonProps) => {
  const { swiper, setSwiper } = useGlobalContext();

  const handleRight = () => {
    if (swiper !== 3) {
      setSwiper(swiper + 1);
    } else {
      setSwiper(1);
    }
  };
  const handleLeft = () => {
    if (swiper > 1) setSwiper(swiper - 1);
    if (swiper === 1) setSwiper(3);
  };

  return (
    <div className={`w-[150px] h-[60px] flex items-center z-50 ${styles}`}>
      <button
        type="button"
        onClick={() => handleLeft()}
        className="w-full h-full flex bg-black items-center justify-center cursor-pointer transition-all hover:opacity-[0.7]"
      >
        <img alt="icon" src={"/images/icon-angle-left.svg"} />
      </button>
      <button
        type="button"
        onClick={() => handleRight()}
        className="w-full h-full flex bg-black items-center justify-center cursor-pointer transition-all hover:opacity-[0.7]"
      >
        <img alt="icon" src={"/images/icon-angle-right.svg"} />
      </button>
    </div>
  );
};
