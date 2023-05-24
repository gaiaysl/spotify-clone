
import PlayList from './PlayList';
import {Icon} from '../icon';
export default function SideBar() {

    return (
      <div className="w-96 flex flex-shrink-0 flex-col">
        
        <div className='bg-backdrop rounded-md ml-2'>
          
         
          <nav className="px-2 py-8">
            <ul className="flex flex-col">
              <li> 
                <a href="/" className="gap-x-4 h-10 flex font-semibold text-link items-center hover:text-white px-4 rounded bg-active">
                <Icon name="home" />Home
                </a>
              </li>
              <li>
                <a href="/search" className="gap-x-4 h-10 flex font-semibold text-link items-center hover:text-white px-4 rounded ">
                <Icon name="search" />Search
                </a>
              </li>
            </ul>
          </nav>
        
        </div>

        <div className='bg-backdrop h-full rounded-md ml-2 mt-2 flex-auto'>
          <div className='flex flex-row justify-between'>
            <a href="/collection" className="gap-x-4 h-10 flex font-semibold text-link items-center hover:text-white px-6 rounded ">
              
            <Icon name="collection" />Your Library
           
            </a>
            <a href="#" className="text-link  px-4 py-3">

                <Icon name="plus" size={18} />
            </a>
          </div>

          <div className='py-3 mb-3 px-3 text-sm'>
            <button className='border-2 rounded-full border-active bg-active px-2 py-1 text-sm mx-2'>PlayLists</button>
            <button className='border-2 rounded-full border-active bg-active px-2 py-1 text-sm'>Artists</button>
          </div>
          <div className='max-h-96 overflow-auto border-t border-white border-opacity-20 '>
          <a href="/liked-songs" className="mt-4 flex flex-row items-center gap-x-3  rounded h-10 mx-6 ">
            <span className='bg-gradient-to-br from-heart to-blue-100 rounded-sm p-3'>
                <Icon name="heart" />
            </span>
            Liked Songs
          </a>

          <a href='/my-playlist' className="items-center mt-4  flex flex-row gap-x-3 rounded h-10 mx-6  ">
            <span className='bg-active rounded-sm p-3 flex items-center'>
                <Icon name="plus" />
            </span>
            My Playlists
          </a>
            
        
          <PlayList />
         
        </div>
            
         
        </div>

      </div>
    );
}
