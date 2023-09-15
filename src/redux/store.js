import { configureStore } from '@reduxjs/toolkit';
import menuWideReducer from './menuWideSlice';

export default configureStore({
  reducer: {
    menu: menuWideReducer,
  },
});
