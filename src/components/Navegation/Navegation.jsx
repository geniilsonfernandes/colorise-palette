import React from "react";
import Container from "../layout/Container";
import { LogoIcon, FavoriteIcon } from "../icons/Icons";
import ButtonsSmall from "../Helpers/Buttons/ButtonsSmall/ButtonsSmall";
import SearchInput from "./SearchInput/SearchInput";
import styles from "./Navegation.module.css";
import { Link, useNavigate } from "react-router-dom";
const Navegation = () => {
  const navigate = useNavigate();

  function handleClick() {
    navigate("favorites");
  }

  return (
    <nav className={styles.nav}>
      <Container>
        <div className={styles.nav__container}>
          <div className={styles.logo}>
            <Link to="/">
              <LogoIcon />
            </Link>
          </div>

          <div className={styles.search}>{false && <SearchInput placeholder="Search for color name or code" />}</div>
          <div className={styles.buttons}>
            <ButtonsSmall onClick={handleClick}>
              <FavoriteIcon />
            </ButtonsSmall>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navegation;
