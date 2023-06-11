import React, { useEffect, useState } from "react";
import "./FoodItemContainer.css";
import { useDispatch, useSelector } from "react-redux";
import { loadproducts } from "../../redux/slices/FoodSlice";
import { Input } from "antd";
import FoodItem from "../FoodItem/FoodItem";
import  { CheckOutlined } from '@ant-design/icons'
function FoodItemContainer() {
  const dispatch = useDispatch();
  const productlist = useSelector((state) => state.foodReducer.recipes);
 const [query, setquery] = useState("paneer");
  
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://api.edamam.com/search?q=${query}&app_id=26d73111&app_key=ff22e30bdf61fa8f0d83c13c44416b54`
      );
      const jsonData = await response.json();
      dispatch(loadproducts(jsonData.hits));
    }
    fetchData();
  }, [query, dispatch]);
  // if (status === "loading") {
  //   const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;
  //   return (
  //     <Spin
  //       style={{ position: "absolute", top: "40%", left: "50%" }}
  //       indicator={antIcon}
  //     />
  //   );
  // }
  // if (status === "failed") {
  //   return (
  //     <>
  //       <h3>Uh oh! Something went wrong</h3>
  //       <p>{error}</p>
  //     </>
  //   );
  // }

  return (
    <>
      <div className="searchbar">
        <form >
          {/* <input
            type="text"
            value={query}
            onChange={(e) => setquery(e.target.value)}
          /> */}
          <Input
            className="Input"
            placeholder="input search text"
            enterButton="Search"
            
             onChange={(e) => setquery(e.target.value)}
          />

          {/* <button onClick={(e) => setquery(e.target.value)}>Search</button> */}
        </form>
      </div>
      <div className="RecipeList">
        {productlist &&
          productlist.map((item) => (
            <>
              {/* <h1>{item.recipe.label}</h1> */}
              <FoodItem
                key={item.recipe.label.toString()}
                image={item.recipe.image}
                label={item.recipe.label}
                ingredient={item.recipe.ingredientLines.map((ingredient) => {
                  return (
                    <li>
                      <CheckOutlined />{"  "}{ingredient},
                    </li>
                  );
                })}
              />
            </>
          ))}
      </div>
    </>
  );
}
export default FoodItemContainer;

//https://api.edamam.com/search?q=chicken&app_id=26d73111&app_key=ff22e30bdf61fa8f0d83c13c44416b54
