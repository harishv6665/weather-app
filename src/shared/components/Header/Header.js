import React from "react";
import styles from "./Header.module.css";

const Header = () => (
    <header className={styles.header}>
        <div className={styles.container}>
            <h1 className={styles.header__title}>Weather</h1>
        </div>
    </header>
)

Header.propTypes = {}

Header.defaultProps = {}

export default Header;
