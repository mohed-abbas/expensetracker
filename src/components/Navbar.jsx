import React from 'react'

const Navbar = () => {
  return (
    <>
      <div className="mt-2 p-4 flex justify-between items-center">
        <a href="/test" className="brand">
          <img
            src='/src/assets/images/brand-logo.png'
            alt='logo'
          />
          Expensy
        </a>
        <div className="flex items-center">
          <img src='/src/assets/images/sample_avatar.png' alt='user' className="w-8 h-8 aspect-ratio rounded-full" />
          <p className="ml-2">John Doe</p>
        </div>
      </div>
    </>
  )
}

export default Navbar