import React from "react";
import styles from "./Error.module.css";

const Error = () => (
    <div className={styles.error}>
        <span className={styles.error__icon} />
        <span className={styles.error__text}>OOPS..! Something went wrong, try refreshing the page.</span>
    </div>
)

export default Error;
