import React, {useEffect, useState} from "react";
import PropTypes from "prop-types";
import Button from "../../../../shared/components/Button/Button";
import ForecastCard from "../ForecastCard/ForecastCard";
import styles from "./ForecastList.module.css";

const ForecastList = ({ list, activeForecastDate, setActiveForecastDate, isCelsius }) => {
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize] = useState(3);
    const [totalPages, setTotalPages] = useState(0);

    useEffect(() => {
        setData(list);
        setTotalPages(Math.ceil(list.length / pageSize));
        setActiveForecastDate(list[0].date);
    }, [list, pageSize, setActiveForecastDate]);

    const getPageData = () => {
        const endIndex = currentPage * pageSize;
        const startIndex = endIndex - pageSize;
        return data.slice(startIndex, endIndex);
    }

    const onPrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    }

    const onNextPage = () => {
        if (totalPages > currentPage) {
            setCurrentPage(currentPage + 1);
        }
    }

    return (
        <div className={styles.forecast}>
            <div className={styles.forecast__header}>
                <h2 className={styles.forecast__title}>Weather</h2>
                <div className={styles.forecast__buttonGroup}>
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
    list: PropTypes.array,
    activeForecastDate: PropTypes.string,
    setActiveForecastDate: PropTypes.func,
    isCelsius: PropTypes.bool,
}

ForecastList.defaultProps = {
    list: [],
    activeForecastDate: "",
    setActiveForecastDate: () => {},
    isCelsius: true,
}

export default ForecastList;
