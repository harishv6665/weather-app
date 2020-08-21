import React, {useEffect, useRef} from "react";
import { TimelineMax } from "gsap";
import moment from "moment";
import PropTypes from "prop-types";
import {Card} from "../../../../shared/components";
import styles from "./ForecastCard.module.css";
import temperatureConverter from "../../../../shared/utils/temperatureConverter";
import ForecastCardField from "../ForecastCardField/ForecastCardField";

const ForecastCard = ({ data, isActive, onCardClick, isCelsius }) => {
    const tween = new TimelineMax();
    const cardEl = useRef(null);

    useEffect(() => {
        tween.fromTo(cardEl.current, { x: 35, alpha: 0 }, { x: 0, alpha: 1, duration: 0.45 });
    }, [])

    return (
        <Card refEl={cardEl} customStyles={{ card: `${styles.card} ${isActive ? styles.active: ""}`}} onClick={onCardClick}>
            <React.Fragment>
                <ForecastCardField
                    label="Date: "
                    value={moment(data.date).format("Do MMM YY")}
                />
                <ForecastCardField
                    label="Temp: "
                    value={`${temperatureConverter(data.avg_temp, isCelsius)} ${isCelsius ? " ºC" : " ºF"}`}
                />
            </React.Fragment>
        </Card>
    );
}

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
