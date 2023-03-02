import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import styles from "./ListMenu.module.sass";
import Circle from "../circle";
import { RemoveIcon } from "../../icons";

import { useAppDispatch } from "../../store";
import { deleteList } from "../../actions/list";
import { colorsSelector } from "../../selectors";

const ListItem = (props: any) => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const colors = useSelector(colorsSelector);

    const { active, setActive, id, name, colorId } = props;

    const deleteListHandler = (id: number) => dispatch(deleteList(id));
    const showTaskById = () => {
        setActive(id);
        navigate(`/lists/${id}`);
    };

    const itemColor = colors.filter((color) => color.id === colorId)[0].name;

    return (
        <li key={id} onClick={showTaskById} className={`${styles.item} ${active === id ? styles.active : ""}`}>
            <Circle color={itemColor} />
            <span className={styles.name}>{name}</span>
            <span onClick={() => deleteListHandler(id)} className={styles.remove}>
                <RemoveIcon />
            </span>
        </li>
    );
};

export default ListItem;
