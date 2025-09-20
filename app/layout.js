import { Geist, Geist_Mono, Open_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AuthProvider from "@/components/AuthProvider";
import { admins } from "@/lib/admin";
import { auth } from "@/auth";

const opensans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "wajuheavens",
  description: "Book and review any event at your convenience",
};

export default async function RootLayout({ children }) {
  const session = await auth();
  const isAdmin = session?.user?.email
    ? admins.includes(session.user.email)
    : false;
  return (
    <html lang="en">
      <body className={`${opensans.className} antialiased`}>
        <AuthProvider>
          <Navbar isAdmin={isAdmin} />
          {children}
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
