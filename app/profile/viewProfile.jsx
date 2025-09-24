"use client";
import Link from "next/link";
import { collection, doc, query, where, onSnapshot } from "firebase/firestore";
import { db } from "@/lib/firebase.config";
import React, { useEffect, useState } from "react";

const ViewProfile = ({ session, uid }) => {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    if (!uid) return;
    const q = query(collection(db, "users"), where("profileId", "==", uid));

    //  replace getDocs with onSnapshot
    const changedProfile = onSnapshot(q, (querySnapshot) => {
      const profileArray = [];
      querySnapshot.forEach((doc) => {
        const profileObject = {
          id: doc.id,
          ...doc.data(),
        };
        profileArray.push(profileObject);
      });

      setProfiles(profileArray);
    });

    // cleanup the listener when component unmounts
    return () => changedProfile();
  }, [uid]);

  return (
    <div className=" flex flex-col items-start py-7 pt-14 gap-6    ">
      <img
        src={session?.user?.image || "fb.png"}
        alt={session?.user.name.slice(0, 1).toUpperCase()}
        className="w-24 h-24 rounded-full"
      />

      {profiles.length === 0 ? (
        <p>No profile found.</p>
      ) : (
        profiles.map((prof) => (
          <div key={prof.id} className="space-y-6">
            <p> Name: {prof.name}</p>
            <p> Email: {session.user?.email}</p>

            <p> Phone Number: {prof.phone}</p>
            <p> Gender: {prof.gender}</p>
            <p>Location: {prof.location}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default ViewProfile;
