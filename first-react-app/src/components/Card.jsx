import React from 'react'
import './Card.css'

const Card = (props) => {
 return (
  <div className='card'>
   <img src='https://source.unsplash.com/random/400×250' />
   <h3 style={{ color: "red" }}>{props.title}</h3>
   <p>{props.desc}</p>
  </div>
 )
}

export default Card