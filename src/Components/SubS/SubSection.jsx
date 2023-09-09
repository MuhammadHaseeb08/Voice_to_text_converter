import React from 'react'
import SubCard from '../SubCard/SubCard'
import { useState,useEffect } from 'react'
const SubSection = () => {
  return (
    <div>
        <div>
        <div className=' flex-col space-y-20 md:space-y-40 mt-16'>
                    <div className='flex justify-center    '>
                        <div className='flex-col items-center  flex justify-center text-grey-900 pt-28 font-semibold  '>
                            <div className='   md:text-4xl lg:text-4xl text-2xl'>
                            24/7 Homework Help

                            </div>
                            <div className=' text-slate-600  text-lg pt-5 w-3/4 pl-8 text-center'>
                               
                            Explore some of our best tools & get 24/7 support for your asssignments
                            </div>
                            <div className=' text-slate-600  text-lg pt-2'>
                               
                            
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-center  text-white '>
                     <SubCard/> 
                    </div>
                    <div className="flex justify-center ">
     
        <button className=" bg-inherit text-orange-600 border-2 border-orange-600 py-2 px-6   text-lg">
        Get Homework Help
        </button>
      </div>
                </div>
        </div>
    </div>
  )
}

export default SubSection