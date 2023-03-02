import React from "react";

import styles from "./Circle.module.sass";

const Circle = ({ color }: any) => {
    return <span className={`${styles.circle} ${styles[color]}`}></span>;
};

export default Circle;
