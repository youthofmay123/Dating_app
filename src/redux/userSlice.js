import { createSlice } from '@reduxjs/toolkit';
import userDetail from '../constants/userDetail'; // Import dữ liệu mẫu từ file bạn đã cung cấp

// Khởi tạo state mặc định
const initialState = {
    currentUser: userDetail[0], // Chọn người dùng đầu tiên mặc định
    allUsers: userDetail, // Tất cả người dùng
    favoriteUsers: [], // Khởi tạo favoriteUsers dưới dạng mảng rỗng
    name: '',
};

// Tạo slice với Redux Toolkit
const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        // Action để set người dùng hiện tại
        setCurrentUser: (state, action) => {
            state.currentUser = action.payload;
        },
        // Action để cập nhật danh sách người dùng
        setAllUsers: (state, action) => {
            state.allUsers = action.payload;
        },
        // Action to add a user to the favorite list
        addFavoriteUser: (state, action) => {
            const user = action.payload;
            console.log('Adding user to favorites:', user); // Check user properties here
            state.favoriteUsers.push(user);
        },

        // Action to remove a user from the favorite list
        removeFavoriteUser: (state, action) => {
            const userId = action.payload;
            state.favoriteUsers = state.favoriteUsers.filter((favUser) => favUser.id !== userId);
        },
    },
});

// Xuất ra actions và reducer
export const { setCurrentUser, setAllUsers, addFavoriteUser, removeFavoriteUser, setName } = userSlice.actions;
export default userSlice.reducer;
