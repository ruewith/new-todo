import React, { useState, useEffect } from "react";

import styles from "./AddList.module.sass";

import { AddIcon } from "../../icons";
import AddPopup from "./AddPopup";

const AddList = () => {
    const [visible, setVisible] = useState(false);

    return (
        <div className={styles.add}>
            <button onClick={() => setVisible(true)} className={styles.btn}>
                <AddIcon /> Добавить список
            </button>
            {visible && <AddPopup setVisible={setVisible} />}
        </div>
    );
};

export default AddList;
