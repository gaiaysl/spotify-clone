import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faSearch, faBook } from '@fortawesome/free-solid-svg-icons';

export default function SideBar() {

    return (
      <div className="w-96  mt-2 flex flex-col  ">
        
        <div className='bg-backdrop  rounded-md ml-2'>
    <div className="px-6 ">
        <img src="/spotifyLogo.png" alt={""} className=" w-32  h-10" />
        
        </div>
      
        <nav className="px-2 py-8 ">
        <ul className="flex flex-col  ">
        <li> 
                <a href="/" className="gap-x-4 h-10 flex semi-bold text-link items-center hover:text-white px-4 rounded bg-active">
                    <FontAwesomeIcon icon={faHome} className="mr-2 h-4" />Ana Sayfa
                </a>
        </li>
        <li>
                <a href="/about" className="gap-x-4 h-10  flex semi-bold text-link items-center hover:text-white px-4 rounded ">
                    <FontAwesomeIcon icon={faSearch} className="mr-2 h-4" />Ara
                </a>
        </li>
       

        </ul>
       </nav>
       </div>
       <div className='bg-backdrop  h-full rounded-md ml-2 mt-2'>
      
      <a href="#" className="gap-x-4 h-10 flex semi-bold text-link items-center hover:text-white px-4 rounded ">
          <FontAwesomeIcon icon={faBook} className="mr-2 h-4 " />Kitaplığın
      </a>
<div>
    dedşeğdeğdeğdşeğeş
</div>
</div>
      </div>
    );
  }