import React from 'react'

const Mainba = () => {
  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 text-white font-bold text-2xl">
            sumit bsdk
          </div>

          {/* Menu Items */}
          <div className="flex space-x-4">
            <a href="/" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
              Home
            </a>
            <a href="/products" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
              Products
            </a>
            <a href="/login" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
              Login
            </a>
            <a href="/signup" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
              Signup
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Mainba