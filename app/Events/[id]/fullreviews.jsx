"use client";
import Link from "next/link";
import {
  collection,
  doc,
  deleteDoc,
  query,
  where,
  onSnapshot,
} from "firebase/firestore";
import { db } from "@/lib/firebase.config";
import { FaRegTrashCan } from "react-icons/fa6";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";

const Fullreviews = ({ session }) => {
  const [reviews, setReviews] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    if (!id) return;

    const q = query(collection(db, "reviews"), where("eventId", "==", id));

    //  replace getDocs with onSnapshot
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const reviewArray = [];
      querySnapshot.forEach((doc) => {
        const reviewObject = {
          id: doc.id,
          ...doc.data(),
        };
        reviewArray.push(reviewObject);
      });

      setReviews(reviewArray);
    });

    // cleanup the listener when component unmounts
    return () => unsubscribe();
  }, [id]);

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, "reviews", id));
      // FETCH AGAIN, SO AFTER DELETING IT CAN COME BACK
      fetchReviews();
    } catch (error) {
      alert("Oops, an error occured. Try again later!");
    }
  };

  return (
    <main>
      <h1 className="text-3xl text-left font-semibold p-6 bg-[#073f3f] rounded-sm text-[#fffff0] my-10 ">
        Comments
      </h1>
      <section className="grid gap-7  md:p-10 p-3 mx-4 max-h-48 overflow-auto">
        {reviews.map((rev, i) => (
          <div key={i} className="space-y-3 shadow-md p-3">
            <div className="flex items-center justify-between">
              <div className="flex justify-between w-full">
                <div className="flex items-center gap-2">
                  <img
                    src={rev.img}
                    alt="user"
                    className="w-8 h-8 rounded-full"
                  />
                  <h2>{rev.author}</h2>
                </div>

                {session.user.id == rev.userId ? (
                  <button onClick={() => handleDelete(rev.id)} className="">
                    <FaRegTrashCan className="text-[#073f3f]" />
                  </button>
                ) : null}
              </div>
            </div>
            <p className="text-lg">{rev.book}</p>
            <p className="line-clamp-2">{rev.review}</p>
            <div className="flex items-center justify-between">
              <p className="text-xs">{rev.timestamp}</p>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
};

export default Fullreviews;
