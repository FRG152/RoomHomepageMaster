import { useGlobalContext } from "../context";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const { size, setSize } = useGlobalContext();

  useEffect(() => {
    setSize(window.innerWidth);
  }, []);

  return (
    <nav className="w-full absolute top-0 left-0 z-50">
      <div className="h-[60px] flex items-center justify-between lg:justify-start p-5">
        <button
          type="button"
          onClick={() => {
            setShow(!show);
            console.log("ddd");
          }}
          className="lg:hidden cursor-pointer"
        >
          <img src={"/images/icon-hamburger.svg"} alt="icon" />
        </button>
        <h1 className="w-full text-5xl text-white text-center lg:mr-20 lg:w-auto lg:text-left">
          room
        </h1>
        <div className="hidden lg:flex">
          <ul className="flex items-center gap-10">
            <li>
              <a
                href="#home"
                className="text-lg text-white border-b-2 border-transparent transition-all hover:border-white"
              >
                home
              </a>
            </li>
            <li>
              <a
                href="#shop"
                className="text-lg text-white border-b-2 border-transparent transition-all hover:border-white"
              >
                shop
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="text-lg text-white border-b-2 border-transparent transition-all hover:border-white"
              >
                about
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-lg text-white border-b-2 border-transparent transition-all hover:border-white"
              >
                contact
              </a>
            </li>
          </ul>
        </div>
      </div>
      {size < 1024 && (
        <div
          className={`h-[60px] w-full flex flex-wrap justify-between top-0 ${
            show ? "left-0" : "-left-1000"
          } absolute bg-white transition-all p-5`}
        >
          <button
            type="button"
            onClick={() => setShow(!show)}
            className="lg:hidden cursor-pointer"
          >
            <img src={"/images/icon-close.svg"} alt="icon" />
          </button>
          <ul className="ml-10 flex gap-10">
            <li>
              <a href="#home" className="font-bold text-black">
                home
              </a>
            </li>
            <li>
              <a href="#shop" className="font-bold text-black">
                shop
              </a>
            </li>
            <li>
              <a href="#about" className="font-bold text-black">
                about
              </a>
            </li>
            <li>
              <a href="#contact" className="font-bold text-black">
                contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
