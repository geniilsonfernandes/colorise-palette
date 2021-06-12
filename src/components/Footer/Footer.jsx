import React from "react";
import Container from "../layout/Container";
import { HeartIcon } from "../icons/Icons";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <p className={styles.about}>
          © 2021 Colorise Made <HeartIcon /> Gee
        </p>

      </Container>
    </footer>
  );
};

export default Footer;
