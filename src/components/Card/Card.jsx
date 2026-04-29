import React from "react";
import styles from "./Card.module.css";

function Card({ image, follows, title }) {
  return (
    <div className={styles.card}>
      <div className={styles.cardImageWrapper}>
        <img src={image} alt={title} />

        <div className={styles.follows}>{follows} Follows</div>
      </div>

      <p className={styles.title}>{title}</p>
    </div>
  );
}

export default Card;
