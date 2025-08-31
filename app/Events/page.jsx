"use server"
import React from 'react'
import Eventlist from './eventlist'
import { auth } from '@/auth';
import { redirect } from 'next/navigation';




const page = async () => {

    
  return (
    <div>
      
    <Eventlist />
    </div>
  )
}

export default page
