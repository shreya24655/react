import React, { useEffect, useState } from 'react'
import axios from 'axios';
const App = () => {
  const [userData, setUserData]=useState([]);
  const [index,setIndex]=useState(1);

   const getData=async()=>{
      const response=await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=30`)
      setUserData(response.data)
     
    }

    useEffect(function(){
      getData()
    },[index])
  
  let printUserData=<h3 className='text-gray-500 text-xs absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>loading...</h3>

   if(userData.length>0){
    printUserData=userData.map(function(elem,idx){
      return <div key={elem.id}>
        <a href={elem.url}>
          <div className='h-40 w-44 overflow-hidden rounded-xl'>
        <img className='h-full w-full object-cover ' src={elem.download_url} alt=""/>
      </div>
        </a>
      <h3 className='text-gray-500 font-bold text-lg'>{elem.author}</h3>
      </div>
    })
   }

  return (
    <div className='bg-black overflow-auto h-screen p-4 text-white'>    
      <div className='flex  flex-wrap gap-3 pb-20'> 
        {printUserData}
      </div>

      <div className='flex justify-center gap-6 items-center p-4 mt-8'>
      <button 
      style={{opacity:index==1 ? 0.6 :1}}
      className='bg-amber-400 text-xl cursor-pointer active:scale-95 text-black rounded w-20 h-11 font-semibold'
       onClick={()=>{
        if(index>1){
          setIndex(index-1)
          setUserData([])
        }
      }}>
      Prev</button>
      <button className='bg-amber-400 text-xl
      cursor-pointer active:scale-95 text-black rounded w-20 h-11 font-semibold'
       onClick={()=>{
        setUserData([])
        setIndex(index+1)
      }}>Next</button>
      </div>
    </div>
  )
}

export default App