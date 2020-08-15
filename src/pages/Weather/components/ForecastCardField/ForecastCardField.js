import React from "react";
import PropTypes from "prop-types";
import styles from "../ForecastCard/ForecastCard.module.css";

const ForecastCardField = ({ label, value }) => (
    <div className={styles.card__field}>
        <span className={styles.card__field__label}>{label}: </span>
        <span className={styles.card__field__value}>{value}</span>
    </div>
)

ForecastCardField.propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
}

ForecastCardField.defaultProps = {
    label: "",
    value: ""
}

export default ForecastCardField;
