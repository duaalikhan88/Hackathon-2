import React from 'react'

function Cart() {
  return (
    <div className="flex justify-center items-start mt-20">
        <div>
        <h1 className="text-4xl font-bold">Bag</h1>
        <img
        src="/images/bag1.png"
        alt="chair"
        className="w-[900px] h-[200px]"
        />
         <img
        src="/images/bag2.png"
        alt="chair"
        className="w-[900px] h-[200px]"
        />
        </div>
        <img
        src="/images/Frame.png"
        alt="frame"
        className="w-[300px] h-[250px]"
        />
    </div>
  )
}

export default Cart