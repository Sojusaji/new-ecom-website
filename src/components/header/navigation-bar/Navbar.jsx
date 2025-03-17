import { React, useState } from 'react'
import './NavBar.css'
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import { CgMenuLeftAlt } from "react-icons/cg";
import { IoIosArrowDown } from "react-icons/io";
import { GoRocket } from "react-icons/go";
import CategoryOpen from "./navigation-drawer/Drawer";


function Navbar() {

    const [isCategoryOpen, setCategoryOpen] = useState(false);

    const handleShopByCategoryButton = () => {
        setCategoryOpen(true);
    }
    {/* <Button onClick={toggleDrawer(true)}>Open drawer</Button> */ }

    return (
        <nav className='w-full py-1'>
            <div className="flex items-center ">
                <div className="col1 w-[30%]">
                    <Button className="navfirst-button flex  gap-4" onClick={handleShopByCategoryButton}>
                        <CgMenuLeftAlt />Shop By Categories < IoIosArrowDown className='arrow' />
                    </Button>
                    {isCategoryOpen && <CategoryOpen isCategoryOpen={isCategoryOpen} setCategoryOpen={setCategoryOpen} />}
                </div>
                <div className="col2 w-[50%]">
                    <ul className='flex items-center nav gap-5'>
                        <li className='list-none  '>
                            <Link to={'/'}>
                                <Button className='nav-button'>
                                    Home
                                </Button>
                            </Link>


                        </li>
                        <li className='list-none relative'>
                            <Link to={'/'}>
                                <Button className='nav-button fashion'>
                                    Fashion
                                </Button>
                            </Link>
                            <div className="submenu absolute top-[100%] left-[0%] md:w-[550px] bg-white
                            shadow-md opacity-3 transition-all">

                                <table className="table-auto   w-full h-full ">
                                    <thead>
                                        <tr>
                                            <th >
                                                <Link to={'/'} className="  link ">
                                                    <Button className='!font-semibold'>
                                                        Apparel
                                                    </Button>
                                                </Link>
                                            </th>
                                            <th>
                                                <Link to={'/'} className="  link ">
                                                    <Button className='!font-semibold' >
                                                        Outerwear
                                                    </Button>
                                                </Link>
                                            </th>
                                            <th>
                                                <Link to={'/'} className=" link ">
                                                    <Button className='!font-semibold' >
                                                        Footwear
                                                    </Button>
                                                </Link>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="py-7">
                                            <td>
                                                <Link to={'/'} className=" link ">
                                                    <Button  >
                                                        Smart Tablet
                                                    </Button>
                                                </Link>
                                            </td>
                                            <td>
                                                <Link to={'/'} className=" link ">
                                                    <Button  >
                                                        Wooden Chair
                                                    </Button>
                                                </Link>
                                            </td>
                                            <td>
                                                <Link to={'/'} className=" link ">
                                                    <Button  >
                                                        Leather Watch
                                                    </Button>
                                                </Link>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <Link to={'/'} className=" link ">
                                                    <Button  >
                                                        Crepe T-Shirt
                                                    </Button>
                                                </Link>
                                            </td>
                                            <td>
                                                <Link to={'/'} className=" link ">
                                                    <Button  >
                                                        Sneakers Shoes
                                                    </Button>
                                                </Link>
                                            </td>
                                            <td>
                                                <Link to={'/'} className=" link ">
                                                    <Button  >
                                                        Cabinet Table
                                                    </Button>
                                                </Link>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <Link to={'/'} className=" link ">
                                                    <Button  >
                                                        leather watch
                                                    </Button>
                                                </Link>
                                            </td>
                                            <td>
                                                <Link to={'/'} className=" link ">
                                                    <Button className='text-left' >
                                                        Purse
                                                    </Button>
                                                </Link>
                                            </td>
                                            <td>
                                                <Link to={'/'} className=" link ">
                                                    <Button  >
                                                        Headphones
                                                    </Button>
                                                </Link>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <Link to={'/'} className=" link ">
                                                    <Button  >
                                                        Rolling Diamond
                                                    </Button>
                                                </Link>
                                            </td>
                                            <td>
                                                <Link to={'/'} className=" link ">
                                                    <Button  >
                                                        Xbox Controller
                                                    </Button>
                                                </Link>
                                            </td>
                                            <td>
                                                <Link to={'/'} className=" link ">
                                                    <Button  >
                                                        Sunglasses
                                                    </Button>
                                                </Link>
                                            </td>
                                        </tr>


                                        <tr>
                                            <td rowSpan="3" colSpan="3" className="py-4">
                                                <img src="logo/log2.jpg" alt="processing..." />
                                            </td>

                                        </tr>
                                    </tbody>
                                </table>

                            </div>
                        </li>
                        <li className='list-none  '>
                            <Link to={'/'}>
                                <Button className='nav-button'>
                                    New Arrivals
                                </Button>
                            </Link>
                        </li>
                        <li className='list-none  relative '>
                            <Link to={'/'}>
                                <Button className='nav-button'>
                                    All Brands
                                </Button>
                            </Link>
                            <div className="submenu absolute top-[100%] left-[0%] shadow opacity-7
                            bg-white transition-all md:w-[170px]">
                                <ul className="w-full h-full px-3 pt-3 pb-3 space-y-0 ">
                                    <li className='list-none  '>
                                        <Link to={'/'} className=' ul-link ' >
                                            <Button >
                                                Gadget Zone
                                            </Button>
                                        </Link>
                                    </li>
                                    <li className='list-none '>
                                        <Link to={'/'} className='ul-link' >
                                            <Button >
                                                Initech space
                                            </Button>
                                        </Link>
                                    </li>
                                    <li className='list-none  '>
                                        <Link to={'/'} className='ul-link'>
                                            <Button >
                                                Looney Tunes
                                            </Button>
                                        </Link>
                                    </li>
                                    <li className='list-none  '>
                                        <Link to={'/'} className='ul-link'>
                                            <Button >
                                                Massive Dynamic
                                            </Button>
                                        </Link>
                                    </li>
                                    <li className='list-none  '>
                                        <Link to={'/'} className='ul-link'>
                                            <Button >
                                                Pro Tech Gear
                                            </Button>
                                        </Link>
                                    </li>
                                    <li className='list-none  '>
                                        <Link to={'/'} className='ul-link'>
                                            <Button >
                                                Soylent Green
                                            </Button>
                                        </Link>
                                    </li>
                                    <li className='list-none  '>
                                        <Link to={'/'} className='ul-link'>
                                            <Button >
                                                The Simpsons
                                            </Button>
                                        </Link>
                                    </li>
                                    <li className='list-none  '>
                                        <Link to={'/'} className='ul-link'>
                                            <Button >
                                                Weeds Capital
                                            </Button>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className='list-none relative '>
                            <Link to={'/'}>
                                <Button className='nav-button'>
                                    More
                                </Button>
                            </Link>
                            <div className=" absolute min-w-[100px] submenu shadow transition-all ">
                                <ul className='w-full h-full'>
                                    <li className="list-none">
                                        <Link to={'/'} className='ul-link' >
                                            <Button >
                                                Best Deals
                                            </Button>
                                        </Link>
                                    </li>
                                    <li className="list-none">
                                        <Link to={'/'} className='ul-link' >
                                            <Button >
                                                Blog
                                            </Button>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>

                <div className="col3 w-[20%] flex items-center justify-end gap-3 ">
                    <GoRocket /><p >Free International Delivery</p>
                </div>
            </div>
        </nav >
    )
}

export default Navbar
