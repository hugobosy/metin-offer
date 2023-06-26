import styles from "./Header.module.scss";
import logo from "@/assets/image/metin-logo.png";
import Image from "next/image";

export const Header = () => {
  return (
    <div className={styles.wrapper}>
      <Image src={logo} alt="logo" />
      <div className={styles.buttonGroup}>
        <a href="#">Zaloguj</a>
        <a href="#">Rejestracja</a>
      </div>
    </div>
  );
};
