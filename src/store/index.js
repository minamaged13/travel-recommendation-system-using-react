import { configureStore } from '@reduxjs/toolkit';

import registerReducer from './registerSlice'
import userReducer from './UserSlice'

const store = configureStore({
  reducer: { register: registerReducer , user: userReducer},
});

export default store;
