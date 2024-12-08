
import Image from "next/image";
import Topbar from "@/Components/Topbar";
import Midbar from "@/Components/Midbar";
import Navbar from "@/Components/Navbar";
import Hero from "@/Components/Hero";
import Products from "@/Components/Products";
import Single from "@/Components/Single";
import About from "@/Components/About";
import Question from "@/Components/Question";


import Footer from "@/Components/Footer";



export default function Home() {
  return (
   <div>
    <Topbar/>
    <Midbar/>
    <Navbar/>
    <Hero/>
    <Products/>
    <Single/>
    <About/>
    <Question/>
    
    
    <Footer/>
   
   </div> 
  )
}
