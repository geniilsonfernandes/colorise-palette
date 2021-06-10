import React from "react";
import { downloadSVG } from "../../../../utilities/downloadSVG";
import { DownloadIcon, HeartIcon } from "../../../icons/Icons";
import styles from "./ColorMenu.module.css";

const ColorMenu = ({ colors, slug, id, toggleFavorite, isfavorite }) => {
  return (
    <div className={styles.card__menu}>
      <div className={styles.card__name}>{slug}</div>
      <div className={styles.card__btn}>
        <div
          className={styles.like__btn}
          onClick={() => toggleFavorite(id)}
          data-favorite={isfavorite(id)}
        >
          <HeartIcon /> <span>12</span>
        </div>
        <div
          className={styles.svg__btn}
          onClick={() => downloadSVG(colors, slug)}
        >
          <DownloadIcon />
          <span>SVG</span>
        </div>
      </div>
    </div>
  );
};

export default ColorMenu;
