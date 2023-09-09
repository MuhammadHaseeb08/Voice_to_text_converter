import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'

const NavBar = () => {
    let [navLinks,setnavLinks]=useState([])
    let data=useSelector((sore)=>{
        return sore.Nav
    })
    useEffect(() => {
        setnavLinks(data)
    }, [])
    console.log(navLinks);
  return (
    <div>

<header className="text-gray-600 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <div className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
     
      <span className="ml-3 text-xl text-orange-600">Read.</span>
    </div>
    <nav className="md:mr-auto md:ml-4 md:py-1 	flex flex-wrap items-center text-base justify-center lg:pl-24  md:pl-24">
      {/* <a className="mr-5 hover:text-gray-900">Free Ebooks</a> */}
      {
        navLinks.map((item,i)=>{
            return(
                
                    <a className=" md:mr-10 text-gray-900">{item}</a>
               
            )
        })
      }
    </nav>
    <button className="inline-flex items-center text-white text-md bg-orange-600 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
    Sign In
     
    </button>
  </div>
</header>

    </div>
  )
}

export default NavBar