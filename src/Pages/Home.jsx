import { useState, useEffect } from "react";
import SongForHome from "../components/SongForHome";
import Header from "../components/Header";

const Home = () => {
  const [songs, setSongs] = useState([]);

  let temp_songs = [];
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": `${process.env.REACT_APP_API_KEY}`,
      "X-RapidAPI-Host": "genius.p.rapidapi.com",
    },
  };

  useEffect(() => {
    async function fetchSongs(song_id) {
      try {
        let api_url = `https://genius.p.rapidapi.com/songs/${song_id}`;
        const response = await fetch(api_url, options);
        const data = await response.json();
        temp_songs = [...temp_songs, data.response.song];
      } catch (error) {
        console.log(error);
      }
      setSongs(temp_songs);
    }
    for (let i = 0; i < 20; i++) {
      let rand_num = Math.floor(Math.random() * 1000 + 1);
      fetchSongs(rand_num);
    }
  }, []);

  return (
    <>
      <Header />
      <div>
        <h1 m-4 mb-7>
          Home Page
        </h1>
        <ul className="list-group list-group-flush">
          {songs.map((song) => {
            return <SongForHome key={song.id} song={song} />;
          })}
        </ul>
        )
      </div>
    </>
  );
};

export default Home;
