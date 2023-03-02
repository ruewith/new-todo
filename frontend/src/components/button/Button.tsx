import React from "react";

import styles from "./Button.module.sass";

const Button = ({ text, onButtonClick }: any) => {
    return (
        <button className={styles.button} onClick={onButtonClick}>
            {text}
        </button>
    );
};

export default Button;
