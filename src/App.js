import "./App.css";
// import FoodItemRecipe from "./components/FoodItem/FoodItemRecipe/FoodItemRecipe";
import FoodItemContainer from "./components/FoodItemContainer/FoodItemContainer";
import Navbar from "./components/navbar/Navbar";

//import SearchBar from './components/SearchBar/SearchBar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <FoodItemContainer />
      
    </div>
  );
}

export default App;
