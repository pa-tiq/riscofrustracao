import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'menuWide',
  initialState: {
    menuWide: true,
    showMobileMenu:false,
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
    toggleMobileMenu: (state) => {
      const newState = !state.showMobileMenu;
      state.showMobileMenu = newState;
    }
  },
});

export const { toggleMenu, wideMenu, narrowMenu, toggleMobileMenu } = slice.actions;

export default slice.reducer;
