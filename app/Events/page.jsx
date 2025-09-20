"use server";
import React from "react";
import Eventlist from "./eventlist";
import { auth } from "@/auth";
import { admins } from "@/lib/admin";

const page = async () => {
  const session = await auth();
  const isAdmin = session?.user?.email
    ? admins.includes(session.user.email)
    : false;

  return (
    <div>
      <Eventlist isAdmin={isAdmin} />
    </div>
  );
};

export default page;
