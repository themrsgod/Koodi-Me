import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className='logo'>Koodi-Me</span>
      <div className='user'>
        <img src="" alt="" />
        <span>User Name</span>
        <button>Logout</button>
      </div>
    </div>
  )
}

export default Navbar