import React from 'react'
import { NavLink } from 'react-router'

const Navbar = () => {
  return (
    <>
      <div className="mt-2 p-4 flex justify-between items-center">
        <NavLink to="/" className="brand">
          <img
            src='/src/assets/images/brand-logo.png'
            alt='logo'
          />
          Expensy
        </NavLink>
        <div className="flex items-center">
          <img src='/src/assets/images/sample_avatar.png' alt='user' className="w-8 h-8 aspect-ratio rounded-full" />
          <p className="ml-2">John Doe</p>
        </div>
        <p>
          <NavLink to="/auth/login" className="text-blue-500">Login</NavLink>
        </p>
      </div>
    </>
  )
}

export default Navbar