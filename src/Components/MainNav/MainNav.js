import React from 'react'
import "./style.css";

import { GiTreeBranch } from "react-icons/gi";

import MainLinks from '../MainLinks/MainLinks';

function MainNav() {
    return (
        <div id="MainNav">
            <div id="mNav">
                <MainLinks />
                <div id="icons">
                    <GiTreeBranch color="#20C3A7" size={42} id="icon"/>
                    <p>icon</p>
                </div>
            </div>
        </div>
    )
}

export default MainNav
