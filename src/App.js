import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

import {
  addStudent,
  addString,
  selectTagList,
  selectStudentList,
  loadTagList,
} from "./Reducers/StudentSlice";





export default function App() {
  const studentList = useSelector(selectStudentList);
  const tagList = useSelector(selectTagList);
  const dispatch = useDispatch( );


   function UserDataFromInput()
{
  let name =document.getElementById('name').value;
  let id=document.getElementById('id').value;
  let newstudent=
    {name:name,id:id}
  dispatch(addStudent(newstudent))
}

useEffect(() => {   
      dispatch(loadTagList())
     },[]);

  return (
    <div className="App">
      <h1> student data</h1>
     
{studentList.map((data) => (
  <div>
    <h1>Student_Name: {data.name}</h1>
    <p>Id:{data.id}</p>
 
  </div>
))}
    
    {
      tagList.map((x)=>(
        <div>
          <h1>tagList</h1>
           <h1>tagid: {x.tagId}</h1>
        <p>name:{x.name}</p>
        </div>
       
     ))}

     <form >
     Name: <input type="text" id="name"/>
     Id: <input type="number" id="id"/>
     </form>
     
     <button onClick={UserDataFromInput}>AddName</button>
      {/* <button onClick={() => dispatch(addStudent())}>AddName</button> */}
    </div>
  );
}

