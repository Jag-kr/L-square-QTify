import React from "react";
import styles from "./Logo.module.css";
import logo from "../../assets/logo.svg";

const Logo = () => {
  return (
    <div className={styles.logoContainer}>
      <img src={logo} alt="Qtify Logo" className={styles.logo} />
    </div>
  );
};

export default Logo;
