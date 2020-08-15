import React from "react";
import PropTypes from "prop-types";
import styles from "./Header.module.css";
import Switch from "../Switch/Switch";

const Header = ({ title, isCelsius, setIsCelsius }) => (
    <header className={styles.header}>
        <div className={styles.container}>
            <h1 className={styles.header__title}>{title}</h1>
            <label className={styles.header__switch}>
                <span className={styles.header__switch__label}>ºF</span>
                <Switch
                    checked={isCelsius}
                    onChange={setIsCelsius}
                />
                <span className={styles.header__switch__label}>ºC</span>
            </label>
        </div>
    </header>
)

Header.propTypes = {
    title: PropTypes.string,
    isCelsius: PropTypes.bool,
    setIsCelsius: PropTypes.func,
}

Header.defaultProps = {
    title: "",
    isCelsius: false,
    setIsCelsius: () => {}
}

export default Header;
