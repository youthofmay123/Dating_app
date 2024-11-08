<<<<<<< HEAD
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice'; // Import userReducer

// Cấu hình store
=======
//Lưu trữ thông tin
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';

>>>>>>> feature/chat
const store = configureStore({
    reducer: {
        user: userReducer,
    },
});
<<<<<<< HEAD

=======
>>>>>>> feature/chat
export default store;
