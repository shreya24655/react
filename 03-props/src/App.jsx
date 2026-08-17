import React from 'react'
import Card from './components/Card'
const App = () => {
  return (
    <div className='parent'>
     <Card user='shreya singh' age={18} img="https://plus.unsplash.com/premium_photo-1786480198143-e307d4e3e17c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMzd8fHxlbnwwfHx8fHw%3D"/>
       <Card user='juhi' age={15} img="https://images.unsplash.com/photo-1786684597670-f90b4f752cd2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2MHx8fGVufDB8fHx8fA%3D%3D"/>
 <Card user='swastika' age={14} img="https://images.unsplash.com/photo-1786148270993-f610fd5c8bc1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0Nnx8fGVufDB8fHx8fA%3D%3D"/>

    </div>
  )
}

export default App
