"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { IoMdClose } from "react-icons/io";
import { RiMenu3Line } from "react-icons/ri";
import { useSession, signOut } from 'next-auth/react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';


const Navbar = () => {

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const [navOpen, setNavOpen] = useState(false)
    const { data: session } = useSession()

    const navItems = [
        {
            name: "Home",
            url: "/"
        },
        {
            name: "Events",
            url: "/Events"
        },
        {
            name: "About Us",
            url: "/about"
        },
        {
            name: "Contact Us",
            url: "/contact"
        },
        {
            name: "Services",
            url: "/services"
        },
       
      


    ]

    return (
        <nav className=" flex bg-[#Fffff0] justify-between items-center py-10 px-8 shadow-md text-[#073f3f]">
            <Link href={"/"} className=" flex items-center gap-2">

                <Image src={"/waju1.png"} alt="logo" width={1000} height={1000} className="w-8 h-8" />

                <p className="text-2xl font-semibold ">WajuHeavens</p>
            </Link>


            {/* desktop view */}
            <div className=" flex items-center gap-5 max-lg:hidden ">
                {navItems.map((item, index) => (
                    <Link href={item.url}
                        key={index}
                        className="text-lg
                          
                        hover:text-[black]  hover:border-b-1 transition duration-500"
                    >

                        {item.name}
                    </Link>
                ))}

                {
                    session ? (<div>
                        <button
                            id="basic-button"
                            aria-controls={open ? 'basic-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}
                        >
                            <img src={session?.user?.image} alt={session?.user?.name.slice(0, 1).toUpperCase() || "u" } className='w-10 h-10 rounded-full' />
                        </button>
                        <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            slotProps={{
                                list: {
                                    'aria-labelledby': 'basic-button',
                                },
                            }}
                        >
                            <MenuItem onClick={handleClose}>
                                <Link href={"/profile"}> Profile</Link>
                            </MenuItem>
                            <MenuItem onClick={handleClose}><Link href={"/drop-reviews"}>Book your services</Link></MenuItem>
                            <MenuItem onClick={handleClose} > <button onClick={() => signOut()}> Sign Out</button></MenuItem>
                        </Menu>

                    </div>) : (<Link href={"/auth/signin"}
                        className="text-lg hover:text-yellow-700 hover:underline">Sign In</Link>)

                }
            </div>

            {/* mobile and tablet view */}

            <div className=" lg:hidden z-50">
                <button onClick={() => setNavOpen(!navOpen)} className="text-2xl ">
                    {navOpen ? <IoMdClose /> : <RiMenu3Line />}
                </button>
            </div>

            <div className={` bg-orange-50 min-h-dvh overflow-hidden w-full fixed top-0 left-0 z-30 lg:hidden ${navOpen ? "block" : "hidden"} `}>

                <div className=" flex flex-col items-center gap-16 pt-20 ">

                    {navItems.map((item, index) => (

                        <Link
                            onClick={() => setNavOpen(false)}
                            key={index} href={item.url} className=" text-2xl  hover:border-b hover:text-[#000000]  transition duration-300">

                            {item.name}

                        </Link>
                    ))}

                     {
                    session ? (<div>
                        <button
                            id="basic-button"
                            aria-controls={open ? 'basic-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}
                        >
                            <img src={session?.user?.image} alt={session?.user?.name.slice(0, 1).toUpperCase() || "u" } className='w-10 h-10 rounded-full' />
                        </button>
                        <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            slotProps={{
                                list: {
                                    'aria-labelledby': 'basic-button',
                                },
                            }}
                        >
                            <MenuItem onClick={handleClose}>
                                <Link href={"/profile"}> Profile</Link>
                            </MenuItem>
                            <MenuItem onClick={handleClose} > <button onClick={() => signOut()}> Sign Out</button></MenuItem>
                        </Menu>

                    </div>) : (<Link href={"/auth/signin"}
                        className="text-2xl hover:text-yellow-700 hover:underline">Sign In</Link>)

                }
                </div>
            </div>
        </nav>
    )
}

export default Navbar