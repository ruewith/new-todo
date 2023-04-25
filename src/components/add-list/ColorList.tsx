import React, { useState, useEffect } from "react";

import styles from "./AddList.module.sass";
import Circle from "../circle";

const ColorList = ({ colors, active, setActive }: any) => {
    return (
        <ul className={styles.colorList}>
            {colors.map((color: any) => (
                <li
                    key={color.id}
                    className={active === color.id ? styles.active : ""}
                    onClick={() => setActive(color.id)}
                >
                    <Circle color={color.name} />
                </li>
            ))}
        </ul>
    );
};

export default ColorList;
