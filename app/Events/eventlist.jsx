"use client"
import Link from 'next/link'
import React, { useEffect , useState} from 'react'
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { collection, getDocs } from "firebase/firestore";
import { db } from '@/lib/firebase.config';

const Eventlist = () => {
  const [events, setEvents] = useState([])


  const fetchEvents = async () => {
    const eventsArray = []
    const querySnapshot = await getDocs(collection(db, "events"));
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots

      const eventsObject = {
        id: doc.id,
        ...doc.data()
      }

      eventsArray.push(eventsObject)
    });

    setEvents(eventsArray)

  }


  useEffect(() => {
    fetchEvents();

  }, []);

  return (
    <section className=' min-h-dvh flex justify-center' >
      {/* upcoming events */}
      <div className='grid  max-md:place-items-center md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-10 max-md:px-6'>
        {events.map((evnts, i) => (
          <div key={i} className='shadow-xl mb-10 max-md:ml-0  ml-10  mt-10  rounded-md'>
            <div className='flex flex-col '>
              <div className='row-span-2 '>
                <img src= {evnts.image}  alt="wedding picture" height={1000} width={1000} className='h-[300px] w-[300px] rounded-t-md' />
              </div>

              <div className=' p-6 inset-0 text-base flex flex-col gap-3  '>

                <p className='text-xl '>{evnts.title}</p>
                <p>{evnts.description}</p>
                <p>{evnts.date}</p>

                <div className=' flex justify-end'>
                  <Link
                    href= { `/Events/${evnts.id}`}
                    className="flex items-center text-sm hover:text-[#073f3f] transition-all duration-300"
                  >
                    Read More
                    <MdOutlineKeyboardDoubleArrowRight className="text-lg" />
                  </Link>
                </div>
              </div>


            </div>
          </div>
        ))}

      </div>

      {/* past events */}
      <div></div>

    </section>
  )
}

export default Eventlist
