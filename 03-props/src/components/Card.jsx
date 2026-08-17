import React from 'react'

const Card = (props) => {
  return (
<div className="card">
<img
    src={props.img}
    alt="Shreya Singh"
 />
<h1>{props.user}</h1>
<p>sbbd fjdsah gfsdf gk sgfjs rgf saf fkgf jsh fsdf</p>
<button>View Profile</button>
</div>  
  )
}

export default Card
