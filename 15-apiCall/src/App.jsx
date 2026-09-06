import React from 'react'
import axios from 'axios'
import { useState } from 'react';
const App = () => {

/* async function getData(){
  const response= await fetch('https://jsonplaceholder.typicode.com/todos/1')
  console.log(response);
}*/
/*
const getData=async()=>{
  const response= await fetch('https://jsonplaceholder.typicode.com/todos')
  const data=await response.json()
    console.log(response)
    console.log(data)
}*/
/*
const getData =async()=>{
//const response=await axios.get('https://jsonplaceholder.typicode.com/todos')
//console.log(response.data);

const {data}=await axios.get('https://jsonplaceholder.typicode.com/todos')
console.log(data);
}*/

const [data, setData] = useState([]);

const getData =async()=>{

  const response=await axios.get('https://picsum.photos/v2/list');
  console.log(response.data);
  setData(response.data);
}

  return (
    <div >
     <button onClick={getData}>Get Data</button>
     <div>
{data.map(function(elem,idx){
 return( <div key={elem.id}>
 <img src={elem.download_url} width='200' height='300'/>
 </div>);
})}

     </div>
    </div>
  )
}

export default App
