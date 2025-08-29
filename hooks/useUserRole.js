"use client";

import React from 'react'
import { useEffect, useState } from 'react';
import { doc, getDoc } from "firebase/firestore";
import { db } from '@/lib/firebase.config';

import { useSession } from 'next-auth/react';
const useUserRole = () => {

    const { data: session } = useSession();
    const [role, setRole] = useState(null);

    useEffect(() => {
        if (!session ?. user?.email) return;
        const fetchRole = async () => {
            const docRef = doc(db, "users", session.user.email);
            const docSnap = await getDoc(docRef);


            if (docSnap.exists()) {
                console.log("Document data:", docSnap.data());
                setRole(docSnap.data().role)
            } else {
                // docSnap.data() will be undefined in this case
                console.log("No such document!");
                setRole("user");
            }
        };
        fetchRole();
    }, [session]);
    
    return role;
}

export default useUserRole

