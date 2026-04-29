import React, { useState } from "react";
import Carousel from "../Carousel/Carousel";
import styles from "./Section.module.css";

function Section({
  title,
  data,
  renderItem,
  showAllButton = true,
  isLoading = false,
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  if (isLoading) {
    return (
      <section className={styles.section}>
        <div className={styles.header}>
          <h2 className={styles.title}>{title}</h2>
        </div>
        <div className={styles.loadingText}>Loading...</div>
      </section>
    );
  }

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.title}>{title}</h2>
        {showAllButton && (
          <button
            className={styles.collapseButton}
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? "Collapse" : "Show All"}
          </button>
        )}
      </div>

      {isExpanded ? (
        <div className={styles.gridSection}>
          {data.map((item, index) => (
            <div key={index} className={styles.gridItem}>
              {renderItem(item)}
            </div>
          ))}
        </div>
      ) : (
        <Carousel data={data} renderItem={renderItem} cardsPerView={5} />
      )}
    </section>
  );
}

export default Section;
