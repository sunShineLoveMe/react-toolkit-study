// configureStore 是 Redux Toolkit 提供的一个函数，用于创建 Redux store
import { configureStore } from '@reduxjs/toolkit';
import counterSlice from "./features/counterSlice";
import meSlice from './features/meSlice';
import numSlice from './features/numSlice';
/**
 * 这段代码是使用redux toolkit创建redux store的示例
 * redux store 是redux应用程序中的核心概念，它是存储应用程序状态的地方
 */
// configureStore创建一个redux数据
const store = configureStore({
    // 合并多个slice
    reducer: {
        counter: counterSlice,
        me: meSlice,
        num: numSlice
    },
})

export default store;

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch;