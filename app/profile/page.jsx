
import { auth, signOut } from '@/auth';
import UpdateProfile from '@/components/UpdateProfile';
import { redirect } from 'next/navigation';
import React from 'react'
import { IoIosLogOut } from "react-icons/io";

const page = async () => {
    const session = await auth();
    const uid = session?.user?.id
    const userName = session?.user?.name
    if (!session) {
        redirect("/auth/signin")
    }
    return (
        <main className='min-h-dvh flex flex-col justify-center text-[#073f3f]'>
            <div className='w-full md:max-w-4xl p-3 mx-auto shadow-md  rounded-lg flex flex-col justify-center items-center  gap-8'>
                <img src={session?.user?.image || "fb.png"} alt={session?.user.name.slice(0, 1).toUpperCase()}
                    className='w-24 h-24 rounded-full' />
                <h1 className=' text-3xl font-light'>{session.user?.name}</h1>
                <p>{session.user?.email}</p>


                <form
                    action={async () => {
                        "use server"
                        await signOut()
                    }}
                >

                    <button type="submit" className='flex items-center gap-3 bg-[#073f3f] text-white px-10 py-3 rounded-lg transition-all duration-300 hover:bg-red-600]'>
                        <IoIosLogOut />
                        Sign Out
                    </button>
                </form>

                <UpdateProfile uid={uid} userName={userName} />
            </div>
        </main>
    )
}

export default page
