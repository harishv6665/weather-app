import React from "react";
import styles from "./Loader.module.css";

const Loader = () => (
    <div className={styles.loader}>
        <div className={styles.loader__spinner} />
        <span className={styles.loader__text}>Loading...</span>
    </div>
);

Loader.propTypes = {

}

Loader.defaultProps = {

}

export default Loader;
