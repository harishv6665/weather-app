import React from 'react';
import PropTypes from "prop-types";
import styles from './Button.module.css';

export const variantTypes = {
    invert: "invert",
    danger: "danger",
}

const Button = ({ children, onClick, variant, customStyles = {}, type, disabled }) => (
    <button
        className={`
            ${styles.button}
            ${customStyles.button}
            ${variantTypes[variant] ? [styles[variantTypes[variant]]] : ''}
        `}
        type={type}
        onClick={onClick}
        disabled={disabled}
    >{children}</button>
);

Button.propTypes = {
    children: PropTypes.node,
    onClick: PropTypes.func,
    variantTypes: PropTypes.oneOf(["", "invert", "danger"]), // from variantTypes
    customStyles: PropTypes.object,
    type: PropTypes.string,
    disabled: PropTypes.bool,
};

Button.defaultProps = {
    children: "",
    onClick: () => {},
    variantTypes: "", // from variantTypes
    customStyles: {},
    type: "button",
    disabled: false
};

export default Button;
