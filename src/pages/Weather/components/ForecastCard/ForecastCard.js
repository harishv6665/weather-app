import React from "react";
import moment from "moment";
import PropTypes from "prop-types";
import Card from "../../../../shared/components/Card/Card";
import styles from "./ForecastCard.module.css";
import temperatureConverter from "../../../../shared/utils/temperatureConverter";

const ForecastCard = ({ data, isActive, onCardClick, isCelsius }) => (
    <Card customStyles={{ card: `${styles.card} ${isActive ? styles.active: ""}`}} onClick={onCardClick}>
        <React.Fragment>
            <div className={styles.card__field}>
                <span className={styles.card__field__label}>Date: </span>
                <span className={styles.card__field__value}>{moment(data.date).format("Do MMM YY")}</span>
            </div>
            <div className={styles.card__field}>
                <span className={styles.card__field__label}>Temp: </span>
                <span className={styles.card__field__value}>
                    {temperatureConverter(data.avg_temp, isCelsius)}
                    {isCelsius ? " ºC" : " ºF"}
                </span>
            </div>
        </React.Fragment>
    </Card>
)

ForecastCard.propTypes = {
    data: PropTypes.object,
    isActive: PropTypes.bool,
    onCardClick: PropTypes.func,
    isCelsius: PropTypes.bool
}

ForecastCard.defaultProps = {
    data: {},
    isActive: false,
    onCardClick: () => {},
    isCelsius: true
}

export default ForecastCard;
