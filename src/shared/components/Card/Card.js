import React from "react";
import PropTypes from "prop-types";
import styles from "./Card.module.css";

const Card = ({ children, customStyles, onClick, refEl }) => (
    <div
        ref={refEl}
        className={`${styles.card} ${customStyles.card}`}
        onClick={onClick}
    >{children}</div>
)

Card.propTypes = {
    children: PropTypes.element.isRequired,
    customStyles: PropTypes.shape({
        card: PropTypes.string
    }),
    onClick: PropTypes.func,
}

Card.defaultProps = {
    children: "",
    customStyles: {
        card: ""
    },
    onClick: () => {}
}

export default Card;
