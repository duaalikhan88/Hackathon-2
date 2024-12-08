
import React from "react";

function Hero() {
  return (
    <div>
    <div className=" -mt-20 bg-white flex justify-center items-center h-[800px] ">
      
      <div className="w-[1150px] h-[600px] bg-gray-100 flex rounded-bl-3xl shadow-lg p-8 relative">
       
        <div className="w-1/2 flex flex-col justify-center space-y-6">
          <h1 className="text-gray-600 text-sm uppercase tracking-wide">
            Welcome to Chairy
          </h1>
          <p className="text-4xl md:text-5xl font-bold leading-tight text-gray-800">
            Best Furniture Collection <br />
            For Your Interior.
          </p>
          <button className="bg-[#029FAE] text-white px-3 py-2 rounded-lg hover:bg-blue-600  flex items-center gap-2">
            Shop Now{" "}
            <span className="ml-2 text-xl">
              →
            </span>
          </button>
        </div>

       
        <div className="w-1/2 relative">
          <img
            src="/images/chair.png"
            alt="Chair"
            className="w-[350px] h-[450px] object-contain mx-auto"
          />
          
        </div>
      </div>
    </div>
    <div className="flex justify-items items-center gap-4 w-[1321px] h-[139px]">
   
          <img
            src="/images/logos/logo1.png"
            alt="logo"
            className="w-[80px] h-[90px] object-contain mx-auto"
          />
          <img
            src="/images/logos/logo2.png"
            alt="logo"
            className="w-[80px] h-[90px] object-contain mx-auto"
          />
          <img
            src="/images/logos/logo3.png"
            alt="logo"
            className="w-[80px] h-[90px] object-contain mx-auto"
          />
          <img
            src="/images/logos/logo4.png"
            alt="logo"
            className="w-[80px] h-[90px] object-contain mx-auto"
          />
          <img
            src="/images/logos/logo5.png"
            alt="logo"
            className="w-[80px] h-[90px] object-contain mx-auto"
          />
          <img
            src="/images/logos/logo6.png"
            alt="logo"
            className="w-[80px] h-[90px] object-contain mx-auto"
          />
          <img
            src="/images/logos/logo7.png"
            alt="logo"
            className="w-[80px] h-[90px] object-contain mx-auto"
          />
          
    </div>
    <h1 className="text-4xl font-bold ml-10">Featured Product</h1>
    <div className="flex justify-center items-center ml-2 mt-10 ">
          <img
            src="/images/featured/p1.png"
            alt="logo"
            className="w-[312px] h-[377px] object-contain mx-auto"
          />
          <img
            src="/images/featured/p2.png"
            alt="logo"
            className="w-[312px] h-[377px] object-contain mx-auto"
          />
         <img
            src="/images/featured/p3.png"
            alt="logo"
            className="w-[312px] h-[377px] object-contain mx-auto"
          />
          <img
            src="/images/featured/p4.png"
            alt="logo"
            className="w-[312px] h-[377px] object-contain mx-auto"
          />


    </div>
    <h1 className="text-4xl font-bold ml-10 mt-20 ">Top Category</h1>
    <div className="flex items-center justify-center gap-2">
    <img
            src="/images/Category/c1.png"
            alt="logo"
            className="w-[312px] h-[377px] object-contain mx-auto"
          />
        <img
            src="/images/Category/c2.png"
            alt="logo"
            className="w-[312px] h-[377px] object-contain mx-auto"
          />
     <img
            src="/images/Category/c3.png"
            alt="logo"
            className="w-[312px] h-[377px] object-contain mx-auto"
          />
          </div>

          <img
          src="/images/Category/hot-category.png"
          alt="chair"
          className="w-[1000px] h-[600] ml-40 mt-20"

          />


 
  
<div className="flex flex-col items-center justify-center mt-10">
  <h1 className="text-4xl font-bold mb-10">Our Products</h1>
  <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 -pl-10">
    <img
      src="/images/Products/p1.png"
      alt="chair"
      className="w-[250px] h-[300px] ml-10 mt-5"
    />
    <img
      src="/images/Products/p2.png"
      alt="chair"
      className="w-[250px] h-[300px] ml-10 mt-5"
    />
    <img
      src="/images/Products/p3.png"
      alt="chair"
      className="w-[250px] h-[300px] ml-10 mt-5"
    />
    <img
      src="/images/Products/p4.png"
      alt="chair"
      className="w-[250px] h-[300px] ml-10 mt-5"
    />
    <img
      src="/images/Products/p5.png"
      alt="chair"
      className="w-[250px] h-[300px] ml-10 mt-5"
    />
    <img
      src="/images/Products/p6.png"
      alt="chair"
      className="w-[250px] h-[300px] ml-10 mt-5"
    />
    <img
      src="/images/Products/p7.png"
      alt="chair"
      className="w-[250px] h-[300px] ml-10 mt-5"
    />
    <img
      src="/images/Products/p8.png"
      alt="chair"
      className="w-[250px] h-[300px] ml-10 mt-5"
    />
  </div>
</div>

  
 
</div>

         
          



    
  )
}

export default Hero;