import { useSelector, useDispatch } from "react-redux";

import {
  addStudent,
  addString,
  selectworkerList,
  selectStudentList,
} from "./Reducers/StudentSlice";

export default function App() {
  const studentList = useSelector(selectStudentList);
  const workerList = useSelector(selectworkerList);
  const dispatch = useDispatch( );


   function UserDataFromInput()
{
  let name =document.getElementById('name').value;
  let id=document.getElementById('id').value;
  let newstudent=
    {name:name,id:id}
  dispatch(addStudent(newstudent))

  console.log(name + id)
}
  return (
    <div className="App">
      <h1> student data</h1>
     
{studentList.map((data) => (
  <div>
    <h1>Student_Name: {data.name}</h1>
    <p>Id:{data.id}</p>
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

