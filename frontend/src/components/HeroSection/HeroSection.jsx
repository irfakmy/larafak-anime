import React from "react";
import icon from "../../assets/arrow-right-circle.svg";
import heroImage from "../../assets/img/hero-section.jpg";

const HeroSection = () => {
  return (
    
<main
  className="relative px-10 py-18 md:py-20 md:px-30 flex flex-col md:h-120 bg-cover bg-center bg-no-repeat"
  style={{ backgroundImage: `url(${heroImage})` }}
>
  {/* Overlay Gradient */}
  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900"></div>

  {/* Konten di atas overlay */}
  <section className="relative flex flex-col md:flex-row text-white">
    <div className="md:w-1/2">
      <h1 className="text-5xl font-bold">Nonton anime gratis</h1>
      <p className="py-5 text-2xl text-gray-300">
        Top search: Lorem ipsum dolor sit amet...
      </p>
      <button className="bg-slate-700 hover:bg-slate-500 text-white flex font-bold py-3 px-6 rounded">
        View Full Site <img src={icon} alt="" className="ml-2"/>
      </button>
    </div>
  </section>
</main>


  );
};

export default HeroSection;
