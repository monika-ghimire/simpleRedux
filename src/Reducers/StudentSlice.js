import { createSlice } from "@reduxjs/toolkit";
import { useInsertionEffect } from "react";
import axios from "axios";

const studentSlice = createSlice({
  name: "studentStore",
  initialState: {
    studentname: "Suraj",
    studentList: [{ name: "Suraj", id: 1 }],
    tagList:[]
  },


  reducers: {
    addStudent: (state,action) => {
      state.studentList = [...state.studentList, action.payload];
     
    },

     loadTagList:(state)=>{
     axios.get("https://api.mirai-iconnect.com/api/misc/getalltags").then((response) => {
        console.log(response.data)
        state.tagList=[...response.data];
      });
    },

     
    

  },
});

export const { addString, addStudent,loadTagList } = studentSlice.actions;
export const selectStudentList = (state) => state.studentStore.studentList;
export const selectStudentname = (state) => state.studentStore.studentnameList;
export const  selectTagList = (state) => state.studentStore.tagList;

export default studentSlice.reducer;
