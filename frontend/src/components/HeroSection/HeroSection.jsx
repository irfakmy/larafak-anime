import { useNavigate } from "react-router-dom"; 
import icon from "../../assets/arrow-right-white.svg";
import heroImage from "../../assets/img/hero-section.jpg";
import axios from "axios";
import React, { useState, useEffect } from "react";

const HeroSection = () => {
  const [animes, setAnimes] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/animes")
      .then((response) => {
        console.log(response.data);
        setAnimes(response.data.data.slice(0, 1));
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, []);
  
  

  return (
    <div className="bg-gray-900">
      <main
        className="relative px-10 py-18 md:py-20 md:px-30 flex flex-col md:h-120 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900"></div>
        {animes.length > 0 ? (
          animes.map((anime) => (
            <section key={anime.mal_id} className="relative flex flex-col md:flex-row text-white">
              <div className="md:w-1/2">
                <button
                  onClick={() => navigate("/popular")}
                  className="bg-gray-900 hover:bg-slate-700 text-white flex font-bold py-3 px-6 rounded mt-30"
                >
                  View Full Site <img src={icon} alt="" className="ml-2" />
                </button>
              </div>
            </section>
          ))
        ) : (
          <p className="text-white text-center">Loading...</p>
        )}
      </main>
    </div>
  );
};

export default HeroSection;
