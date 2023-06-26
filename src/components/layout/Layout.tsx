import { FC, PropsWithChildren } from "react";
import styles from "./Layout.module.scss";
import { Header } from "@/components/layout/header/Header";
import { Footer } from "@/components/layout/footer/Footer";

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div>
      <div className={styles.header}>
        <Header />
      </div>
      <main>{children}</main>
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  );
};
