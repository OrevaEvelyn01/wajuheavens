"use client"
import React from 'react'
import { signIn } from "next-auth/react";
import { useState } from "react";

const Authemail = () => {
  const [email, setEmail] = useState("");
  return (
    <div>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          const email = e.target.email.value; // 👈 grab value from input

          console.log("Attempting to sign in with email:", email);
          const res = await signIn("nodemailer", {
            email,
            redirect: false,
          });

          console.log("Sign in response", res);

          if (res?.ok) {
            alert("Check your email for a sign-in link!");
          } else {
            console.log(res?.error);
            alert("Authentication failed: check console");
          }
        }}

        className='flex flex-col gap-5'
      >
        <input
          type="email"

         name="email"
          placeholder="youremail@example.com"
          required
         className='border rounded-full flex items-center justify-center border-gray-400 w-full gap-5 py-4 text-xl md:text-2xl text-[#073f3f] placeholder:text-center '
        />
        <button
          type="submit"
          className="bg-[#073f3f] text-white px-4 rounded-full w-full py-4 text-xl md:text-2xl"
        >
          Sign in with Email
        </button>
      </form>

      <p className='text-center text-xl mt-4'> Or sign in with</p>
    </div>
  )
}

export default Authemail
