import { createSlice } from '@reduxjs/toolkit';

export interface CounterState {
    value: number;
    title: string;
}

const initialState: CounterState = {
    value: 0,
    title: "redux toolkit pre"
}

// 创建一个Slice
/**
 * slice 是一个包含了相关reducer函数和action creator函数的对象，用于管理redux store中的状态
 */
export const counterSlice = createSlice({
    name: 'counter', // 作用域，唯一标识，
    initialState,
    // 定义reducers 并生成相关操作
    reducers: {
        // 定义一个加的方法
        increment: (state) => {
            state.value += 1;
        },
        // 定义一个减的方法
        decrement: (state) => {
            state.value -= 1;
        }
    }
})

// 导出加减法操作
export const { increment, decrement } = counterSlice.actions;

// 默认导出，可以用来创建redux store
export default counterSlice.reducer;