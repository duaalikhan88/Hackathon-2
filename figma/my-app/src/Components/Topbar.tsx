import React from 'react'

function Topbar() {
  return (
    <div className="bg-[#2e2543] text-white text-sm px-4 py-2 flex justify-center items-center space-x-[650px]">
        <div className="flex items-center pl-3">
            <span className="text-white">✔ Free Shipping On All Orders Over $50</span>
        </div>
        <div className="flex items-center space-x-6 pl-3">
        <span className="cursor-pointer">Eng ⬇</span>
        <span className="cursor-pointer">FAQs</span>
        <span className="cursor-pointer">Need Help</span>
        </div>

    </div>
  )
}

export default Topbar;