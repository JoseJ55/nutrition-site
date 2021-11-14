import React from 'react'
import "./style.css";

import MainLinkRecipe from '../MainLinkRecipe/MainLinkRecipe';
import MainLinkPlan from '../MainLinkPlan/MainLinkPlan';
import MainLinkIngredents from '../MainLinkIngredents/MainLinkIngredents';

function MainLinks() {
    return (
        <div id="mainLinks">
            <MainLinkRecipe />
            {/* <div id="test">
                <p>Recipes</p>
                <div id="recipe">
                    <p>Find a recipe</p>
                    <p>Get a random recipe</p>
                    <p>Explore</p>
                </div>
            </div> */}
            <MainLinkPlan />
            <MainLinkIngredents />

            {/* <p>Plan</p>
            <p>Ingredents</p> */}
        </div>
    )
}

export default MainLinks
