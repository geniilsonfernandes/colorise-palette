import React from "react";
import { downloadSVG } from "../../../../utilities/downloadSVG";
import { DownloadIcon, FavoriteIcon } from "../../../icons/Icons";
import ButtonsSmall from "../../../Helpers/Buttons/ButtonsSmall/ButtonsSmall";
import styles from "./ColorMenu.module.css";
import { Link } from "react-router-dom";

const ColorMenu = ({ colors, slug,id}) => {
  function buttonDownload() {
    downloadSVG(colors, slug);
  }

  return (
    <div className={styles.card__menu}>
      <div className={styles.card__name}>
        <Link to={`single/${id}`}>{slug}</Link>
      </div>

      <div className={styles.card__buttons}>
        <ButtonsSmall onClick={buttonDownload} label="Download color in svg">
          <DownloadIcon />
        </ButtonsSmall>

        <ButtonsSmall label="Save Colors">
          <FavoriteIcon />
        </ButtonsSmall>
      </div>
    </div>
  );
};

export default ColorMenu;
