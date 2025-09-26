"use client";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import React, { useRef } from "react";
import { FiLoader } from "react-icons/fi";
import { useState } from "react";

const page = () => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const form = useRef();

 const sendEmail = async (e) => {
  e.preventDefault();
  setLoading(true);

  const formData = new FormData(form.current);
  const data = Object.fromEntries(formData);

  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const result = await res.json();

    if (result.success) {
      setMessage("Your message has been sent successfully ✅");
      e.target.reset();
    } else {
      setMessage(result.error || "Something went wrong ❌");
    }
  } catch (err) {
    console.error("Error:", err);
    setMessage("Failed to send message ❌");
  } finally {
    setLoading(false);
    setTimeout(() => setMessage(""), 3000);
  }
};


  return (
    <div className=" bg-linear-to-bl from-[#073f3f] to-[#fffff0] min-h-dvh flex flex-col  items-center justify-center gap-10 py-15">
      <div className="flex flex-col  gap-7 items-center p-10">
        <h1 className="text-5xl font-semibold">Get in Touch </h1>
        <p>
          We will turn your fantasies into a reality. With Wajuheavens you can
          experience what a wedding in heaven feels like.
        </p>
      </div>

      <div className="shadow-lg rounded-lg w-[80%]  max-[970px]:w-[98%] flex items-center md:justify-center bg-[#fffff0]">
        <div className=" flex flex-col md:grid md:grid-cols-3  rounded-lg text-[#Fffff0] text-sm  max-md:w-[100vw] justify-center">
          <div className="flex  flex-col gap-7 bg-[#073f3f] m-2 rounded-lg p-7 ">
            <div className="flex flex-col gap-4">
              <h2 className="text-2xl font-semibold pt-5">
                Contact Information
              </h2>

              <p>We are here to give our clients top tier events</p>
            </div>

            <div className=" flex  gap-4 items-center">
              <FaPhoneAlt className="text-[#Fffff0]" />

              <div className="flex flex-col">
                <span> +2348144583926</span>
                <span> +2349067836007</span>
              </div>
            </div>

            <div className=" flex  gap-4 items-center">
              <IoMdMail className="text-[#Fffff0] " />

              <span> Wajuheavens@gmail.com</span>
            </div>

            <div className=" flex  gap-4 items-center">
              <IoLocationSharp />
              <span>Kubwa, Abuja</span>
            </div>
          </div>

          <div className="md:col-span-2 text-black">
            <p className="text-center text-sm pt-3">{message}</p>
            <form
              ref={form}
              onSubmit={sendEmail}
              className="w-[95%] flex flex-col justify-center py-10 px-14 gap-10"
            >
              <div className="grid md:grid-cols-2 gap-10 ">
                <div className="flex flex-col gap-1">
                  <label htmlFor="names"> Your Name</label>
                  <input
                    type="text"
                    id="names"
                    required
                    placeholder="Your name"
                    className=" outline-none border-0 border-b-1 w-full placeholder:text-base "
                    name="name"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label htmlFor="emails"> Your Email</label>
                  <input
                    type="email"
                    id="emails"
                    required
                    placeholder="email@example.com"
                    className=" outline-none border-0 border-b-1 w-full placeholder:text-base "
                    name="email"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <label htmlFor="subect">Subject</label>
                <input
                  type="text"
                  required
                  id="subject"
                  className=" outline-none border-0 border-b-1 w-full placeholder:text-base "
                  name="subject"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label htmlFor="message"> Message</label>
                <textarea
                  name="message"
                  id="message"
                  required
                  placeholder="Write your message"
                  className=" outline-none border-0 border-b-2 border-b-[#073f3f] w-full placeholder:text-base "
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="px-6 py-3 text-[#fffff0] rounded-md bg-[#073f3f] flex items-center  justify-center"
              >
                {" "}
                {loading ? (
                  <FiLoader className="animate-spin text-2xl text-center " />
                ) : (
                  "Send message"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
