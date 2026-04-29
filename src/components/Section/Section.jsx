import React, { useState } from "react";
import Card from "../Card/Card";
import styles from "./Section.module.css";

function Section({ title, data = [] }) {
  const [showAll, setShowAll] = useState(false);

  const displayData = showAll ? data : data.slice(0, 7);

  return (
    <div className={styles.section}>
      <div className={styles.header}>
        <h2>{title}</h2>
        <button onClick={() => setShowAll(!showAll)}>
          {showAll ? "Collapse" : "Show All"}
        </button>
      </div>

      <div className={styles.grid}>
        {displayData.map((item) => (
          <Card
            key={item.id}
            image={item.image}
            follows={item.follows}
            title={item.title}
          />
        ))}
      </div>
    </div>
  );
}

export default Section;
