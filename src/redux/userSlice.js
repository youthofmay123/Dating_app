import { createSlice } from '@reduxjs/toolkit';
import userDetail from '../constants/userDetail'; // Import dữ liệu mẫu từ file bạn đã cung cấp

// Khởi tạo state mặc định
const initialState = {
    currentUser: userDetail[0], // Chọn người dùng đầu tiên mặc định
    allUsers: userDetail, // Tất cả người dùng
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
    },
});

// Xuất ra actions và reducer
export const { setCurrentUser, setAllUsers } = userSlice.actions;
export default userSlice.reducer;
