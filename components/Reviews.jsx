"use client";
import React from "react";
import { useState } from "react";
import { Field, Form, Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import { collection, addDoc } from "firebase/firestore";
import { FiLoader } from "react-icons/fi";
import { db } from "@/lib/firebase.config";

const Reviews = ({ session, eventId }) => {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const initialValues = {
    review: "",
  };

  const formValidation = Yup.object({
    review: Yup.string().required("A comment is required"),
  });

  const handleSubmit = async (values, { resetForm }) => {
    try {
      if (!eventId) {
        return;
      }
      setLoading(true);

      //object that would be sent to the database is below
      const reviewData = {
        author: session.user.name,
        image: session.user.image,
        timestamp: new Date().toLocaleDateString(),
        userId: session.user.id,
        eventId,
        ...values,
      };

      const docRef = await addDoc(collection(db, "reviews"), reviewData);
      handleOpen();

      resetForm();
    } catch (error) {
      alert("oops, an error occured.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <section className="w-[91%] mt-10  mx-auto shadow-md p-3 rounded-md mt-">
        <Formik
          initialValues={initialValues}
          validationSchema={formValidation}
          onSubmit={handleSubmit}
        >
          <Form className=" ">
            <div>
              <label className="text-base"> Add a comment</label>
              <Field
                as="textarea"
                name="review"
                className=" w-full outline-none bg-white p-2 rounded-md border border-gray-200"
              />
              <ErrorMessage
                name="review"
                component={"p"}
                className="text-xs text-red-500"
              />
            </div>

            <div className="flex justify-end">
              <button
                disabled={loading}
                type="submit"
                className="bg-[#073f3f] hover:bg-[#fffff0] hover:text-[#073f3f] 
                            hover:border hover:border-[#073f3f]transition-colors duration-300 rounded-md  px-5 py-2 text-white text-xl"
              >
                {loading ? (
                  <FiLoader className="animate-spin text-2xl text-center" />
                ) : (
                  "Post Comment"
                )}
              </button>
            </div>
          </Form>
        </Formik>
      </section>
    </div>
  );
};

export default Reviews;
