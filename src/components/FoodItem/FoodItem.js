import React from "react";
import "./FoodItem.css";
function FoodItem(props) {
  return (
    <div className="singleItem">
      <div className="left-part">
        <div className="item-img">
          <img src={props.image} alt="" />
        </div>
        <div className="item-head">
          <h3>{props.label}</h3>
        </div>
      </div>

      <div className="item-info">
        <div className="ingredient-info">
          <div className="list">
            <h4>Ingredient</h4>
            <p>
             
              {props.ingredient}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FoodItem;
