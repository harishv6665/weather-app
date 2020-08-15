import React from "react";
import PropTypes from "prop-types";
import styles from "./Switch.module.css";

const Switch = ({ onChange, checked, customStyles }) => (
    <label
        className={`
            ${styles.switch}
            ${customStyles.switch}
        `}
    >
        <input
            type="checkbox"
            className={`
                ${styles.switch__input}
                ${customStyles.switch__input}
            `}
            onChange={onChange}
            checked={checked}
        />
        <span className={`${styles.switch__circle} ${customStyles.switch__circle}`} />
    </label>
)

Switch.propTypes = {
    onChange: PropTypes.func.isRequired,
    checked: PropTypes.bool.isRequired,
    customStyles: PropTypes.shape({
        switch: PropTypes.string,
        switch__circle: PropTypes.string,
        switch__input: PropTypes.string,
    }),
}

Switch.defaultProps = {
    onChange: () => {},
    checked: false,
    customStyles: {
        switch: "",
        switch__circle: "",
        switch__input: "",
    },
}

export default Switch;
