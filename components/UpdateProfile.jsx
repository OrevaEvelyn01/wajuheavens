
"use client"
import React, { useState } from 'react'
import { doc, updateDoc } from "firebase/firestore";
import { db } from '@/lib/firebase.config';

const UpdateProfile = ({ uid, userName }) => {

    const [name, setName] = useState(userName);
    const [phone, setPhone] =useState("")
    const [gender, setGender] =useState("")
    const [location, setLocation] =useState("")
    
    const handleUpdate = async (e) => {

        e.preventDefault()
        if (!name.trim()) {
            alert("Please enter your name")
        }

        try {
            const userRef = doc(db, "users", uid)
            await updateDoc(userRef, {profileId: uid , name, phone, location, gender })
            alert("Profile updated successfully")
        } catch (error) {
            alert("Oops!. An error occured. Please try again later")
        }
    }
    return (
        <main className=' flex flex-col items-start py-7 pt-14 gap-6 '>
            <h1 className=' text-xl lg:text-3xl font-bold'>Edit your profile information</h1>

            <form onSubmit={handleUpdate} className='flex flex-col  w-full gap-5 justify-center'>
                <label className='text' htmlFor="theName" >Name</label>

                <input id='theName' placeholder='Edit your name...' className=' p-2 w-full rounded-md border border-gray-200 outline-none' type="text"  onChange={(e) => setName(e.target.value)} />

                <label className='text' htmlFor="phoneNumber"> Phone Number</label>

                <input id='phoneNumber' placeholder='Edit your phone number...' className=' p-2 w-full rounded-md border border-gray-200 outline-none' type="text"  onChange={(e) => setPhone(e.target.value)} />
                
                <label className='text' htmlFor="theGender">Gender</label>
                <input id='theGender' placeholder='Edit your gender...' className=' p-2 w-full rounded-md border border-gray-200 outline-none' type="text"  onChange={(e) => setGender(e.target.value)} />
                
                <label className='text' htmlFor="theLocation"> Location</label>
                <input id='theLocation' placeholder='Edit your location...' className=' p-2 w-full rounded-md border border-gray-200 outline-none' type="text"  onChange={(e) => setLocation(e.target.value)} />
              

                <button type='submit' className='bg-[#073f3f] hover:bg-[#0c6767] transition-all duration-300 text-white px-6 py-2 rounded-md lg'>Update Profile</button>
            </form>
        </main>
    )
}

export default UpdateProfile
