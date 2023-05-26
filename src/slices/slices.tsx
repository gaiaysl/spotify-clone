import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PlayerState {
  current: any;
  controls: any;
  playing: boolean;
}

const initialState: PlayerState = {
  current: false,
  controls: false,
  playing: false,
};

const playerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    setCurrent: (state, action: PayloadAction<any>) => {
      state.current = action.payload.current;
    },
    setControls: (state, action: PayloadAction<any>) => {
      state.controls = action.payload.controls;
    },
    setPlaying: (state, action: PayloadAction<boolean>) => {
      state.playing = action.payload;
    },
  },
});

export const { setCurrent, setControls, setPlaying } = playerSlice.actions;

export default playerSlice.reducer;
