import React from 'react'

function Navbar() {
  return (
    <div className="bg-white py-4 px-6 flex justify-center items-center space-x-[600px]">
       
       
        <div className="flex space-x-6">
          <a href="#" className="text-teal-600">Home</a>
          <a href="#" className="text-gray-700">Shop</a>
          <a href="#" className="text-gray-700">Products</a>
          <a href="#" className="text-gray-700">Pages</a>
          <a href="#" className="text-gray-700">About</a>
        </div>
        
        
        <div className="text-gray-700">
          <span>Contact: </span>
          <span className="font-semibold">(808) 555-0111</span>
        </div>
      
    </div>
  )
}

export default Navbar