import React from 'react'

const Navbar = () => {
 return (
  <nav className='flex justify-between bg-blue-900 text-white py-2'>
   <div className='logo'>
    <h1 className='font-bold text-xl mx-8'>Todo App</h1>
   </div>

   <ul className='flex gap-7 mx-8'>
    <li className='cursor-pointer'>Home</li>
    <li className='cursor-pointer'>About Us</li>
   </ul>
  </nav>
 )
}
export default Navbar