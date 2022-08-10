import React from "react";
import "./Recipe.css";

const Recipe = ({ title,calories, image, ingredients }) => {
  return (
    <div className="recipe">
      <h3>{title}</h3> <img className="image" src={image} alt="" />
      <ol>
        {ingredients.map((ingredient) => (
          <li>{ingredient.text}</li>
        ))}
      
      </ol>
      
      <h5> {calories} calories </h5>
     
    </div>
  );
};

export default Recipe;
