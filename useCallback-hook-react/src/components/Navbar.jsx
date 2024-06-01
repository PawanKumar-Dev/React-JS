import React, { memo } from 'react'

const Navbar = ({ color, setColor }) => {
 console.log('Navbar Rendered')
 return (
  <div>
   This is Navbar: {color}
   <button onClick={() => { setColor }}>button</button>
  </div>
 )
}

export default memo(Navbar)