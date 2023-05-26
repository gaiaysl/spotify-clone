'use client';
import React, { useMemo, useState } from 'react';
import { Icon } from '@/icon';
import { Range } from 'react-range';
import {useAudio} from 'react-use';
import { secondsToTime } from '@/utils';
import CustomRange from '../CustomRange';

export default function Player() {
  
  const [audio, state, controls, ref] = useAudio({
    src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
    
  });
  const volumeIcon = useMemo(() => {
    if (state.volume === 0 || state.muted)
        return 'volumeMuted'
    if (state.volume > 0 && state.volume < 0.33)
        return 'volumeLow'
    if (state.volume >= 0.33 && state.volume < 0.66)
        return 'volumeNormal'
    return 'volumeFull'
}, [state.volume, state.muted])

  return (
    <div className="flex px-4 flex-row h-full justify-between items-center ">
      <div className="min-w-[11.25rem] w-[30%]">sol</div>
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
                         value={state?.time}
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
