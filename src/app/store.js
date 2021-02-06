import { configureStore } from '@reduxjs/toolkit';
import { counterReducer } from '../features/reducers';

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});
