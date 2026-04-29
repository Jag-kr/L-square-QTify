import React, { useState } from "react";
import Card from "../Card/Card";
import styles from "./Section.module.css";
import Carousel from "../Carousel/Carousel";

function Section({ title, data = [], type }) {
  const [showAll, setShowAll] = useState(false);

  return (
    <div className={styles.section}>
      <div className={styles.header}>
        <h2>{title}</h2>
        <button onClick={() => setShowAll(!showAll)}>
          {showAll ? "Collapse" : "Show All"}
        </button>
      </div>

      {showAll ? (
        <div className={styles.grid}>
          {data.map((item) => (
            <Card
              key={item.id}
              image={item.image}
              follows={item.follows}
              title={item.title}
            />
          ))}
        </div>
      ) : (
        <Carousel data={data} type={type} />
      )}
    </div>
  );
}

export default Section;
