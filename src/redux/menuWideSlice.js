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
  },
});

export const { toggleMenu } = slice.actions;

export default slice.reducer;
