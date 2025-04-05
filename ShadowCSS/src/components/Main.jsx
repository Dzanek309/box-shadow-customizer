import React from "react";
import styles from "./Main.module.css";

// Funkcja generująca losowy kolor w formacie hex

const Main = ({children}) => {
  return (
    <div className={styles.main}>
        {children}
    </div>
  );
};

export default Main;
