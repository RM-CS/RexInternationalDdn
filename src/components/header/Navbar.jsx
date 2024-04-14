import React, { useState } from 'react'
import { FaCaretDown } from 'react-icons/fa'
import { Menu, X } from 'lucide-react'
import { Link } from 'react-router-dom'
import Image1 from '../../assets/logo.png'
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';

const MenuLinksOne = [
    {
        id: 1,
        name: "Home",
        link: "/"
    },
    {
        id: 2,
        name: "About",
        link: "/about"
    }
]
const DropdownlinksOne = [
    {
        id: 1,
        name: "Enviroment Friendly Green Chemicals",
        link: "/products/enviroment_friendly_green_chemicals"
    },
    {
        id: 2,
        name: "Housekeeping and Sanitization products",
        link: "/products/housekeeping_and_sanitization_products"
    },
    {
        id: 3,
        name: "Paper products and dispensing system",
        link: "/products/paper_products_and_dispensing_system"
    }
]


const DropdownlinksTwo = [
    {
        id: 1,
        name: "Bio-Septic For Septic Tank",
        link: "/enzyme/bio-septic_for_septic_tank"
    },
    {
        id: 2,
        name: "FatoX-For Fat And Oil Deposition",
        link: "/enzyme/fatox-for_fat_and_oil_deposition"
    },
    {
        id: 3,
        name: "Manura",
        link: "/enzyme/manura"
    },
    {
        id: 4,
        name: "Urix-Waterless Urinal Solution",
        link: "/enzyme/urix-waterless_urinal_solution"
    },
    {
        id: 5,
        name: "Aqua",
        link: "/enzyme/aqua"
    }    
]
const MenuLinksTwo =
    [{
        id: 1,
        name: "Contact Us",
        link: "/contact"
    }
]

