
"use client"
import React, { useState } from 'react'
import { doc, updateDoc } from "firebase/firestore";
import { db } from '@/lib/firebase.config';

const UpdateProfile = ({ uid, userName }) => {

    const [name, setName] = useState(userName);
    const handleUpdate = async (e) => {

        e.preventDefault()
        if (!name.trim()) {
            alert("Please enter your name")
        }

        try {
            const userRef = doc(db, "users", uid)
            await updateDoc(userRef, { name })
            alert("Profile updated successfully")
        } catch (error) {
            alert("Oops!. An error occured. Please try again later")
        }
    }
    return (
        <main className='w-full'>

            <form onSubmit={handleUpdate} className='flex flex-col items-center w-full gap-5 justify-center'>

                <input placeholder='Edit your name...' className=' p-2 w-full rounded-md border border-gray-200 outline-none' type="text" value={name} onChange={(e) => setName(e.target.value)} />
                <button type='submit' className='bg-yellow-500 hover:bg-yellow-600 transition-all duration-300 text-white px-6 py-2 rounded-md lg'>Update Profile</button>
            </form>
        </main>
    )
}

export default UpdateProfile
