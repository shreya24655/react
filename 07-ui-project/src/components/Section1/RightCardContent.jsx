import React from 'react'

const RightCardContent = (props) => {
  return (
    <div className='absolute top-0 left-0 h-full w-full p-7 flex flex-col justify-between'>
        <h2 className='bg-white text-2xl font-semibold rounded-full h-14 w-14 flex justify-center items-center'>{props.id+1}</h2>
            <div>
          <p className='text-lg leading-normal font-medium text-white mb-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. A vitae repellat nulla accusamus debitis. Voluptates.</p>
         <div className='flex justify-between '>
          <button className='bg-blue-400 text-white font-semibold px-7 py-3 rounded-full'>{props.tag}</button>
          <button className='bg-blue-400 text-white font-medium px-4 py-4 rounded-full'><i className="ri-arrow-right-long-fill"></i></button>
          </div>
         </div>
         </div>
  )
}

export default RightCardContent
