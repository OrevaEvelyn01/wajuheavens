"use client"
import Link from "next/link";
import { collection, getDocs, doc, deleteDoc, query, where } from "firebase/firestore";
import { db } from "@/lib/firebase.config";
import { FaRegTrashCan } from "react-icons/fa6";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";

const Fullreviews = ({session}) => {

    const [reviews, setReviews] = useState([])

    const { id } = useParams(); 

    const fetchReviews = async () => {

        const reviewArray = []
        const q = query(collection(db, "reviews"), where("eventId", "==", id));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
            //...doc.data() means to spread through .data()
            const reviewObject = {
                id: doc.id,
                ...doc.data()
            }
            console.log(reviewObject)
            reviewArray.push(reviewObject)

        });

        console.log(reviewArray);
        setReviews(reviewArray)
    }


    useEffect(() => {
        if (id) {
             fetchReviews();
        }
       

    }, [id]);

    const handleDelete = async (id) => {
        try {
            await deleteDoc(doc(db, "reviews", id));
            // FETCH AGAIN, SO AFTER DELETING IT CAN COME BACK
            fetchReviews();
        } catch (error) {
            console.error("An error occured while deleting your document", error);

            alert("Oops, an error occured. Try again later!")
        }
    }

    return (
       <main>

        <h1 className="text-3xl text-left font-semibold p-6 bg-[#073f3f] rounded-sm text-[#fffff0] my-10 ">Comments</h1>
         <section className="grid gap-7  md:p-10 p-3 mx-4">
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

                                {
                                    session.user.id == rev.userId ? (
                                        <button onClick={() => handleDelete(rev.id)} className="">
                                            <FaRegTrashCan className="text-[#073f3f]" />
                                        </button>
                                    ) : null
                                }

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
    )
}

export default Fullreviews
