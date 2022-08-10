import { useState } from "react";
import Header from "../components/Header";
import SearchForm from "../components/SearchForm";
import SongsList from "../components/SongsList";
import Loading from "../components/Loading";

function App() {
  const [songs, setSongs] = useState([]);
  const [loading, setLoading] = useState(false);

  let api_url = `https://genius.p.rapidapi.com/search?q=`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": `${process.env.REACT_APP_API_KEY}`,
      "X-RapidAPI-Host": "genius.p.rapidapi.com",
    },
  };

  const getSongs = async (artist) => {
    api_url = `https://genius.p.rapidapi.com/search?q=${artist}`;

    try {
      const response = await fetch(api_url, options);
      const data = await response.json();
      setSongs(data.response.hits);
    } catch (error) {
      console.error("Error", error);
    }
  };

  const search = async (value) => {
    setLoading(true);
    // eslint-disable-next-line
    const content = await getSongs(value);
    setLoading(false);
  };

  return (
    <div className="App">
      <Header />
      <SearchForm onSearch={search} />
      {loading ? <Loading /> : <Songs songs={songs} />}
    </div>
  );
}

export default App;
