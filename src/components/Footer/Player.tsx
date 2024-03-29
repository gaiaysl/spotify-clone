'use client';

import React, { useMemo,useEffect } from 'react';
import { Icon } from '@/icon';
import {useAudio} from 'react-use';
import { secondsToTime } from '@/utils';
import CustomRange from '../CustomRange';
import { useDispatch,useSelector } from 'react-redux';
import { setControls } from '@/redux/features/playerSlice';
import { RootState } from '@/redux/store';


export default function Player() {

  const dispatch = useDispatch()

  const {current} = useSelector((state:RootState) => state.player)

  const [audio, state, controls, ref] = useAudio({
    src: current?.src
    
  });

  useEffect(()=>{
    dispatch(setControls(controls))
 },[])

   useEffect(()=>{
    controls.play()
   },[current])

  const volumeIcon = useMemo(() => {
    if (state.volume === 0 || state.muted)
        return 'volumeMuted'
    if (state.volume > 0 && state.volume < 0.33)
        return 'volumeLow'
    if (state.volume >= 0.33 && state.volume < 0.66)
        return 'volumeNormal'
    return 'volumeFull'
}, [state.volume, state.muted])

  function setSidebar(arg0: boolean): any {
    throw new Error('Function not implemented.');
  }

  return (
    <div className="flex px-4 flex-row h-full justify-between items-center ">
      <div className="min-w-[11.25rem] w-[30%] ">
      {current &&(
        <div className="flex items-center gap-x-2 ">
          <div className='h-14 w-14 flex flex-row mr-3'>
          <img src={current.image} />
          <button
               
                className="w-6 h-6 bg-black opacity-0 group-hover:opacity-60 hover:!opacity-100 hover:scale-[1.06] rotate-90 rounded-full absolute top-1 right-1 flex items-center justify-center">
                <Icon size={16} name="arrow"/>
          </button>
          </div>
          <div>
         <h6 className='text-sm line-clamp-1'>{current.title}</h6>
          <p className='text-[0.688rem] text-white text-opacity-70 mt-1 line-clamp-1'>{current.description}</p>
          </div>
       
          <button className="flex items-center ml-4 justify-center text-white text-opacity-70 hover:text-opacity-100">
            <Icon name="heart" size={18} />
          </button>
          <button className="flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
            <Icon name="picture" size={18} />
          </button>
         
          </div>
          )
        }
       
      </div>
      <div className=" max-w-[45.125] w-[30%] flex flex-col items-center">
        <div className="flex items-center gap-x-2 mb-5">
          <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
            <Icon name="shuffle" size={16} />
          </button>
          <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
            <Icon name="prevplay" size={16} />
          </button>
          <button onClick={controls[state?.playing? 'pause':'play']} className="w-8 h-8 flex items-center justify-center bg-white rounded-full text-white text-opacity-70 hover:text-opacity-100">
            <Icon name={state.playing?'pause':'play'} size={16} />
          </button>
          <button  className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
            <Icon name="nextplay" size={16} />
          </button>
          <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
            <Icon name="repeat" size={16} />
          </button>
        </div>
        <div className="w-full flex items-center mt-1.5 gap-x-2">
                    {audio}
                    <div className="text-[0.688rem] text-white text-opacity-70">
                        {secondsToTime(state?.time)}
                    </div>
                    <CustomRange
                         step={0.01}
                         min={0}
                         max={state?.duration || 1} 
                         value={state?.time }
                         onChange={(value) => controls.seek(value)}
                    />
                    <div className="text-[0.688rem] text-white text-opacity-70">
                        {secondsToTime(state?.duration)}
                    </div>
                </div>
      </div>
      <div className="min-w-[11.25rem] w-[30%] flex items-center justify-end">
      <button
                    className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
                    <Icon size={16} name="lyrics"/>
                </button>
                <button
                    className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
                    <Icon size={16} name="queue"/>
                </button>
                <button
                    className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
                    <Icon size={16} name="connect"/>
                </button>
                <button
                    onClick={controls[state.muted ? 'unmute' : 'mute']}
                    className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
                    <Icon size={16} name={volumeIcon}/>
                </button>
                <div className="w-[5.813rem] max-w-full">
                    <CustomRange
                        step={0.01}
                        min={0}
                        max={1}
                        value={state.muted ? 0 : state?.volume}
                        onChange={value => {
                            controls.unmute()
                            controls.volume(value)
                        }}
                    />

      </div>
    </div>
    </div>
  );
}
