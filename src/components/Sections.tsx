"use client";

import {Icon} from '../icon';
import { setCurrent } from '@/redux/features/playerSlice';
import {useDispatch, useSelector} from "react-redux";

interface Item {
  id: number;
  title: string;
  description: string;
  image: string;
  type:string;

}

interface SectionsProps {
  title: string;
  items: Item[];
  
}

export default function Sections({ title, items }: SectionsProps) {
 
  const dispatch = useDispatch()

  const { current } = useSelector(state => state.player)
    const ImageStyle = (item : Item) => {
        switch (item.type) {
        
            case "artist":
                return " rounded-full"
            case "podcast":
                return " rounded-lg"
            default:
                return " rounded"
         }  } 
         

   
  return (
    <section className="mt-4">
      <h2 className="text-2xl font-semibold hover:underline  ">{title}</h2>
      <div className="grid grid-cols-4 mt-6  gap-x-6">
        {items.map((item) => (
          <div key={item.id} className="bg-backdrop  rounded-lg mb-4 hover:bg-active h-72  p-4  group relative ">
            <div >
             <img
                src={item.image}
                alt={item.title}
                className={`h-full w-full relative object-cover object-center ${ImageStyle(item)}`}
              />
              <button 
              onClick={() => dispatch(setCurrent(item))}
              className="w-11 h-11 rounded-full bg-primary absolute top-[155px] right-6 flex items-center justify-center opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-300">
              <Icon name={current?.id == item.id ? 'pause':'play'}  size={24}/>
              </button>
            
              <h3 className="text-base font-bold mt-2">{item.title}</h3>
            <p className="text-sm font-semibold text-link overflow-hidden overflow-ellipsis whitespace-nowrap">
              {item.description}
            </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
