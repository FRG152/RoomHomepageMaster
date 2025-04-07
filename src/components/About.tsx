import AboutDark from "../../public/images/image-about-dark.jpg";
import AboutLight from "../../public/images/image-about-light.jpg";

const About = () => {
  return (
    <div className="grid grid-cols-1 grid-rows-3 lg:grid-cols-4 lg:grid-rows-[30vh]">
      <img alt="image" src={AboutDark} className="about-dark-img" />
      <div className="about-desc">
        <h1 className="text-2xl text-black font-bold tracking-[0.50rem] mb-4">
          ABOUT OUR FURNITURE
        </h1>
        <p className="text-gray-400 text-lg">
          Our multifunctional collection blends design and function to suit your
          individual taste. Make each room unique, or pick a cohesive theme that
          best express your interests and what inspires you. Find the furniture
          pieces you need, from traditional to contemporary styles or anything
          in between. Product specialists are available to help you create your
          dream space.
        </p>
      </div>
      <img alt="image" src={AboutLight} className="about-light-img" />
    </div>
  );
};

export default About;
