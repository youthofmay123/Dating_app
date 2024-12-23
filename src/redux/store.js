import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice'; // Import userReducer

const store = configureStore({
    reducer: {
        user: userReducer,
    },
});

export default store;
