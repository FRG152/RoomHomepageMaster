import IconArrow from "../../public/images/icon-arrow.svg";
import { SwiperButton } from "./SwiperButton";
import { useGlobalContext } from "../context";

const lists: { title: string; desc: string }[] = [
  {
    title: "Discover innovative \n ways to decorate",
    desc: `We provide unmatched quality, comfort, and style for property owners across the country. 
  Our experts combine form and function in bringing your vision to life. Create a room in your 
  own style with our collection and make your property a reflection of you and what you love.`,
  },
  {
    title: "We are available all across the globe",
    desc: `With stores all over the world, it's easy for you to find furniture for your home or place of business. 
  Locally, we’re in most major cities throughout the country. Find the branch nearest you using our 
  store locator. Any questions? Don't hesitate to contact us today.`,
  },
  {
    title: "Manufactured with the best materials",
    desc: `Our modern furniture store provide a high level of quality. Our company has invested in advanced technology 
  to ensure that every product is made as perfect and as consistent as possible. With three decades of 
  experience in this industry, we understand what customers want for their home and office.`,
  },
];

const Shop = ({ styles }: { styles?: string }) => {
  const { swiper } = useGlobalContext();

  return (
    <div className={`${styles} relative p-5 md:p-10`}>
      <h1 className="text-6xl font-bold mb-5">{lists[swiper - 1]?.title}</h1>
      <p className="text-gray-400 text-lg">{lists[swiper - 1]?.desc}</p>
      <button
        type="button"
        className="flex text-2xl font-bold items-center cursor-pointer tracking-[1rem] transition-all gap-10 mt-5 hover:opacity-[0.5]"
      >
        <p>SHOP NOW</p>
        <img src={IconArrow} alt="icon" width={60} />
      </button>
      <SwiperButton styles="left-0 bottom-0 absolute hidden lg:flex" />
    </div>
  );
};

export default Shop;
