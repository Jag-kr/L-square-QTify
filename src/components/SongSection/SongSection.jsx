import React, { useState, useEffect } from "react";
import { Tabs, Tab } from "@mui/material";
import Carousel from "../Carousel/Carousel";
import Card from "../Card/Card";
import styles from "./SongSection.module.css";

function SongSection({ songs, genres, isLoading = false }) {
  const [selectedTab, setSelectedTab] = useState(0);
  const [filteredSongs, setFilteredSongs] = useState([]);

  useEffect(() => {
    if (!songs || songs.length === 0) {
      setFilteredSongs([]);
      return;
    }

    if (selectedTab === 0) {
      // "All" tab - show all songs
      setFilteredSongs(songs);
    } else {
      // Filter songs by selected genre
      const genreId = genres[selectedTab - 1]?.id;
      const filtered = songs.filter((song) =>
        song.genre?.includes(genreId)
      );
      setFilteredSongs(filtered);
    }
  }, [selectedTab, songs, genres]);

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const tabLabels = ["All", ...genres.map((g) => g.name)];

  if (isLoading) {
    return (
      <section className={styles.songSection}>
        <h2 className={styles.title}>Songs</h2>
        <div className={styles.loadingText}>Loading songs...</div>
      </section>
    );
  }

  return (
    <section className={styles.songSection}>
      <h2 className={styles.title}>Songs</h2>

      <div className={styles.tabsContainer}>
        <Tabs
          value={selectedTab}
          onChange={handleTabChange}
          className={styles.tabs}
          variant="scrollable"
          scrollButtonsDisplay="auto"
        >
          {tabLabels.map((label, index) => (
            <Tab key={index} label={label} className={styles.tab} />
          ))}
        </Tabs>
      </div>

      {filteredSongs.length > 0 ? (
        <Carousel
          data={filteredSongs}
          renderItem={(song) => (
            <Card
              image={song.image}
              title={song.title}
              follows={song.likes}
              type="song"
            />
          )}
          cardsPerView={5}
        />
      ) : (
        <div className={styles.emptyState}>
          <p>No songs found for this genre.</p>
        </div>
      )}
    </section>
  );
}

export default SongSection;
