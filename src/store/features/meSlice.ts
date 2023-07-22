import { createSlice } from "@reduxjs/toolkit";

export interface MeState {
    name: string;
    age: number;
    num: number;
}

const initialState: MeState = {
    name: '我是小明',
    age: 20,
    num: 100
}

export const meSlice = createSlice({
    name: 'me',
    initialState,
    reducers: {
        // 第一个参数 就是这个仓库的存放（模板）的数据   第二个参数 就是 调用这个方法传递过来的数据
        changeName(state, val) {
            console.log(val)
            // 重新创建仓库数据吗？return {num：最新的数据} => 仓库数据就会被替换
            state.name=val.payload;
        },
        addAge(state, val) {
            state.age += val.payload;
        },
        addNum(state, val) {
            state.num = state.num+val.payload;
        }
    }
})

// 将行为暴露出去
export const { changeName, addAge, addNum } = meSlice.actions;

export default meSlice.reducer;