import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import icon from "../../assets/arrow-right-white.svg";

const GenreList = () => {
  const navigate = useNavigate();
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/anime/genres")
      .then((response) => {
        console.log("API response: ", response.data);
        setGenres(response.data.genres || []);
      })
      .catch((error) => {
        console.error("Error fetching genre details: ", error);
      });
  }, []);

  return (
    <div className="bg-gray-900 min-h-screen p-10 text-white">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Daftar Genre</h1>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {genres.length > 0 ? (
            genres.map((genre) => (
              <div key={genre.mal_id} className="bg-gray-800 p-4 rounded-lg">
                <h3 className="text-lg font-semibold">{genre.name}</h3>
              </div>
            ))
          ) : (
            <p>No Genre available</p>
          )}
        </div>
        <button
          onClick={() => navigate("/")}
          className="mt-6 bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded flex items-center"
        >
          Back to Home <img src={icon} alt="" className="ml-2" />
        </button>
      </div>
    </div>
  );
};

export default GenreList;
