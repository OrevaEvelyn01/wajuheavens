
import React from 'react'
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { auth, signIn } from '@/auth';
import { redirect } from 'next/navigation';
import Authemail from '@/components/Authemail';

const page = async () => {
  const session = await auth()

  if (session) {
    redirect("/")
  }

  async function emailLogin(formData) {
    "use server"
    const email = formData.get("email");
    await signIn("email", { email })
  }
  return (
    <main className="min-h-[120vh] flex max-lg: justify-center ">


      <div className=' min-h-dvh w-[45%]  bg-no-repeat max-lg:hidden bg-center bg-[url(/sign.png)]'>
      </div>

      <div className='lg:flex items-center justify-center lg:w-[55%] max-lg:p-3 '>

        <section className='  min-h-dvh flex flex-col items-center justify-center gap-10 max-lg:p-3 max-lg:my-20 max-lg:shadow-lg max-lg:rounded-lg max-lg:max-w-[30rem] '>
          <h1 className='font-bold text-[#073f3f] text-3xl text-center md:text-4xl '> Sign in to your Account</h1>
          <div className='w-full space-y-5 max-md:px-2'>



           <Authemail/>

            <form
              action={async () => {
                "use server"
                await signIn("google")
              }}
            >
              <button className='border rounded-full flex items-center justify-center border-gray-400 w-full gap-5 py-2 text-xl md:text-xl text-[#073f3f]'>
                <FcGoogle />
                Google

              </button>

            </form>


            <form
              action={async () => {
                "use server"
                await signIn("github")
              }}
            >
              <button className='border rounded-full flex items-center justify-center border-gray-400 w-full gap-5 py-2 text-xl md:text-xl text-[#073f3f]'>
                <FaGithub />
               GitHub

              </button>

            </form>

           
          </div>

          <p className='text-[#073f3f] text-sm text-center'>By Signing in, you agree to our <a href='#' className='hover:underline'>Terms of Service</a> and {""} <a href='#' className='hover:underline'>Privacy Policy</a></p>
        </section>
      </div>
    </main>
  )
}

export default page
