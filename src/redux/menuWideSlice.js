import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'menuWide',
  initialState: {
    menuWide: true,
  },
  reducers: {
    toggleMenu: (state) => {
      const newState = !state.menuWide;
      state.menuWide = newState;
    },
    wideMenu: (state) => {
      state.menuWide = true;
    },    
    narrowMenu: (state) => {
      state.menuWide = false;
    },
  },
});

export const { toggleMenu, wideMenu, narrowMenu } = slice.actions;

export default slice.reducer;
