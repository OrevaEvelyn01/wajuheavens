import React from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () =>{
    const navItems = [
        {
            name :"Home",
            url: "/"
        },
        {
            name :"Events",
            url: "/events"
        },
        {
            name :"About Us",
            url: "/about"
        },
        {
            name :"Contact Us",
            url: "/contactus"
        },
        {
            name :"Sign In",
            url: "/signin"
        }


    ]

    return(
        <nav className=" flex bg-blue-400 justify-between items-center py-6 px-6 shadow-md">
            <Link href={"/"} className=" flex items-center gap-2">
            
            <Image src={"/logo.png"} alt="logo" width={1000} height={1000} className="w-10 h-10" />
             
             <p className="text-2xl text-white">Eventify</p>
            </Link>

            <div className=" flex items-center gap-5">
                {navItems.map((item, index) =>(
                    <Link href={item.url} className="text-lg hover:text-blue-100 hover:border-b-1 transition duration-500">

                        {item.name}
                    </Link>
                ))}
            </div>
        </nav>
    )
}

export default Navbar