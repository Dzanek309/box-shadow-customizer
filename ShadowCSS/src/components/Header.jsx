import React from "react";
import styles from "./Header.module.css";

// Funkcja generująca losowy kolor w formacie hex

const Header = () => {
  return (
    <div className={styles.header}>
        <h1 className={styles.header__title}>ShadowCSS</h1>
    </div>
  );
};

export default Header;
