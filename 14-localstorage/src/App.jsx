import React from 'react'

const App = () => {

const user={
  username:'shreya',
  age:90,
  city:'gorakhpur'
}

localStorage.setItem('user',user);
let data=localStorage.getItem('user');
  return (
    <div>
      App
    </div>
  )
}

export default App
