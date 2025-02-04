import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const DetailAnime = () => {
  const { id } = useParams();
  const [anime, setAnime] = useState(null);
  const [videos, setVideos] = useState([]);
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api/anime/${id}`)
      .then((response) => {
        console.log("API response: ", response.data);
        setAnime(response.data.anime);
        setVideos(response.data.videos);
        setEpisodes(response.data.episodes || []);
      })
      .catch((error) => {
        console.error("Error fetching anime details: ", error);
      });
  }, [id]);

  if (!anime) return <p>Loading...</p>;


  const sortedEpisodes = [...episodes].sort((a, b) => a.number - b.number);

  return (
    <div className="bg-gray-900 min-h-screen p-10 text-white">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold">{anime.title}</h1>
        <img
          src={anime.images.jpg.image_url}
          alt={anime.title}
          className="w-full h-80 object-cover rounded-lg my-4"
        />
        <p className="text-lg">{anime.synopsis}</p>

        <h2 className="text-2xl font-bold mt-6">Videos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          {videos.length > 0 ? (
            videos.map((video, index) => (
              <div key={index} className="bg-gray-800 p-4 rounded-lg">
                <h3 className="text-lg font-semibold">{video.title}</h3>
                <iframe
                  width="100%"
                  height="200"
                  src={video.trailer.embed_url}
                  title={video.title}
                  frameBorder="0"
                  allowFullScreen
                  className="rounded-lg"
                ></iframe>
              </div>
            ))
          ) : (
            <p>No videos available</p>
          )}
        </div>

        <h2 className="text-2xl font-bold mt-6">Episodes</h2>
        {Array.isArray(sortedEpisodes) && sortedEpisodes.length > 0 ? (
          <div className="mt-4">
            {sortedEpisodes.map((episode, index) => (
              <div key={index} className="bg-gray-800 p-4 rounded-lg my-2">
                <h3 className="text-lg font-semibold">
                  Episode {episode.number}: {episode.title || "No title available"}
                </h3>
                <p>{episode.synopsis || "No synopsis available"}</p>
              </div>
            ))}
          </div>
        ) : (
          <p>No episodes available</p>
        )}
      </div>
    </div>
  );
};

export default DetailAnime;
