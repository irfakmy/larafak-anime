import React from "react";
import icon from "../../assets/arrow-right-circle.svg";
const HeroSection = () => {
  return (
    
    <main className="px-10 py-18 md:py-20 md:px-30 flex flex-col bg-gray-100 md:h-120 ">
      {/* Container with two columns*/}
      <section className="flex flex-col md:flex-row">
        {/* First col */}
        <div className="md:w-1/2">
          <h1 className="text-5xl font-bold text-white-500 leading-tight">
            Nonton anime gratis 
          </h1>
          <p className="py-5 text-2xl text-gray-500">
            top search: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, fuga!...
          </p>
          <button className="bg-slate-700 hover:bg-slate-500 text-white flex font-bold py-3 px-6 rounded">
            View Full Site<img src={icon} alt="" className="ml-2" />
          </button>
        </div>
        {/* Second col */}
        <div className="md:w-1/2"></div>
      </section>
    </main>
  );
};

export default HeroSection;
