import React from 'react'

function Nippy() {
  return (
    
    <div className="container flex flex-col-reverse  md:flex-row items-center px-16 mx-auto mt-10 space-y-0 md:space-y-12 md: mb-32">
       <div className= "flex flex-col mb-32  md:w-1/2">
       <h1 className= "max-w-md mt-10 text-2xl font-bold text-center md:text-3xl md:text-left  ">Nappy Pad </h1>
        <p className='max-w-md mt-10 text-center text-darkGrayishBlue md:text-left'>We have locations everywhere and you can find nappy  near you.</p>   
       <div className="my-5 flex justify-center md:justify-start ">
         <a href="#" class="p-3 px-6 pt-2 mt-5 text-white bg-amber-600 rounded-full baseline hover:bg-yellow-600 md:block">Booking</a>
       </div>
    </div>
    <div className=" md:w-1/2 ">
            <img className="" src="Sleeping.svg " alt="banner-1" />
        </div>
    </div>
  )
}

export default Nippy