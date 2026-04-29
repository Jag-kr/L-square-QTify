import { useState, useEffect } from "react";
import Section from "./components/Section/Section";
import SongSection from "./components/SongSection/SongSection";
import Card from "./components/Card/Card";
import {
  fetchTopAlbums,
  fetchNewAlbums,
  fetchSongs,
  fetchGenres,
} from "./api/qtifyApi";

function App() {
  const [topAlbums, setTopAlbums] = useState([]);
  const [newAlbums, setNewAlbums] = useState([]);
  const [songs, setSongs] = useState([]);
  const [genres, setGenres] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      fetchTopAlbums(),
      fetchNewAlbums(),
      fetchSongs(),
      fetchGenres(),
    ])
      .then(([top, newA, songsData, genresData]) => {
        setTopAlbums(top);
        setNewAlbums(newA);
        setSongs(songsData);
        setGenres(genresData);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error loading data:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <Section
        title="Top Albums"
        data={topAlbums}
        isLoading={loading}
        renderItem={(album) => (
          <Card
            image={album.image}
            title={album.title}
            follows={album.follows}
          />
        )}
      />
      <Section
        title="New Albums"
        data={newAlbums}
        isLoading={loading}
        renderItem={(album) => (
          <Card
            image={album.image}
            title={album.title}
            follows={album.follows}
          />
        )}
      />
      <SongSection songs={songs} genres={genres} isLoading={loading} />
    </div>
  );
}

export default App;
