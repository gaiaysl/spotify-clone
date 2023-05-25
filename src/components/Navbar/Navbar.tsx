'use client'

import { useRouter,usePathname } from 'next/navigation';
import { useEffect } from 'react';
import Auth from './Auth';
import Navigation from './Navigation';
import Search from './Search';
import Buttons from './Buttons';

export default function Navbar (){
  
  const pathname = usePathname();

  const navigation = useRouter();
  useEffect(() => {
    navigation.prefetch('/search'); 
  }, []);

  return (
    
    <nav className="h-[3.75rem] flex items-center  justify-between px-6 relative z-10 ">
      <Navigation />
      {pathname === '/search' ? <Search />:(
        <div className="flex-auto ">
          <Buttons  />
      
        </div>
      )}
      <Auth />
    </nav>
  );
};


