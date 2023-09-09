import React from 'react'
import { useSelector } from 'react-redux'
// import { useState,useEffect } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const Hproducrts = () => {
    let [navLinks,setnavLinks]=useState([])
    let data=useSelector((sote)=>{
        return sote.hData
    })
    useEffect(() => {
        setnavLinks(data)
    }, [])
  
  return (
    <div>
        <div className=' flex md:gap-x-12 md:flex-row lg:flex-row lg:gap-x-12 flex-col gap-y-5'>
            {
                navLinks.map((item,i)=>{
                    return(
                        <div className='w-56 bg-white h-32 rounded-lg flex'>
                        <div className='w-1/2 flex justify-center items-center text-gray-900 text-lg font-bold shadow-lg pl-6'>
                            {item.name}
                        </div>
                        <div className='w-1/2 m-auto'>
                            <img src={`${item.image}`} alt="" width="100%" />
                        </div>
    
                </div>
                    )
                })
            }
           
            


        </div>
    </div>
  )
}

export default Hproducrts