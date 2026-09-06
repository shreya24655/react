import React from 'react'

const App = () => {

  const user={
    'name':'John',
    'age':30
  }

  localStorage.setItem('user',JSON.stringify(user));
   const data=localStorage.getItem('user');
   consoole.log(JSON.parse(data));
  return (
    <div>
      
    </div>
  )
}

export default App
