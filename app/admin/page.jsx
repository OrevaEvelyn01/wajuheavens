// app/admin/page.js
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import React from "react";
import EditAdmin from "@/components/EditAdmin";
import { admins } from "@/lib/admin";

const page = async () => {
  const session = await auth();
  const adminEmail = process.env.ADMIN_EMAIL;

if (!session || !admins.includes(session.user.email)) {
    redirect("/403");
  }

  return (
    <div>
     
      <EditAdmin session={session}/>
    </div>
  );
};

export default page;
