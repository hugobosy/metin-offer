import {FC, PropsWithChildren} from "react";
import styles from './Layout.module.scss';

export const Layout: FC<PropsWithChildren> = ({children}) => {
    return (
        <div className={styles.layout}>
            <header>Header</header>
            <main>{children}</main>
            <footer>Footer</footer>
        </div>
    )
}