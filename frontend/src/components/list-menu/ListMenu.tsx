import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import styles from "./ListMenu.module.sass";
import { ListIcon } from "../../icons";

import { listsSelector } from "../../selectors";
import ListItem from "./ListItem";

const ListMenu = () => {
    const navigate = useNavigate();
    const [active, setActive] = useState<number | null>(null);
    const lists = useSelector(listsSelector);

    const showAllTasks = () => {
        navigate("/");
        setActive(null);
    };

    return (
        <div className={styles.menu}>
            <button onClick={showAllTasks} className={styles.btn}>
                <ListIcon /> Все задачи
            </button>
            <ul>
                {lists.map((list: any) => (
                    <ListItem active={active} setActive={setActive} {...list} />
                ))}
            </ul>
        </div>
    );
};

export default ListMenu;
