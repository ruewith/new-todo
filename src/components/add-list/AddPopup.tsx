import React, { useState, useEffect } from "react";

import styles from "./AddList.module.sass";

import { CloseIcon } from "../../icons";
import Button from "../button";
import Field from "../field";

import { useSelector } from "react-redux";
import { colorsSelector } from "../../selectors";
import ColorList from "./ColorList";

import { useAppDispatch } from "../../store";
import { createList } from "../../actions/list";
import { ListItem } from "../../@types";

const AddPopup = ({ setVisible }: any) => {
    const [name, setName] = useState("");
    const [active, setActive] = useState<any>(null);

    const dispatch = useAppDispatch();

    const colors = useSelector(colorsSelector);

    useEffect(() => {
        setActive(colors[0].id);
    }, []);

    const popupClose = () => {
        setName("");
        setActive(colors[0].id);
        setVisible(false);
    };

    const createListHandler = async () => {
        const obj = {
            name,
            colorId: active,
        } as ListItem;
        dispatch(createList(obj));
        popupClose();
    };

    return (
        <div className={styles.popup}>
            <span onClick={popupClose} className={styles.close}>
                <CloseIcon />
            </span>

            <Field placeholder={"Название списка"} value={name} setValue={setName} />
            <ColorList colors={colors} active={active} setActive={setActive} />
            <Button onButtonClick={createListHandler} text={"Добавить"} />
        </div>
    );
};

export default AddPopup;
