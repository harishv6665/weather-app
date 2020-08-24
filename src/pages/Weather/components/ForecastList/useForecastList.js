import {useEffect, useState} from "react";

const useForecastList = (list, setActiveForecastDate) => {
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize] = useState(3);
    const [totalPages, setTotalPages] = useState(0);

    useEffect(() => {
        setData(list);
        setTotalPages(Math.ceil(list.length / pageSize));
        setActiveForecastDate(list[0].date);
    }, [list]);

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

    return {
        getPageData,
        onPrevPage,
        onNextPage,
        totalPages,
        currentPage,
    }
}

export default useForecastList;
