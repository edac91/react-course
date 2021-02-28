import React from 'react';

import Logo from "../../Logo/Logo";
import classes from './SideDrawer.module.css'
import NavigationItems from "../NavigationItems/NavigationItems";

const SideDrawer = () => {
    return (
        <div className={classes.SideDrawer}>
            <Logo />
            <nav>
                <NavigationItems />
            </nav>
        </div>
    );
};

export default SideDrawer;
