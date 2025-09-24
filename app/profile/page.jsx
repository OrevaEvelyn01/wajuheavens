import { auth, signOut } from "@/auth";
import UpdateProfile from "@/components/UpdateProfile";
import { redirect } from "next/navigation";
import React from "react";
import { IoIosLogOut } from "react-icons/io";
import ViewProfile from "./viewProfile";

const page = async () => {
  const session = await auth();
  const uid = session?.user?.id;
  
  const userName = session?.user?.name;
  if (!session) {
    redirect("/auth/signin");
  }
  return (

    <main className="py-12  lg:px-8 lg:bg-gray-50 max-lg:flex max-lg:justify-center">

    <section className="min-h-dvh gap-10 grid lg:grid-cols-3 lg:justify-center text-[#073f3f] max-lg:max-w-[60%]">
      <div className="  lg:px-7 lg:shadow-md lg:rounded-md  bg-white">
        {/* <img src={session?.user?.image || "fb.png"} alt={session?.user.name.slice(0, 1).toUpperCase()}
                    className='w-24 h-24 rounded-full' />
                <h1 className=' text-3xl font-light'>{session.user?.name}</h1>
                <p>{session.user?.email}</p> */}

        <ViewProfile session={session} uid={uid} />

        <div className="flex justify-start ">
        <form
          action={async () => {
            "use server";
            await signOut();
          }}
        >
          <button
            type="submit"
            className="flex items-center gap-3 bg-[#073f3f] hover:bg-[#0c6767] text-white px-6 py-2 rounded-md transition-all duration-300 hover:bg-red-600]"
             
          >
            <IoIosLogOut />
            Sign Out
          </button>
        </form>
        </div>
      </div>

      <div className="col-span-2 lg:shadow-md lg:rounded-md  lg:px-7 bg-white">
        <UpdateProfile uid={uid} userName={userName}  />
      </div>
    </section>
    </main>

  );
};

export default page;
