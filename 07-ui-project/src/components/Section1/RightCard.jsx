import React from 'react'

const RightCard = () => {
  return (
    <div className='relative h-full overflow-hidden w-80 rounded-4xl'>
        <img  className='h-full w-full object-cover rounded-4xl' src='https://plus.unsplash.com/premium_photo-1661769159995-f3af0089875f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D'/>
         <div className='absolute top-0 left-0 h-full w-full p-7 flex flex-col justify-between'>
            <h2 className='bg-white text-2xl font-semibold rounded-full h-14 w-14 flex justify-center items-center'>1</h2>
            <div>
                 <p className='text-lg leading-normal'>Lorem ipsum dolor sit amet consectetur adipisicing elit. A vitae repellat nulla accusamus debitis. Voluptates.</p>
                  </div>
            <button className='bg-blue-400 text-white font-semibold px-7 py-3 rounded-full'>Satisfied</button>
            <button><i className="ri-arrow-right-long-fill"></i></button>
           
         </div>
    </div>
  )
}

export default RightCard
