import React from 'react'
import { useState } from 'react'
// import { useSelector } from 'react'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
const SubCard = () => {
    let [navLinks, setnavLinks] = useState([])

    let data = useSelector((sote) => {
        return sote.subPar
    })
    useEffect(() => {
        setnavLinks(data)
    }, [])
    return (
        <div>

            <div className=' flex md:space-x-24 md:flex-row md:justify-center lg:flex-row lg:gap-x-12 flex-col    '>


                {
                    navLinks.map((item) => {
                        return (
                            <div>
                                <div className=' flex flex-col justify-center  items-center w-44 text-center  '>

                                    <div className=''>
                                        <img src={`${item.image}`} alt="sdf" width="100%" />
                                        {/* <img src="/images/a.png" alt="" /> */}
                                    </div>
                                    <div className=' '></div>
                                    <div className='  text-gray-900  md:text-lg lg:text-lg font-bold text-sm '>
                                        {item.name}
                                    </div>
                                    <div className=' text-slate-600  md:text-lg lg:text-lg font-bold text-sm  pt-4'>
                                        {item.des}
                                    </div>

                                </div>
                            </div>
                        )
                    })
                }

                {/* <div className='text-gray-900'>efsdf</div> */}








            </div>
        </div>
    )
}

export default SubCard