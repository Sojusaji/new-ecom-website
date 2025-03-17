import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import Search from '../search/Search'
import NavBar from './navigation-bar/Navbar'

import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { GoGitCompare } from "react-icons/go";
import { GrCart } from "react-icons/gr";
import { FaRegHeart } from "react-icons/fa6";
import Tooltip from '@mui/material/Tooltip';
// import { BsCart3 } from "react-icons/bs";

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        right: -3,
        top: 13,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
        color: 'white'

    },
    '&:hover .MuiSvgIcon-root': {
        color: '#ff5252' // Change icon color on hover
    },
}));

function Header() {
    return (
        <header className='header bg-white'>
            <div className="top-string py-2  border-t-1 border-b-1 border-gray-100  ">
                <div className='px-10   flex items-center justify-between '>
                    <div className='left-string  w-[50%] text-[15px] pr-12 hidden md:block text-gray-600 text-sm '>
                        <p> Get up to 50% off new season styles, limited time only </p>
                    </div>

                    <div className='right-string w-[50%] flex items-center  justify-end'>
                        <ul className='justify-center items-center flex flex-row gap-6  '>
                            <li className='link transition duration-300 ease-in-out  text-gray-600 '>
                                <Link to={'/'}>Help Center</Link>
                            </li>
                            <li className='link  transition duration-300 ease-in-out text-gray-600 '>
                                <Link to={'/help'}>Order Tracking</Link>
                            </li>
                            <li className='link transition duration-300 ease-in-out  text-gray-600 '>
                                <Link to={'/help'}>Order Tracking</Link>
                            </li>
                            <li className='link transition duration-300 ease-in-out  text-gray-600 '>
                                <Link to={'/help'}>Order Tracking</Link>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>


            <div className="px-10 py-9 ">
                <div className=" flex  justify-between items-center">
                    <div className="col1 w-[25%]">
                        <Link to={"/"}> <img src="logo/logo.jpg" alt="processing" /></Link>

                    </div>
                    <div className="col2 w-[45%]">
                        <Search />
                    </div>
                    <div className="col3 w-[30%] justify-end flex items-center">
                        <ul className='list-none flex items-center gap-3'>
                            <li className='mr-2' >
                                <Link className=' link  text-gray-600 transition duration-300 ease-in-out text-[15px]' >Login</Link> /
                                <Link className='link  text-gray-600 transition duration-300 ease-in-out text-[15px]'> Register</Link>
                            </li>
                            <li >
                                <Tooltip title="Compare">
                                    <IconButton aria-label="cart">
                                        <StyledBadge badgeContent={4} >
                                            <GoGitCompare className='react-icon' />
                                        </StyledBadge>
                                    </IconButton>
                                </Tooltip>
                            </li>
                            <li>
                                <Tooltip title="Wishlist">
                                    <IconButton aria-label="cart">
                                        <StyledBadge badgeContent={4} >
                                            <FaRegHeart className='react-icon' />
                                        </StyledBadge>
                                    </IconButton>
                                </Tooltip>
                            </li>
                            <li>
                                <Tooltip title="Cart">
                                    <IconButton aria-label="cart">
                                        <StyledBadge badgeContent={4} >
                                            <GrCart className='react-icon' />
                                        </StyledBadge>
                                    </IconButton>
                                </Tooltip>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>

            <div className="px-10   flex items-center ">
                <NavBar/>
            </div>

        </header>

    )
}

export default Header
