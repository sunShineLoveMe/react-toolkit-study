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
export const counterSlice = createSlice({
    name: 'counter',
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

// 默认导出
export default counterSlice.reducer;