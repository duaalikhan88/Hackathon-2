import React from 'react'

function Footer() {
  return (
    <div>

        <br></br>
        <br></br>
        <footer className="bg-white text-black py-10">
  <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
    
   
    <div>
      <img
      src="/images/Logo.png"
      />
      <p className="mt-4">
        Vivamus tristique odio sit amet velit semper, eu posuere turpis interdum. Cras egestas purus.
      </p>
      <div className="flex mt-4 space-x-4">
        <a href="#"><i className="fab fa-facebook"></i></a>
        <a href="#"><i className="fab fa-twitter"></i></a>
        <a href="#"><i className="fab fa-instagram"></i></a>
        <a href="#"><i className="fab fa-pinterest"></i></a>
        <a href="#"><i className="fab fa-youtube"></i></a>
      </div>
    </div>
    
   
    <div>
      <h3 className="text-xl font-semibold">Category</h3>
      <ul className="mt-4 space-y-2">
        <li><a href="#">Sofa</a></li>
        <li><a href="#">Armchair</a></li>
        <li><a href="#">Wing Chair</a></li>
        <li><a href="#">Desk Chair</a></li>
        <li><a href="#">Wooden Chair</a></li>
        <li><a href="#">Park Bench</a></li>
      </ul>
    </div>
    
   
    <div>
      <h3 className="text-xl font-semibold">Support</h3>
      <ul className="mt-4 space-y-2">
        <li><a href="#">Help & Support</a></li>
        <li><a href="#">Terms & Conditions</a></li>
        <li><a href="#">Privacy Policy</a></li>
        <li><a href="#">Help</a></li>
      </ul>
    </div>
   
    <div>
      <h3 className="text-xl font-semibold">Newsletter</h3>
      <p className="mt-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim.
      </p>
      <input type="email" placeholder="Enter your email" className="mt-4 p-2 w-full text-black"/>
    </div>
  </div>

  <div className="border-t border-gray-700 mt-8 pt-8 flex justify-between items-center">
    <p>© 2021 - Blogy - Designed & Developed by Zakirsoft</p>
    <div className="flex space-x-4">
      <img src="/images/Group 13.png" alt="MasterCard" className="  h-10"/>
      
    </div>
  </div>
</footer>

    </div>
  )
}

export default Footer