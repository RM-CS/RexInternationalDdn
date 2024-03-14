import React, { useState } from 'react'
import { FaCaretDown } from 'react-icons/fa'

import Logo from "../../assets/rexlogo.png"
import { Menu, X } from 'lucide-react'
import { Link } from 'react-router-dom'

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
        name: "Cizar Care Bio Septic",
        link: "/"
    },
    {
        id: 2,
        name: "Toilet Bowl Cleanser With Enzyme",
        link: "/"
    },
    {
        id: 3,
        name: "Multi-Purpose Cleanser With Enzyme",
        link: "/"
    },
    {
        id: 4,
        name: "Kitchen Cleanser With Enzyme",
        link: "/"
    },
    {
        id: 5,
        name: "Dish Wash With Enzyme",
        link: "/"
    },
    {
        id: 6,
        name: "All In One Detergent With Enzyme",
        link: "/"
    },
    {
        id: 7,
        name: "Tap And Title Cleanser",
        link: "/"
    },
    {
        id: 8,
        name: "Herbal Pet Deodorizer",
        link: "/"
    },
    {
        id: 9,
        name: "Poop And Pee Odour Eliminator",
        link: "/"
    }

]
 
const MenuLinksTwo =[
    {
        id: 1,
        name: "Professional Range",
        link: "/professionalrange"
    }]

    const DropdownlinksTwo = [
        {
            id: 1,
            name: "Bio-Septic For Septic Tank",
            link: "/"
        },
        {
            id: 2,
            name: "Urix-Waterless Urinal Solution",
            link: "/"
        },
        {
            id: 3,
            name: "Aqua",
            link: "/"
        }    
    ]
const MenuLinksThree =
    [{
        id: 1,
        name: "Contact Us",
        link: "/contact"
    },
    {
        id: 2,
        name: "FAQ",
        link: "/faq"
    }
]

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleNav =()=>{
        setNav(!nav)
    }
  return (

    <div className='bg-[#2e8b57]'>
        <div className=' flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4'>
            <img className="p-4" src={Logo} alt='logo'/>
            <ul className='md:flex hidden'>
                {
                    MenuLinksOne.map((data, index)=>(
                        <li key={index}>
                            <Link to={data.link} className=' px-4 font-semibold text-slate-300 hover:text-white dark:hover:text-white duration-200 text-lg '>{" "}{data.name}</Link>
                        </li>
                ))}
                {/* Dropdown */}
                    <li className='relative cursor-pointer group'>
                        <Link to="#" className='font-semibold flex gap-[2px] text-slate-300 hover:text-white text-lg'>
                            Shop By Products
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
                                        className='text-green-800 duration-200 inline-block p-2 hover:bg-[green]/40 font-semibold rounded-md w-full'
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
                                <Link to={data.link} className='px-4 font-semibold text-slate-300 hover:text-white text-lg duration-200'>{" "}{data.name}</Link>
                            </li>
                        ))}
                    {/* Dropdown */}
                    <li className='relative cursor-pointer group'>
                        <Link to="#" className='font-semibold flex gap-[2px] text-slate-300 hover:text-white text-lg'>
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
                                        className='text-green-800 duration-200 inline-block p-2 hover:bg-[green]/40 font-semibold rounded-md w-full'
                                        to={data.link}>{data.name}</Link>

                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                                    
                    </li>
                    {
                    MenuLinksThree.map((data, index)=>(
                        <li key={index}>
                            <Link to={data.link} className='font-semibold text-slate-300 hover:text-white text-lg duration-200 px-4'>{" "}{data.name}</Link>
                        </li>
                    ))}
                

            </ul>
            <div onClick={handleNav} className='block md:hidden z-30'>
            
                {!nav ? <X  className='text-2xl text-white cursor-pointer' /> : <Menu  className='text-2xl text-white cursor-pointer' />}
            </div>
            <div className={!nav ? 'fixed left-0 top-0 w-full duration-500 bg-[#2e8b57] md:hidden' : 'md:hidden fixed left-[-100%] bg-[#2e8b57]'}>
                <img className="p-4 px-4" src={Logo} alt='logo'/>
                <ul className='pt-4'>
                {
                    MenuLinksOne.map((data, index)=>(
                        <li key={index} className='py-2'>
                            <Link to={data.link} className='px-4 font-semibold text-slate-300 hover:text-white dark:hover:text-white duration-200 text-lg '>{" "}{data.name}</Link>
                        </li>
                    ))}
                      {/* Dropdown */}
                      <li className='relative cursor-pointer group py-2'>
                                   <Link to="#" className='font-semibold flex gap-[2px] text-slate-300 hover:text-white px-4 text-lg'>
                                       Shop By Products
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
                                                   className='text-green-800 duration-200 inline-block p-2 hover:bg-[green]/40 font-semibold rounded-md w-full'
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
                                            <Link to={data.link} className='px-4 font-semibold text-slate-300 hover:text-white text-lg duration-200'>{" "}{data.name}</Link>
                                        </li>
                                ))}
                            {/* Dropdown */}
                            <li className='relative cursor-pointer group py-2'>
                                <Link to="#" className='flex font-semibold text-slate-300 hover:text-white text-lg px-4'>
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
                                                className='text-green-800 duration-200 inline-block p-2 hover:bg-[green]/40 font-semibold rounded-md w-full'
                                                to={data.link}>{data.name}</Link>

                                                </li>
                                            ))
                                        }
                                    </ul>
                                </div>
                                    
                            </li>
                            {
                            MenuLinksThree.map((data, index)=>(
                                <li key={index} className='py-2'>
                                    <Link to={data.link} className='font-semibold text-slate-300 hover:text-white text-lg duration-200 px-4'>{" "}{data.name}</Link>
                                </li>
                            ))}
                </ul>
            </div>

        </div>
    </div>
   
  )
}

export default Navbar