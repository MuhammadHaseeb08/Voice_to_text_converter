import React from 'react'
import Hproducrts from '../Hproducrts/Hproducrts'
const HeroSection = () => {
    return (
        <div className=' md:h-screen bg-gradient-to-r from-orange-700 to-orange-400 h-auto '>
            <div className='h-screen bg-hero  '>
                {/* <img src='/images/Group 36587.png'/> */}

                <div className=' flex-col space-y-20 md:space-y-40'>
                    <div className='flex justify-center    '>
                        <div className='flex-col items-center  md:text-6xl text-4xl text-white pt-32 font-bold text-center w-5/12 '>
                            <div className=''>
                                Get Things Done by    Awesome  Team

                            </div>
                           
                        </div>
                    </div>
                    <div className='flex justify-center  text-white '>
                    <Hproducrts/>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default HeroSection