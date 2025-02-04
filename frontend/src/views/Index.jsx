import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Index = () => {
  const [animes, setAnimes] = useState([]);
  const navigate = useNavigate(); // Untuk navigasi

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/animes") // Mendapatkan data anime dari API Laravel
      .then((response) => {
        console.log(response.data); // Cek struktur data
        setAnimes(response.data.data ? response.data.data.slice(0, 24) : []);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, []);

  return (
    <div className="bg-gray-900 min-h-screen p-10 text-white">
      <h1 className="text-3xl font-bold mb-5">Popular Anime</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {animes.length > 0 ? (
          animes.map((anime) => (
            <div
              key={anime.mal_id}
              className="bg-gray-800 p-4 rounded-lg cursor-pointer hover:bg-gray-700 transition"
              onClick={() => navigate(`/anime/${anime.mal_id}`)} // Navigasi ke DetailAnime.jsx
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
