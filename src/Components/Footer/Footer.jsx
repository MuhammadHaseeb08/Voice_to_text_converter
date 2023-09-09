import React from 'react'

const Footer = () => {
  return (
    <div className=' mt-11  '>
 <footer className="text-gray-600 body-font">
  <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
    <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4  sm:py-2 sm:mt-0 mt-4">
     
      
      © 2023 Copyright, All Right Reserve for HS 7 Inc.
      
    </p>
    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
      <a className="text-gray-500">
       
        <img src="/images/logo-facebook.png" alt="" />
      </a>
      <a className="ml-3 text-gray-500">
      <img src="/images/logo-instagram.png" alt="" />
      </a>
      <a className="ml-3 text-gray-500">
      <img src="/images/logo-linkedin.png" alt="" />
      </a>
    
    </span>
  </div>
</footer>

    </div>
  )
}

export default Footer