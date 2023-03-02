import React from "react";

import styles from "./Field.module.sass";

const Field = ({ placeholder, value, setValue }: any) => {
    return (
        <input
            placeholder={placeholder}
            className={styles.field}
            type="text"
            value={value}
            onChange={(event) => setValue(event?.target.value)}
        />
    );
};

export default Field;
