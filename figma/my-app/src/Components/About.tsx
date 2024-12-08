import React from 'react'

function About() {
  return (
    <div>
        <div className="flex justify-center items-start gap-2 mt-20">
            <img
            src="/images/about1.png"
            alt="about text"
            className="w-[500px] h-[350px]"
            />
             <img
            src="/images/about2.png"
            alt="about text"
            className="w-[500px] h-[350px]"
            />


        </div>
        <h1 className="text-4xl font-bold mt-20 text-center">What Makes Our Brand Diffrent</h1>
        <div className="flex items-center justify-center gap-3 mt-10">
            <img
            src="/images/fb1.png"
            alt="chair"
            className="w-[250px] h-[200px]"
            />
             <img
            src="/images/fb2.png"
            alt="chair"
             className="w-[250px] h-[200px]"
            />
             <img
            src="/images/fb3.png"
            alt="chair"
             className="w-[250px] h-[200px]"
            />
             <img
            src="/images/fb4.png"
            alt="chair"
             className="w-[250px] h-[200px]"
            />

        </div>
        <h1 className="text-4xl font-bold mt-20 pl-40">Our Popular Product</h1>
        <div  className="flex items-center justify-center gap-3 mt-10">
            <img
            src="/images/pc1.png"
            alt="pic"
            className="w-[550px] h-[400px]"
            />
           <img
            src="/images/pc2.png"
            alt="pic"
            className="w-[250px] h-[400px]"
            />
             <img
            src="/images/pc3.png"
            alt="pic"
            className="w-[250px] h-[400px]"
            />
    

        </div>
    </div>

  )
}

export default About