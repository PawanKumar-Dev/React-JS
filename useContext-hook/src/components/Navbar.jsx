import React, { useContext } from 'react'
import { counterContext } from '../context/context'

const Navbar = () => {
 const counter = useContext(counterContext)
 return (
  <div>
   Navbar Component is here: {counter}
  </div>
 )
}
export default Navbar