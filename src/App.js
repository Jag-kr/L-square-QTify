import { useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Section from "./components/Section/Section";
import axios from "axios";

function App() {
  const [topAlbums, setTopAlbums] = useState([]);
  const [newAlbums, setNewAlbums] = useState([]);
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [topRes, newRes, songsRes] = await Promise.all([
          axios.get("https://qtify-backend.labs.crio.do/albums/top"),
          axios.get("https://qtify-backend.labs.crio.do/albums/new"),
          axios.get("https://qtify-backend.labs.crio.do/songs"),
        ]);

        setTopAlbums(topRes.data);
        setNewAlbums(newRes.data);
        setSongs(songsRes.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <Navbar searchData={topAlbums} />
      <Hero />

      <Section title="Songs" data={songs} />
      
      <Section title="Top Albums" data={topAlbums} />
      <Section title="New Albums" data={newAlbums} />
    </div>
  );
}

export default App;
