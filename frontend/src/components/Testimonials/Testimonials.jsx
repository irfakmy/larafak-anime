import React from "react";
import defaultImage from "../../assets/img/larafak-new.png";

const testimonialBox = (name, position, content, img) => {
  return (
    <div className="flex my-5 mx-5 gap-5 p-8 md:w-150 md:flex-row md:items-center md:py-4 md:m-5 text-black shadow-xl ring-gray-900/5  bg-gray-900 text-black rounded-lg">
      <img
        className="mx-auto block h-24 rounded-full sm:mx-0 sm:shrink-0"
        src={img}
        alt=""
      />
      <div className="space-y-2 text-center sm:text-left">
        <div className="space-y-0.5">
          <p className="text-lg font-semibold text-white">{name}</p>
          <p className="font-medium text-gray-500">{position}</p>
        </div>
        <p className="text-slate-600 italic">{content}</p>
      </div>
    </div>
  );
};

const Testimonials = () => {
  return (
    <main className="flex flex-col items-center py-20 bg-gray-900">
      <h1 className="text-4xl font-bold mb-10 text-white">LaraFak.com - the best site to watch anime for free</h1>
      <div className="flex justify-center grid grid-cols-1 md:grid-cols-2 place-items-center text" >
        {/* Testimonial 1 */}
        {testimonialBox(
          "What is LaraFak.com?",
          "LaraFak.com",
          " is a free site to watch anime and you can even download subbed or dubbed anime in ultra HD quality without any registration or payment. By having only one ads in all kinds, we are trying to make it the safest site for free anime.",
          defaultImage
        )}
        {testimonialBox(
          "Is LaraFak.com to safe?",
          "LaraFak.com",
          "Yes, we only have one Ad to cover server costs and we continuously scan ads 24/7 to make sure they are clean, If you find any suspicious ads, please forward the info to us and we will remove them for the convenience of other users.",
        )}
      </div>
    </main>
  );
};

export default Testimonials;
