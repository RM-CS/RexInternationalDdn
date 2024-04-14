import React from 'react'
import Logo from "../../assets/logo.png"
import { Link } from "react-router-dom"
import { Facebook, GitHub, Instagram, LinkedIn, Twitter, WhatsApp } from '@mui/icons-material'

const Footer = () => {
  
  return (
    <>
    <div>
            <footer className="relative bg-slate-500 pt-8 pb-6 z-40">
        <div
          className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
          style={{ height: 85 }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x={0}
            y={0}
          >
            <polygon
              className="text-slate-500 fill-current"
              points="2560 0 2560 100 0 100"
            />
          </svg>
        </div>
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap">
            <div className="w-full lg:w-6/12 px-4">
            <Link to="/">
                        <img
                            src={Logo}
                            alt="logo"
                            className="rounded-xl mt-12 w-80"
                        />
                </Link>
              <h5 className="text-lg mt-0 mb-2 text-gray-300">
                Find us on any of these platforms, we respond 1-2 business days.
              </h5>
              <div className="mt-6">
                <a href='/'
                  className="bg-white text-blue-400 shadow-lg font-normal h-11 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
                ><Twitter />
                </a>
                <a href="https://www.facebook.com/profile.php?id=100080300559808" target='_blank' rel="noreferrer"
                  className="bg-white text-blue-600 shadow-lg font-normal h-11 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
                  
                ><Facebook />
                </a>
                <a href='/'
                  className="bg-white text-pink-400 shadow-lg font-normal h-11 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
                ><Instagram />
                </a>
                 <a href='/'
                  className="bg-white text-gray-900 shadow-lg font-normal h-11 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
                ><LinkedIn className='text-blue-800' />
                </a>
                 <a href='/'
                  className="bg-white text-gray-900 shadow-lg font-normal h-11 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
                ><WhatsApp className='text-green-500' />
                </a>
              </div>
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="flex flex-wrap items-top mb-6">
                <div className="w-full lg:w-4/12 px-4 ml-auto">
                  <span className="block uppercase text-gray-200 text-sm font-semibold mb-2">
                    Useful Links
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <Link
                        className="text-gray-300 hover:text-gray-100 font-semibold block pb-2 text-sm"
                        to="/about"
                      >
                        About
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="text-gray-300 hover:text-gray-100 font-semibold block pb-2 text-sm"
                        to="/products/housekeeping_and_sanitization_products"
                      >
                        Products
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="text-gray-300 hover:text-gray-100 font-semibold block pb-2 text-sm"
                        to="/contact"
                      >
                        Contact us
                      </Link>
                    </li>
                    
                  
                  </ul>
                </div>
                <div className="w-full lg:w-4/12 px-4">
                  <span className="block uppercase text-gray-200 text-sm font-semibold mb-2">
                    Other Resources
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <a
                        className="text-gray-300 hover:text-gray-100 font-semibold block pb-2 text-sm"
                        href="/"
                      >
                        Terms &amp; Conditions
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-gray-300 hover:text-gray-100 font-semibold block pb-2 text-sm"
                        href="/"
                      >
                        Privacy Policy
                      </a>
                    </li>
                    
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-400" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-1/2 px-4 mx-auto text-center">
              <div className="text-sm text-gray-400 font-semibold py-1">
                Copyright ©  2024 All Rights Reserved by Rex International Dehradun
              </div>
            </div>
          </div>
        </div>
      </footer>

    </div>

    </>
  )
}

export default Footer