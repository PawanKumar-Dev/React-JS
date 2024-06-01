import React from 'react'
import { useParams } from 'react-router-dom'

const Contact = () => {
 const params = useParams()

 return (
  <div>
   Contact Us page: {params.name}
  </div>
 )
}

export default Contact
