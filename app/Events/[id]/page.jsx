import React from 'react'
import { doc, getDoc } from "firebase/firestore";
import { db } from '@/lib/firebase.config';
import Reviews from '../../../components/Reviews';
import { auth } from '@/auth';
import { redirect } from 'next/navigation';
import Fullreviews from '@/app/Events/[id]/fullreviews';


const singleReview = async (id) => {


    if (!id) return null;
    try {
        const docRef = doc(db, "events", id)
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            return { id, ...docSnap.data() }
        } else {
            // docSnap.data() will be undefined in this case
        }

    } catch (error) {
       //     alert("Oops, something went wrong")
    }





}

const page = async ({ params }) => {

    const session = await auth()
    if (!session) {
        redirect("/auth/signin")
    }
    const { id } = await params; // 👈 await params first
    const perReviews = await singleReview(id);
    return (
        <main className='text-[#073f3f]'>
            <div className='flex flex-col gap-10'>
                <div className='flex flex-col gap-10 items-center max-md:px-3 p-10 pb-5'>

                    <h1 className=' text-4xl font-bold max-md:text-center'>{perReviews.title} 's story</h1>

                    <div className='flex flex-col gap-3'>
                        <p className='text-xl'>{perReviews.description}</p>

                        <p className='text-xs text-center'> {perReviews.date} </p>
                    </div>

                    <img src={perReviews.image} alt="logo" width={1000} height={1000} className="w-[95%]  lg:w-[70%] h-[77vh] max-md:h-[50vh] lg:min-h-dvh rounded-sm" />
                    <p className=' w-[95%] lg:w-[70%] text-base'>{perReviews.details}</p>.
                </div>



                
                


                <div className='flex flex-col items-center p-10 pb-5 gap-10'>
                   <img src={"https://i.pinimg.com/736x/8d/96/73/8d9673212f7b390c5488c7fce0d74fc3.jpg"} alt="logo" width={1000} height={1000} className="w-[95%]  lg:w-[70%] h-[77vh] max-md:h-[50vh] lg:min-h-dvh rounded-sm" /> 
                   <img src={"https://i.pinimg.com/1200x/c9/31/76/c9317623662c6e652ea0330c7e48f590.jpg"} alt="logo" width={1000} height={1000} className="w-[95%]  lg:w-[70%] h-[77vh] max-md:h-[50vh] lg:min-h-dvh rounded-sm" /> 
                   <img src={"https://i.pinimg.com/1200x/1c/cf/f1/1ccff1b70e691734e7c057a1be20ca5a.jpg"} alt="logo" width={1000} height={1000} className="w-[95%]  lg:w-[70%] h-[77vh] max-md:h-[50vh] lg:min-h-dvh rounded-sm" /> 
                </div>


                <div className='flex flex-col items-center p-10 pb-5 gap-5'>
                <h2 className=' text-2xl font-semibold'>Choosing a destination that felt like a dream</h2>
                <p className=' w-[95%] lg:w-[70%] text-base'>{perReviews.story}</p></div>

            </div>



            <Fullreviews session={session} />

            <Reviews session={session} eventId={id} />

/        </main>


    )


}

export default page
