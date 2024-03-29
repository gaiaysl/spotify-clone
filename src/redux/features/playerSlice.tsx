import { createSlice } from "@reduxjs/toolkit";

interface PlayerState {
  current: any;
  controls: any;
  playing: boolean;

}

const initialState = {
  current: false,
  controls: false,
  playing: false,

} as PlayerState;

export const player = createSlice({
  name: "player",
  initialState,
  reducers: {
    setCurrent: (state, action) => {
      state.current = action.payload
  },
  setControls: (state, action) => {
      state.controls = action.payload
  },
  setPlaying: (state, action) => {
      state.playing = action.payload
  },
  
  
  },
});

export const { setCurrent, setControls, setPlaying } = player.actions;

export default player.reducer;
