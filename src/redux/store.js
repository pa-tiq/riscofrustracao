import { configureStore } from '@reduxjs/toolkit';
import menuOpenReducer from './menuOpenSlice';

export default configureStore({
  reducer: {
    menu: menuOpenReducer,
  },
});
