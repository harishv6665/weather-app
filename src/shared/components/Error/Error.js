import React from "react";
import styles from "./Error.module.css";

const Error = ({message}) => (
    <div className={styles.error}>
        <span className={styles.error__icon} />
        <span className={styles.error__text}>OOPS..! Something went wrong, try refreshing the page.</span>
        <span className={styles.error__text}>Error message: {message}</span>
    </div>
)

export default Error;
