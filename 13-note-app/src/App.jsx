import React, { useState } from 'react'

const App = () => {


const [title, setTitle] = useState('');
const [details, setDetails] = useState('');
const [task,setTask]=useState([])


const submitHandler=(e)=>{
  e.preventDefault();
  const copyTask=[...task];

  copyTask.push({title,details})
  setTask(copyTask);
  

  setTitle('');
  setDetails('');
}

const deleteNote=(idx)=>{
  const copyTask=[...task];
  copyTask.splice(idx,1);
  setTask(copyTask);
}

  return (
    <div className='h-100 bg-black text-white lg:flex'>
     
      <form onSubmit={(e)=>{
        submitHandler(e);
      }} className='flex gap-4 lg:w-1/2 flex-col items-start p-10'>
        
         <h1 className='text-4xl font-bold'>Add Notes</h1>
        
         <input type="text" 
        placeholder='Enter Notes Heading'
        className='border-2 w-1/2 font-medium outline-none px-5 py-2 rounded'
       value={title}
       onChange={(e)=>{
        setTitle(e.target.value);
       }}
      />+
      
        <textarea 
        className='border-2 h-32 w-1/2 font-medium outline-none px-5 py-2 rounded' 
        placeholder='Enter details'
        value={details}
        onChange={(e)=>{
          setDetails(e.target.value)
        }}
        />


        <button className='bg-white active:scale-95 text-black outline-none w-1/2 flex items-start flex-row border-2 px-5 py-2 rounded-xl'>Add Note</button>
        </form>
        <div className='lg:w-1/2 lg:border-l-2 p-10'> 

         <h1  className='text-3xl font-bold'>Recent Notes</h1>
         <div className='flex gap-5 flex-wrap mt-5 h-full overflow-auto'>
         {task.map(function(elem,idx){

          return  <div key={idx} className=" flex justify-between flex-col item-starts relative h-50 w-40 rounded-2xl px-3 py-5 bg-cover bg-[url('https://i.pinimg.com/736x/a5/81/8b/a5818b17431161979026569dad91d35f.jpg')]" >
           <div>
            <h3 className='text-lg leading-tight font-bold text-black '>{elem.title}</h3>
            <p className='mt-2 leading-tight font-medium text-gray-700'>{elem.details}</p>
            </div>
             <button onClick={()=>{
                deleteNote(idx)
               }}  className='w-full cursor-pointer active:scale-95 bg-red-500 py-1 text-xs rounded font-bold text-white'>Delete</button>
            
            </div>

             })}
              
                
          </div> 
  </div>
</div>
  )
}


export default App
