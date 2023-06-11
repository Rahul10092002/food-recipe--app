import React, { useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { loadproducts } from '../../redux/slices/FoodSlice';

function SearchBar() {
    // const [query, setQuery] = useState("");
    const foodlist=useSelector(state=>state.foodReducer.recipes)
    const dispatch = useDispatch();
    useEffect(() => {
         // const YOUR_APP_ID = "26d73111";
         // const YOUR_APP_KEY = "ff22e30bdf61fa8f0d83c13c44416b54";
       async function fetchData() {
         const response = await fetch(
           `https://api.edamam.com/search?q=paneer&app_id=26d73111&app_key=ff22e30bdf61fa8f0d83c13c44416b54`
         );
         const jsonData = await response.json();
         dispatch(loadproducts(jsonData));
       }
       fetchData();
     }, [dispatch]);
    
    

  return (
    <div>
      {foodlist.map((food) => (
        <>
          <h1>{food.label}</h1>
        </>
      ))}
    </div>
  );
}

export default SearchBar