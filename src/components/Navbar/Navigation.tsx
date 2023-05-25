
'use client'
import { useRouter } from 'next/navigation'
import {Icon} from '../../icon'
export default function Navigation() {
    
    const router = useRouter();

    const goBack = () => {
      router.back();
    };
    const goForward = () => {
        router.forward();
    };
   
  return (
    <div className='flex items-center gap-x-3'>
      <button onClick={goBack} className='w-8 h-8 bg-black flex items-center justify-center rounded-full bg-opacity-70'>
        <Icon name='prev' size={22} />
      </button>
      <button onClick={goForward} className='w-8 h-8 bg-black flex items-center justify-center rounded-full bg-opacity-70'>
        <Icon name='next' size={22} />
      </button>
    </div>
  );
}