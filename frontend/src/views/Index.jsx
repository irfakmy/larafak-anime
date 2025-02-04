import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import icon from "../assets/arrow-right-white.svg";
import axios from "axios";

const Index = () => {
  const [animes, setAnimes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/animes") 
      .then((response) => {
        console.log(response.data);
        setAnimes(response.data.data ? response.data.data.slice(0, 24) : []);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, []);

  return (
    <div className="bg-gray-900 min-h-screen p-10 text-white">
  <div className="flex items-center justify-between mb-5">
    <h1 className="text-3xl font-bold">Popular Anime</h1>
    <button
      onClick={() => navigate("/")}
      className="bg-gray-900 hover:bg-slate-700 text-white flex font-bold py-3 px-6 rounded"
    >
      Back to home<img src={icon} alt="" className="ml-2" />
    </button>
  </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {animes.length > 0 ? (
          animes.map((anime) => (
            <div
              key={anime.mal_id}
              className="bg-gray-800 p-4 rounded-lg cursor-pointer hover:bg-gray-700 transition"
              onClick={() => navigate(`/anime/${anime.mal_id}`)}
            >
              <img
                src={anime.images.jpg.image_url}
                alt={anime.title}
                className="w-full h-40 object-cover rounded-md"
              />
              <h2 className="mt-2 text-lg font-semibold">{anime.title}</h2>
              <p className="mt-2 text-sm">Rating: {anime.rating || "Not Available"}</p>
              <p className="mt-2 text-sm">
                {anime.synopsis ? anime.synopsis.slice(0, 100) + "..." : "No description available"}
              </p>
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default Index;
