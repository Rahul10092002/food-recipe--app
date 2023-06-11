import {configureStore} from  '@reduxjs/toolkit' 
import FoodSlice from './slices/FoodSlice';
export default configureStore({
  reducer: {
    foodReducer: FoodSlice,
    
  },
});