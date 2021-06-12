import React from "react";
import Container from "../layout/Container";
import { LogoIcon, FavoriteIcon } from "../icons/Icons";
import ButtonsSmall from "../Helpers/Buttons/ButtonsSmall/ButtonsSmall";
import InputSearch from "./Input/Input";
import styles from "./Navegation.module.css";
const Navegation = ( ) => {
  return (
    <nav className={styles.nav}>
      <Container>
        <div className={styles.nav__container}>
          <div className={styles.logo}>
            <LogoIcon />
          </div>

          <div className={styles.search}>
            <InputSearch placeholder="Search for color name or code" />
          </div>
          <div className={styles.buttons}>
            <ButtonsSmall>
              <FavoriteIcon />
            </ButtonsSmall>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navegation;