const Navbar = () => {
    const [nav, setNav] = useState(true)
    const handleNav =()=>{
        setNav(!nav)
    }
  return (
    <>    
      <nav className='bg-white text-black px-[100px] py-2 lg:w-full top-0 justify-between md:text-x md:flex md:fixed hidden z-[50]'>
        <div className='md:flex'>
            <Link to="/"><img src={Image1} alt="" width="140" /></Link>
        </div>
        <ul className='md:hidden md:items-center lg:flex hidden font-semibold'>
            <li className='px-4'>For Enquiry :  <CallIcon className='text-[#14b7b1]' /> +91 75052 07041</li> 
            <li className='text-[#14b7b1]'>|</li> 
            <li className='px-4'><EmailIcon className='text-[#14b7b1]' /> sales.admin@rexinternationalddn.in</li>
        </ul>
        <ul className='md:flex md:items-center'>
          <li className='px-2 flex py-4 space-x-4 justify-center '>
            <Link to="/contact" className="bg-green-900 capitalize text-white font-medium px-4 py-2 rounded-md hover:bg-green-500">
                Procure a quote
            </Link>
            </li>
        </ul>
    </nav>
    <div className='bg-[#05417c] capitalize lg:w-full top-20 z-[50] md:fixed'>
        <div className='flex justify-end items-center h-16 max-w-[1240px] mx-auto px-4'>
            <ul className='md:hidden lg:flex hidden'>
                {
                    MenuLinksOne.map((data, index)=>(
                        <li key={index}>
                            <Link to={data.link} className='px-4 font-semibold text-white hover:bg-white hover:rounded-xl hover:text-[#14b7b1] duration-100 text-lg '>{" "}{data.name}</Link>
                        </li>
                ))}
                {/* Dropdown */}
                    <li className='relative cursor-pointer group'>
                        <Link to="#" className='font-semibold flex gap-[2px] px-4 text-white hover:bg-white hover:rounded-xl hover:text-[#14b7b1] duration-100 text-lg'>
                            Products
                            <span>
                            <FaCaretDown className='group-hover:rotate-180 duration-300 mt-1' />
                        </span>
                        </Link>
                        {/* Dropdown Links */}
                        <div className='absolute z-[999] hidden group-hover:block w-[300px] rounded-md bg-white/80 shadow-md p-2 mt-1 '>
                            <ul className='space-y-2'>
                                {
                                    DropdownlinksOne.map((data, index)=>(
                                        <li key={index}>
                                        <Link 
                                        className='text-slate-900 duration-200 inline-block p-2 hover:text-slate-900 hover:bg-blue-300 font-semibold rounded-md w-full'
                                        to={data.link}>{data.name}</Link>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                        
                    </li>
                   
                    {/* Dropdown */}
                    {/* <li className='relative cursor-pointer group'>
                        <Link to="#" className='font-semibold flex gap-[2px] px-4 text-white hover:text-[#14b7b1] hover:rounded-xl hover:bg-white duration-100 text-lg'>
                            Our Enzyme
                            <span>
                            <FaCaretDown className='group-hover:rotate-180 duration-300 mt-1' />
                        </span>
                        </Link> */}
                        {/* Dropdown Links */}
                        {/* <div className='absolute z-[999] hidden group-hover:block w-[300px] rounded-md bg-white/80 shadow-md p-2 '>
                            <ul className='space-y-2'>
                                {
                                    DropdownlinksTwo.map((data, index)=>(
                                        <li key={index}>
                                        <Link 
                                        className='text-slate-900 duration-200 inline-block p-2 hover:text-slate-900 hover:bg-blue-300 font-semibold rounded-md w-full'
                                        to={data.link}>{data.name}</Link>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                                    
                    </li> */}
                    {
                    MenuLinksTwo.map((data, index)=>(
                        <li key={index}>
                            <Link to={data.link} className='font-semibold text-white hover:bg-white hover:rounded-xl hover:text-[#14b7b1] duration-100 text-lg px-4'>{" "}{data.name}</Link>
                        </li>
                    ))}
            </ul>
            <div onClick={handleNav} className='block lg:hidden z-30 top-0 sticky'>
            
                {!nav ? <X  className='text-2xl text-white cursor-pointer fixed right-4 top-5' /> : <Menu  className='text-2xl w-10 rounded-xl bg-[#05417c]/80 text-white cursor-pointer fixed right-4 top-5' />}
            </div>
            <div className={!nav ? 'fixed left-0 pt-40 w-full duration-500 bg-[#05417c]/80 lg:hidden' : 'lg:hidden fixed left-[-90%]'}>

                <ul className='pt-4'>
                {
                    MenuLinksOne.map((data, index)=>(
                        <li key={index} className='py-2'>
                            <Link to={data.link} className='px-4 font-semibold text-white hover:bg-white hover:text-[#14b7b1] hover:rounded-xl duration-100 text-lg '>{" "}{data.name}</Link>
                        </li>
                    ))}
                      {/* Dropdown */}
                      <li className='relative cursor-pointer group py-2'>
                      <Link to="#" className='font-semibold flex gap-[2px] w-28 px-4 text-white hover:bg-white hover:rounded-xl hover:text-[#14b7b1] duration-100 text-lg'>
                            Products
                            <span>
                            <FaCaretDown className='group-hover:rotate-180 duration-300 mt-1' />
                        </span>
                        </Link>
                            {/* Dropdown Links */}
                            <div className='absolute z-[1000] hidden group-hover:block w-[300px] rounded-md bg-white/80 m-auto shadow-md p-2 '>
                                <ul className='space-y-2'>
                                    {
                                        DropdownlinksOne.map((data, index)=>(
                                            <li key={index}>
                                            <Link 
                                            className='text-slate-900 duration-200 inline-block p-2 hover:bg-blue-300 font-semibold rounded-md w-full'
                                            to={data.link}>{data.name}</Link>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>                                    
                        </li>
                              
                            {/* Dropdown */}
                            <li className='relative cursor-pointer group py-2'>
                                <Link to="#" className='font-semibold flex gap-[2px] w-40 px-4 text-white hover:bg-white hover:rounded-xl hover:text-[#14b7b1] duration-100 text-lg'>
                                    Our Enzyme
                                    <span>
                                    <FaCaretDown className='group-hover:rotate-180 duration-300 mt-1' />
                                </span>
                                </Link>
                                {/* Dropdown Links */}
                                <div className='absolute z-[999] hidden group-hover:block w-[300px] rounded-md bg-white/80 shadow-md p-2 '>
                                    <ul className='space-y-2'>
                                        {
                                            DropdownlinksTwo.map((data, index)=>(
                                                <li key={index}>
                                                <Link 
                                                className='text-slate-900 duration-200 inline-block p-2 hover:bg-blue-300 font-semibold rounded-md w-full'
                                                to={data.link}>{data.name}</Link>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </div>
                                    
                            </li>
                            {
                            MenuLinksTwo.map((data, index)=>(
                                <li key={index} className='py-2'>
                                    <Link to={data.link} className='font-semibold text-white hover:bg-white hover:text-[#14b7b1] hover:rounded-xl text-lg duration-200 px-4'>{" "}{data.name}</Link>
                                </li>
                            ))}
                </ul>
            </div>

        </div>
    </div>
    </>
   
  )
}

export default Navbar