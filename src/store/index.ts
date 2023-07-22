import { configureStore } from '@reduxjs/toolkit';
import counterSlice from "./features/counterSlice";

// configureStore创建一个redux数据
const store = configureStore({
    // 合并多个slice
    reducer: {
        counter: counterSlice
    },
})

export default store;