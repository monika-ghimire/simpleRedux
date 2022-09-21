import { configureStore } from "@reduxjs/toolkit";
import  studentReducer from "../Reducers/StudentSlice";
import    workerReducer from '../Reducers/StudentSlice'

export default configureStore({
  reducer: {
     studentStore:studentReducer
   
  }
 
});
