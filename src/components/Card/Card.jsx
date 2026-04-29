import React from "react";
import { Chip } from "@mui/material";
import styles from "./Card.module.css";

function Card({ image, title, follows, type = "album" }) {
  return (
    <div className={styles.card}>
      <div className={styles.cardImage}>
        <img src={image} alt={title} />
      </div>
      <div className={styles.cardFooter}>
        <div className={styles.cardInfo}>
          <p className={styles.cardTitle}>{title}</p>
          <Chip
            label={`${follows} ${type === "album" ? "Follows" : "Likes"}`}
            size="small"
            className={styles.chip}
          />
        </div>
      </div>
    </div>
  );
}

export default Card;
