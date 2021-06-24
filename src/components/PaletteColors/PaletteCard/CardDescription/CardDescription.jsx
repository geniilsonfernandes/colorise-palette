import React from "react";
import { downloadSVG } from "../../../../utilities/downloadSVG";
import { DownloadIcon, FavoriteIcon } from "../../../icons/Icons";
import ButtonsSmall from "../../../Helpers/Buttons/ButtonsSmall/ButtonsSmall";
import styles from "./CardDescription.module.css";
import { Link } from "react-router-dom";


import { useColors } from './../../../../Hook/colors/useColors';

const CardDescription = ({ colors, slug, id }) => {
  const { isFavorite, toggleFavorite } = useColors();


  function buttonDownload() {
    downloadSVG(colors, slug);
  }
  function handlerFavoriteClick() {
    toggleFavorite(id);
  }

  return (
    <div className={styles.card__menu}>
      <div className={styles.card__name}>
        <Link to={`/single/${id}`}>{slug}</Link>
      </div>

      <div className={styles.card__buttons}>
        <ButtonsSmall onClick={buttonDownload} label="Download color in svg" name="Download">
          <DownloadIcon />
        </ButtonsSmall>

        <ButtonsSmall label="Save Colors" onClick={handlerFavoriteClick} active={isFavorite(id)} name="favorite">
          <FavoriteIcon />
        </ButtonsSmall>
      </div>
    </div>
  );
};

export default CardDescription;
