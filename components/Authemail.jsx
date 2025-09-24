"use client"
import React from 'react'
import { signIn } from "next-auth/react";
import { useState } from "react";

const Authemail = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("")
  return (
    <div>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          const email = e.target.email.value; //  grab value from input

          const res = await signIn("nodemailer", {
            email,
            redirect: false,
          });


          if (res?.ok) {
           setMessage("Check your email for a sign-in link!");
          } else {
            setMessage("Error, please try again")
          }
        }}

        className='flex flex-col gap-5'
      >

        <p className='text-sm text-center pt-3'> {message}</p>
        <input
          type="email"

         name="email"
          placeholder="youremail@example.com"
          required
         className='border rounded-full flex items-center justify-center border-gray-400 w-full gap-5 py-2 text-xl md:text-xl text-black text-center placeholder:text-center placeholder:pl-3 placeholder:text-sm'
        />
        <button
          type="submit"
          className="bg-[#073f3f] text-white px-4 rounded-full w-full py-2 text-xl md:text-xl active:bg-[#073f3f] hover:bg-[#076363]"
        >
          Sign in with Email
        </button>
      </form>

      <p className='text-center text-xl mt-4'> Or sign in with</p>
    </div>
  )
}

export default Authemail
