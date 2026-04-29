import React from "react";
import styles from "./Hero.module.css";
import heroImage from "../../assets/hero-image.png";

function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.heroText}>
        <h1>100 Thousand Songs, ad-free</h1>
        <h1>Over thousands podcast episodes</h1>
      </div>

      <div className={styles.heroImage}>
        <img src={heroImage} alt="headphones" />
      </div>
    </div>
  );
}

export default Hero;