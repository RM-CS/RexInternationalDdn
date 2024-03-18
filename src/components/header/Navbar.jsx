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
    const [nav, setNav] = useState(false)
    const handleNav =()=>{
        setNav(!nav)
    }
  return (
    <>
      <nav className='bg-white text-black py-2 px-[80px] sticky top-0 justify-between md:text-x md:flex hidden font-philosopher z-[50]'>
        <div className='md:flex'>
            <Link to="/"><img src={Image1} alt="image" /></Link>
        </div>
        <ul className='md:hidden md:items-center lg:flex hidden'>
            <li className='px-4'>For Enquiry :  <CallIcon /> +91 xxxxx xxxxx</li> 
            <li>|</li> 
            <li className='px-4'><EmailIcon /> rexinternationaldehradun@gmail.com</li>
        </ul>
        <ul className='md:flex md:items-center'>
          <li className='px-2 flex py-4 space-x-4 justify-center '> <Link to="/contact" className="bg-slate-900 uppercase text-blue-400 border border-blue-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group">
            <span className="bg-blue-400 shadow-blue-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
            Procure a quote
            </Link>
            </li>
        </ul>
    </nav>
    <div className='bg-slate-900 font-philosopher uppercase sticky top-20 z-[50]'>
        <div className=' flex justify-center items-center h-16 max-w-[1240px] mx-auto px-4'>
            <ul className='md:hidden lg:flex hidden'>
                {
                    MenuLinksOne.map((data, index)=>(
                        <li key={index}>
                            <Link to={data.link} className=' px-4 font-semibold text-blue-300 hover:text-red-500 dark:hover:text-red-500 hover:underline duration-200 text-lg '>{" "}{data.name}</Link>
                        </li>
                ))}
                {/* Dropdown */}
                    <li className='relative cursor-pointer group'>
                        <Link to="#" className='font-semibold flex gap-[2px] px-4 text-blue-300 hover:text-red-500 dark:hover:text-red-500 hover:underline text-lg'>
                            Products
                            <span>
                            <FaCaretDown className='group-hover:rotate-180 duration-300 mt-1' />
                        </span>
                        </Link>
                        {/* Dropdown Links */}
                        <div className='absolute z-[999] hidden group-hover:block w-[300px] rounded-md bg-white shadow-md p-2 '>
                            <ul className='space-y-2'>
                                {
                                    DropdownlinksOne.map((data, index)=>(
                                        <li>
                                        <Link 
                                        className='text-blue-800 duration-200 inline-block p-2 hover:text-red-500 hover:bg-red-200 font-semibold rounded-md w-full'
                                        to={data.link}>{data.name}</Link>

                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                        
                    </li>
                   
                    {/* Dropdown */}
                    <li className='relative cursor-pointer group'>
                        <Link to="#" className='font-semibold flex gap-[2px] text-blue-300 hover:text-red-500 dark:hover:text-red-500 hover:underline text-lg'>
                            Our Enzyme
                            <span>
                            <FaCaretDown className='group-hover:rotate-180 duration-300 mt-1' />
                        </span>
                        </Link>
                        {/* Dropdown Links */}
                        <div className='absolute z-[999] hidden group-hover:block w-[300px] rounded-md bg-white shadow-md p-2 '>
                            <ul className='space-y-2'>
                                {
                                    DropdownlinksTwo.map((data, index)=>(
                                        <li>
                                        <Link 
                                        className='text-blue-800 duration-200 inline-block p-2 hover:text-red-500 hover:bg-red-200 font-semibold rounded-md w-full'
                                        to={data.link}>{data.name}</Link>

                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                                    
                    </li>
                    {
                    MenuLinksTwo.map((data, index)=>(
                        <li key={index}>
                            <Link to={data.link} className='font-semibold text-blue-300 hover:text-red-500 dark:hover:text-red-500 hover:underline text-lg duration-200 px-4'>{" "}{data.name}</Link>
                        </li>
                    ))}
                

            </ul>
            <div onClick={handleNav} className='block lg:hidden z-30 top-0 sticky'>
            
                {!nav ? <X  className='text-2xl text-white cursor-pointer fixed right-4 top-28   ' /> : <Menu  className='text-2xl text-white cursor-pointer fixed right-4 top-28' />}
            </div>
            <div className={!nav ? 'fixed left-0 top-24 w-full duration-500 bg-slate-900 lg:hidden' : 'lg:hidden fixed left-[-80%]'}>

                <ul className='pt-4'>
                {
                    MenuLinksOne.map((data, index)=>(
                        <li key={index} className='py-2'>
                            <Link to={data.link} className='px-4 font-semibold text-slate-300 hover:text-red-500 dark:hover:text-red-500 hover:underline duration-200 text-lg '>{" "}{data.name}</Link>
                        </li>
                    ))}
                      {/* Dropdown */}
                      <li className='relative cursor-pointer group py-2'>
                                   <Link to="#" className='font-semibold flex gap-[2px] text-slate-300 hover:text-red-500 dark:hover:text-red-500 hover:underline px-4 text-lg'>
                                       Shop By Products
                                       <span>
                                       <FaCaretDown className='group-hover:rotate-180 duration-300 mt-1' />
                                   </span>
                                   </Link>
                                   {/* Dropdown Links */}
                                   <div className='absolute z-[1000] hidden group-hover:block w-[300px] rounded-md bg-white shadow-md p-2 '>
                                       <ul className='space-y-2'>
                                           {
                                               DropdownlinksOne.map((data, index)=>(
                                                   <li>
                                                   <Link 
                                                   className='text-blue-800 duration-200 inline-block p-2 hover:text-red-500 hover:bg-red-200 font-semibold rounded-md w-full'
                                                   to={data.link}>{data.name}</Link>

                                                   </li>
                                               ))
                                           }
                                       </ul>
                                   </div>
                                    
                               </li>
                              
                            {/* Dropdown */}
                            <li className='relative cursor-pointer group py-2'>
                                <Link to="#" className='flex font-semibold text-slate-300 hover:text-red-500 dark:hover:text-red-500 hover:underline text-lg px-4'>
                                    Our Enzyme
                                    <span>
                                    <FaCaretDown className='group-hover:rotate-180 duration-300 mt-1' />
                                </span>
                                </Link>
                                {/* Dropdown Links */}
                                <div className='absolute z-[999] hidden group-hover:block w-[300px] rounded-md bg-white shadow-md p-2 '>
                                    <ul className='space-y-2'>
                                        {
                                            DropdownlinksTwo.map((data, index)=>(
                                                <li>
                                                <Link 
                                                className='text-blue-800 duration-200 inline-block p-2 hover:text-red-500 hover:bg-red-200 font-semibold rounded-md w-full'
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
                                    <Link to={data.link} className='font-semibold text-slate-300 hover:text-red-500 dark:hover:text-red-500 hover:underline text-lg duration-200 px-4'>{" "}{data.name}</Link>
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