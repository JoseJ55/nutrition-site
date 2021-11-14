import React from 'react';
import "./style.css";

function MainLinkRecipe() {
    return (
        <div id="mainLinkRecipe">
            <p id="recipeTitle">Recipes</p>
            <div id="recipe">
                <p className="dropItem">Find a recipe</p>
                <p className="dropItem">Get a random recipe</p>
                <p className="dropItem">Explore</p>
            </div>
        </div>
    )
}

export default MainLinkRecipe
