'use client';
import React, { useState } from 'react';
import { Icon } from '@/icon';
import { Range } from 'react-range';
import {useAudio} from 'react-use';
import { secondsToTime } from '@/utils';

export default function Player() {
  const [values, setValues] = useState<number[]>([50]);
  const [audio, state, controls, ref] = useAudio({
    src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
    autoPlay: true,
  });


  return (
    <div className="flex px-4 flex-row h-full justify-between items-center ">
      <div className="mx-6">sol</div>
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
        {audio}
        <div className="text-[0.688rem] text-white text-opacity-70">
                        {secondsToTime(state?.time)}
                    </div>
        <Range
            step={0.1}
            min={0}
            max={100}
            values={values}
            onChange={(newValues) => setValues(newValues)}
            renderTrack={({ props, children }) => (
              <div
                {...props}
                className='h-1 w-full bg-white bg-opacity-20 rounded-full'
              >
                {children}
              </div>
            )}
            renderThumb={({ props }) => (
              <div
                {...props}
                className='rounded-full bg-white w-4 h-4'
              />
            )}
          />
           <div className="text-[0.688rem] text-white text-opacity-70">
                        {secondsToTime(state?.duration)}
                    </div>
      </div>
      <div className="">
        sağ
      </div>
    </div>
  );
}
