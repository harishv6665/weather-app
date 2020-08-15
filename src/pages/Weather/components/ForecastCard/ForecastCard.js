import React from "react";
import moment from "moment";
import PropTypes from "prop-types";
import {Card} from "../../../../shared/components";
import styles from "./ForecastCard.module.css";
import temperatureConverter from "../../../../shared/utils/temperatureConverter";
import ForecastCardField from "../ForecastCardField/ForecastCardField";

const ForecastCard = ({ data, isActive, onCardClick, isCelsius }) => (
    <Card customStyles={{ card: `${styles.card} ${isActive ? styles.active: ""}`}} onClick={onCardClick}>
        <ForecastCardField
            label="Date: "
            value={moment(data.date).format("Do MMM YY")}
        />
        <ForecastCardField
            label="Temp: "
            value={`${temperatureConverter(data.avg_temp, isCelsius)} ${isCelsius ? " ºC" : " ºF"}`}
        />
    </Card>
)

ForecastCard.propTypes = {
    data: PropTypes.object.isRequired,
    isActive: PropTypes.bool.isRequired,
    onCardClick: PropTypes.func.isRequired,
    isCelsius: PropTypes.bool.isRequired,
}

ForecastCard.defaultProps = {
    data: {},
    isActive: false,
    onCardClick: () => {},
    isCelsius: false
}

export default ForecastCard;
