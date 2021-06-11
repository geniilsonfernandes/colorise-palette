import React from "react";
import { downloadSVG } from "../../../../utilities/downloadSVG";
import { DownloadIcon, FavoriteIcon } from "../../../icons/Icons";
import ButtonsSmall from "../../../Helpers/Buttons/ButtonsSmall/ButtonsSmall";
import styles from "./ColorMenu.module.css";

const ColorMenu = ({ colors, slug, id, toggleFavorite, isfavorite }) => {
  function buttonDownload() {
    downloadSVG(colors, slug);
  }

  return (
    <div className={styles.card__menu}>
      <div className={styles.card__name}> {slug}</div>

      <div className={styles.card__buttons}>
        <ButtonsSmall onClick={buttonDownload}>
          <DownloadIcon />
        </ButtonsSmall>

        <ButtonsSmall>
        <FavoriteIcon />
        </ButtonsSmall>
      </div>
    </div>
  );
};

export default ColorMenu;
