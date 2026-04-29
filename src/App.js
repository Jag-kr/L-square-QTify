import { useState, useEffect } from "react";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Section from "./components/Section/Section";
import axios from "axios";

function App() {
  const [topAlbums, setTopAlbums] = useState([]);

  console.log("topAlbums:", topAlbums);

  const fetchData = async () => {
    try {
      const res = await axios.get(
        "https://qtify-backend.labs.crio.do/albums/top",
      );
      setTopAlbums(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Navbar searchData={topAlbums} />
      <Hero />

      <Section
        title="Top Albums"
        endpoint="https://qtify-backend.labs.crio.do/albums/top"
      />

      <Section
        title="New Albums"
        endpoint="https://qtify-backend.labs.crio.do/albums/new"
      />
    </div>
  );
}

export default App;
