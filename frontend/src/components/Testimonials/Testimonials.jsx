import React from "react";
import defaultImage from "../../assets/default-img.png";

const testimonialBox = (name, position, content, img) => {
  return (
    <div class="flex my-5 mx-5 gap-5 p-8 md:w-150 md:flex-row md:items-center md:py-4 md:m-5 text-black shadow-xl ring-gray-900/5 border-1 border-gray-300 bg-white text-black rounded-lg">
      <img
        class="mx-auto block h-24 rounded-full sm:mx-0 sm:shrink-0"
        src={img}
        alt=""
      />
      <div class="space-y-2 text-center sm:text-left">
        <div class="space-y-0.5">
          <p class="text-lg font-semibold text-black">{name}</p>
          <p class="font-medium text-gray-500">{position}</p>
        </div>
        <p className="text-slate-600 italic">{content}</p>
      </div>
    </div>
  );
};

const Testimonials = () => {
  return (
    <main className="flex flex-col items-center py-20">
      <h1 className="text-4xl font-bold mb-10 text-slatte-500">Trending Post</h1>
      <div className="flex justify-center grid grid-cols-1 md:grid-cols-2 place-items-center text" >
        {/* Testimonial 1 */}
        {testimonialBox(
          "Customer N°1",
          "Position 1",
          "I love the product/service that you provide. Definitely solves our pain points. It's awesome!",
          defaultImage
        )}

        {/* Testimonial 2 */}
        {testimonialBox(
          "Customer N°2",
          "Position",
          "Your product/service is a game changer. It has helped us a lot. I would recommend it to everyone.",
          defaultImage
        )}

        {/* Testimonial 3 */}
        {testimonialBox(
          "Customer N°3",
          "Position",
          "Appreciate the willingness to help and prompt responses. Keep up the good work!",
          defaultImage
        )}

        {/* Testimonial 4 */}
        {testimonialBox(
          "Customer N°4",
          "Position",
          "I wasn't sure at first, but I'm glad I tried it out. It's really great. I'm happy with the results.",
          defaultImage
        )}
      </div>
    </main>
  );
};

export default Testimonials;
