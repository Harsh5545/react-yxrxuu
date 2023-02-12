import React,{useState,useEffect} from "react";
import "./style.css";

export default function App() {
  const[data,setData]=useState([])
 useEffect(()=>{
  const fetchData= async () =>{
    fetch("https://jsonplaceholder.typicode.com/posts")
   .then((res)=>res.json())
   .then((data)=>setData(data))}
   fetchData()
 },[])
//  console.log(data)
  return (
    <div className='main'>
<table>
  <thead>
    <tr>
    <th>UserId</th>
      <th>Title</th>
      <th>Text</th>
    </tr>
  </thead>
  <tbody>
    {
      data.map((x,id)=>{
     return   <tr key={id}>
          <td>{x.userId}</td>
          <td>{x.title}</td>
          <td>{x.body}</td>
        </tr>
      })
    }
  </tbody>
     </table>
    </div>
  );
}
