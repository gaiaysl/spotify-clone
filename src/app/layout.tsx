import './globals.css'
import { Inter } from 'next/font/google'
import SideBar from "@/components/SideBar";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar/Navbar";


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Spotify',
  description: 'Spotify',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <div className="main">
  
  <div className=" flex flex-row h-full ">
  <SideBar />
  
  <div className="mt-2  ml-2 flex-auto">
       <div className="bg-backdrop px-4 h-full rounded-md  ">
         <Navbar />
      {children}
       </div>
       
     </div>
      
      </div>
     
  <div className=" flex  flex-col justify-end">
    
    <Footer />
  </div>
</div>
      </body>
    </html>
  )
}
