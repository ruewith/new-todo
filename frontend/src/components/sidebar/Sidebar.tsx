import React, { useState } from "react";

import styles from "./Sidebar.module.sass";

import ListMenu from "../list-menu";
import AddList from "../add-list";

const Sidebar = () => {
    return (
        <aside className={styles.sidebar}>
            <ListMenu />
            <AddList />
        </aside>
    );
};

export default Sidebar;
