import React from 'react'

function Single() {
  return (
    <div>
    <div className="flex justify-center items-start mt-20 gap-20">
        <img 
        src="/images/Image.png"
        alt="chair"
        className="w-[500px] h-[450px]"
        />
     <div>
        <h1 className="text-4xl font-bold">Library stool </h1>
        <h1 className="text-4xl font-bold">Chair</h1>
        <br></br>
        <button  className="bg-teal-500 text-white font-bold py-2 px-4 rounded-full">
        $20.00 USD

        </button>
        <hr className="mt-6 border-gray-400"/>
        <br></br>

        <p className="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing</p>
          <p className="text-gray-500">elit. Nullam tincidunt erat enim. Lorem ipsum dolor</p>
           <p className="text-gray-500">sit amet, consectetur adipiscing</p>
           <br></br>
           <button  className="bg-teal-500 text-white  py-2 px-4 rounded">
        ADD TO CART

        </button>
     </div>

    
    </div>
    <div className="flex justify-between items-center">
        <h1 className="text-4xl font-bold mt-20 pl-8">FEATURED PRODUCTS</h1>  
        <h1 className="text-2xl font-bold  mt-20 border-b-2 border-black pr-8 ">view all</h1>

     </div>
     <div className="flex items-center justify-center gap-10 mt-10 ">
     <img 
     src="/images/g1.png"
     alt="chair"
     className="w-[200px] h-[250px]"
     />
     <img 
     src="/images/g2.png"
     alt="chair"
     className="w-[200px] h-[250px]"
     /><img 
     src="/images/g3.png"
     alt="chair"
     className="w-[200px] h-[250px]"
     /><img 
     src="/images/g4.png"
     alt="chair"
     className="w-[200px] h-[250px]"
     /><img 
     src="/images/g5.png"
     alt="chair"
     className="w-[200px] h-[250px]"
     />
     </div>
    </div>
  )
}

export default Single