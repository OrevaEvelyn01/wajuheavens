"use client";
import React from "react";
import { useState } from "react";
import { Field, Form, Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import { collection, addDoc } from "firebase/firestore";
import { FiLoader } from "react-icons/fi";
import { db } from "@/lib/firebase.config";

const EditAdmin = ({ session }) => {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const initialValues = {
    date: "",
    description: "",
    details: "",
    image: "",
    story: "",
    testimonial: "",
    title: "",
  };

  const formValidation = Yup.object({
    description: Yup.string().required("A comment is required"),
    details: Yup.string().required("A comment is required"),
    image: Yup.string().required("A comment is required"),
    story: Yup.string().required("A comment is required"),
    testimonial: Yup.string().required("A comment is required"),
    title: Yup.string().required("A comment is required"),
  });

  const handleSubmit = async (values, { resetForm }) => {
    try {
      setLoading(true);

      //object that would be sent to the database is below
      const eventsData = {
        timestamp: new Date().toLocaleDateString(),
        userId: session.user.id,

        ...values,
      };

      const docRef = await addDoc(collection(db, "events"), eventsData);
      handleOpen();

      resetForm();
    } catch (error) {
      alert("oops, an error occured.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1 className=" bg-[#073f3f] p-5  text-2xl text-[#fffff0] ">
        Add Event Information
      </h1>

      <section className="w-[91%] my-10  mx-auto shadow-md p-3 rounded-md mt-">
        <Formik
          initialValues={initialValues}
          validationSchema={formValidation}
          onSubmit={handleSubmit}
        >
          <Form className=" ">
            <div>
              <div className=" grid lg:grid-cols-2 gap-2 lg:gap-8 mb-[32px]">
                <div>
                  <label className="text-base "> Add date</label>
                  <Field
                    type="date"
                    name="date"
                    className=" w-full outline-none bg-white p-2 py-[13px] rounded-md border border-gray-200"
                  />
                </div>

                <div>
                  <label className="text-base"> Add title</label>

                  <Field
                    type="text"
                    name="title"
                    className=" w-full outline-none bg-white p-2 py-[13px] rounded-md border border-gray-200"
                  />
                  <ErrorMessage
                    name="title"
                    component={"p"}
                    className="text-xs text-red-500"
                  />
                </div>
              </div>

              <label className="text-base  "> Add details</label>

              <Field
                as="textarea"
                name="details"
                className=" w-full outline-none bg-white  rounded-md border border-gray-200"
              />

              <div className="grid lg:grid-cols-2 gap-2 lg:gap-8">
                <div>
                  {" "}
                  <label className="text-base"> Add description</label>
                  <Field
                    type="text"
                    name="description"
                    className=" w-full outline-none bg-white rounded-md border border-gray-200 p-2 py-[13px]"
                  />
                </div>

                <div>
                  {" "}
                  <label className="text-base"> Add image</label>
                  <Field
                    type="text"
                    name="image"
                    className=" w-full outline-none bg-white p-2 py-[13px]  rounded-md border border-gray-200"
                  />
                </div>

                <div>
                  {" "}
                  <label className="text-base"> Add story</label>
                  <Field
                    as="textarea"
                    name="story"
                    className=" w-full outline-none bg-white rounded-md border border-gray-200"
                  />
                </div>

                <div>
                  {" "}
                  <label className="text-base"> Add testimonial</label>
                  <Field
                    as="textarea"
                    name="testimonial"
                    className=" w-full outline-none bg-white rounded-md border border-gray-200"
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-end">
              <button
                disabled={loading}
                type="submit"
                className="bg-[#073f3f] hover:bg-[#fffff0] hover:text-[#073f3f] 
                            hover:border hover:border-[#073f3f]transition-colors duration-300 rounded-md  px-5 py-2 mt-4 text-white text-base"
              >
                {loading ? (
                  <FiLoader className="animate-spin text-base text-center" />
                ) : (
                  "Save"
                )}
              </button>
            </div>
          </Form>
        </Formik>
      </section>
    </div>
  );
};

export default EditAdmin;
