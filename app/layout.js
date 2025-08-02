import { Geist, Geist_Mono, Open_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";


const opensans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
})

export const metadata = {
  title: "Eventify",
  description: "Book and review any event at your convenience",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${opensans.className} antialiased`}
      >

        <Navbar />
        {children}
      </body>
    </html>
  );
}
