import './globals.css'
import { Inter } from 'next/font/google'
import SideBar from "@/components/SideBar";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import { Providers } from "@/redux/provider";



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
      <Providers> 
      <div className="main">
  
  <div className=" flex flex-row h-full ">
  <SideBar />
  
  <div className="mt-2  ml-2 flex-auto ">
       <div className="bg-gradient-to-b from-navlink to-bg-backdrop px-2 h-full rounded-md   ">
        <div className='overflow-auto '>
         <Navbar />
         </div>
        {children}
       </div>
       
     </div>
      
      </div>
     
  <div className=" flex  flex-col justify-end">
    
    <Footer />
  </div>
</div>
</Providers>
      </body>
    </html>
  )
}
