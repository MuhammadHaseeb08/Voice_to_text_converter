import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'

const Info = () => {
    let [navLinks, setnavLinks] = useState([])
    let data = useSelector((sore) => {
        return sore.Nav
    })
    useEffect(() => {
        setnavLinks(data)
    }, [])
    return (
        <div>
              <hr/>
            <div className='flex justify-center     '>
                <div className='flex-col    text-orange-600 pt-32  text-center w-auto '>
                    <div className=' md:text-3xl text-4xl font-bold'>
                        Read.

                    </div>
                    <div className='md:flex-row flex flex-col lg:flex-row mt-6 '>
                        {
                            navLinks.map((item, i) => {
                                return (

                                    <a className=" md:mr-10 text-gray-900">{item}</a>

                                )
                            })
                        }
                    </div>

                </div>
            </div>
          
        </div>
    )
}

export default Info