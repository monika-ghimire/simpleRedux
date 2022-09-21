import { createSlice } from "@reduxjs/toolkit";
import { useInsertionEffect } from "react";

const studentSlice = createSlice({
  name: "studentStore",
  initialState: {
    studentname: "Suraj",
     studentList: [
      { name: "Suraj", id:1},
    
  
    ],
  
  },
  reducers: {
  
    addStudent:(state,obj) => {
        state.studentList=[...state.studentList,obj]
   
      console.log(obj)
    }
  }

});
 
export const { addString, addStudent } = studentSlice.actions;
export const selectStudentList = (state) => state.studentStore.studentList;
export const selectStudentname = (state) => state.studentStore.studentnameList;
export const selectworkerList =(state)=>state.studentStore.workerList;

export default studentSlice.reducer;
