import React from "react";
import PropTypes from "prop-types";
import ForecastCard from "../ForecastCard/ForecastCard";
import styles from "./ForecastList.module.css";
import {Button, Switch} from "../../../../shared/components";
import useForecastList from "./useForecastList";

const ForecastList = ({ list, activeForecastDate, setActiveForecastDate, isCelsius, setIsCelsius, city }) => {
    const {
        getPageData,
        onPrevPage,
        onNextPage,
        totalPages,
        currentPage,
    } = useForecastList(list, setActiveForecastDate)

    return (
        <div className={styles.forecast}>
            <div className={styles.forecast__header}>
                <h2 className={styles.forecast__title}>{city}</h2>
                <div className={styles.forecast__buttonGroup}>
                    <label className={styles.forecast__switch}>
                        <span className={styles.forecast__switch__label}>ºF</span>
                        <Switch
                            checked={isCelsius}
                            onChange={setIsCelsius}
                        />
                        <span className={styles.forecast__switch__label}>ºC</span>
                    </label>
                    <Button
                        onClick={() => onPrevPage()}
                        disabled={!(currentPage > 1)}
                        customStyles={{
                            button: `${styles.forecast__button}
                            ${styles.forecast__buttonPrev}`,
                        }}
                    />
                    <Button
                        onClick={() => onNextPage()}
                        disabled={!(totalPages > currentPage)}
                        customStyles={{
                            button: `${styles.forecast__button}
                            ${styles.forecast__buttonNext}`,
                        }}
                    />
                </div>
            </div>
            <div className={styles.forecast__cards}>
                {getPageData().map(data => <ForecastCard
                    key={data.date}
                    data={data}
                    isCelsius={isCelsius}
                    isActive={data.date === activeForecastDate}
                    onCardClick={() => setActiveForecastDate(data.date)}
                />)}
            </div>
        </div>
    )
}

ForecastList.propTypes = {
    city: PropTypes.string.isRequired,
    list: PropTypes.array.isRequired,
    activeForecastDate: PropTypes.string,
    isCelsius: PropTypes.bool.isRequired,
    setActiveForecastDate: PropTypes.func.isRequired,
    setIsCelsius: PropTypes.func.isRequired,
}

ForecastList.defaultProps = {
    city: "",
    list: [],
    activeForecastDate: "",
    isCelsius: false,
    setActiveForecastDate: () => {},
    setIsCelsius: () => {},
}

export default ForecastList;
