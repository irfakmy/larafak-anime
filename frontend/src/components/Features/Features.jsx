import React, { useState, useEffect } from "react";
import axios from "axios";
import defaultImage from "../../assets/img/default-img.png";

const Features = () => {
  const [animes, setAnimes] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/animes")
      .then((response) => {
        console.log(response.data);
        setAnimes(response.data.slice(0, 9));
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, []);

  return (
    <main className="flex justify-center flex-col py-20 items-center bg-gray-900 min-h-screen border-t-2 border-white">
      {/* <h1 className="text-4xl font-bold mb-10 text-white">Top Rating Anime</h1> */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {animes.length > 0 ? (
          animes.map((anime) => (
            <div
              key={anime.mal_id}
              className="bg-gray-800 text-white p-5 rounded-lg shadow-lg text-center w-72"
            >
              <img
                src={anime.images.jpg.image_url}
                className="h-60 w-full object-cover rounded-lg"
                alt={anime.title}
                onError={(e) => (e.target.src = defaultImage)}
              />
              <h3 className="font-bold text-xl mt-3">{anime.title}</h3>
            </div>
          ))
        ) : (
          <p className="text-white text-center">Loading...</p>
        )}
      </div>
    </main>
  );
};

export default Features;
