"use client"
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { IoMdClose } from "react-icons/io";
import { RiMenu3Line } from "react-icons/ri";



const Navbar = () => {

    const [navOpen, setNavOpen] = useState(false)

    const navItems = [
        {
            name: "Home",
            url: "/"
        },
        {
            name: "Events",
            url: "/events"
        },
        {
            name: "About Us",
            url: "/about"
        },
        {
            name: "Contact Us",
            url: "/contactus"
        },
        {
            name: "Services",
            url: "/services"
        },
        {
            name: "Sign In",
            url: "/auth/signin"
        }


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
                          
                        hover:text-[black]  hover:border-b-1 transition duration-500">

                        {item.name}
                    </Link>
                ))}
            </div>

            {/* mobile and tablet view */}

            <div className=" lg:hidden z-50">
                <button onClick={() => setNavOpen(!navOpen)} className="text-2xl ">
                    {navOpen ? <IoMdClose /> : <RiMenu3Line />}
                </button>
            </div>

            <div className={` bg-orange-50 min-h-dvh overflow-hidden w-full fixed top-0 left-0 lg:hidden ${navOpen ? "block" : "hidden"} `}>

                <div className=" flex flex-col items-center gap-16 pt-20 ">

                    {navItems.map((item, index) => (
                        <Link key={index} href={item.url} className=" text-2xl  hover:border-b hover:text-[#B76E79]  transition duration-300">

                            {item.name}

                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    )
}

export default Navbar