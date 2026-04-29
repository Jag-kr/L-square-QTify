import React, { useEffect, useState } from "react";
import styles from "./Section.module.css";
import axios from "axios";
import Card from "../Card/Card";

function Section({ title, endpoint }) {
  const [albums, setAlbums] = useState([]);
  const [isCollapsed, setIsCollapsed] = useState(true);

  const fetchAlbums = async () => {
    try {
      const res = await axios.get(endpoint);
      setAlbums(res.data);
    } catch (error) {
      console.error("Error fetching albums", error);
    }
  };

  useEffect(() => {
    fetchAlbums();
  }, [endpoint]);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className={styles.section}>
      <div className={styles.header}>
        <h2>{title}</h2>
        <button className={styles.toggle} onClick={toggleCollapse}>
          {isCollapsed ? "Show All" : "Collapse"}
        </button>
      </div>

      <div className={styles.grid}>
        {(isCollapsed ? albums.slice(0, 7) : albums).map((album) => (
          <Card
            key={album.id}
            image={album.image}
            follows={album.follows}
            title={album.title}
          />
        ))}
      </div>
    </div>
  );
}

export default Section;
