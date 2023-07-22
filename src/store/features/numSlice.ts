import { createSlice } from "@reduxjs/toolkit";

export interface NumState {
    num: number;
    list: number[]
}

const initialState: NumState = {
    num: 2,
    list: [1, 2, 3, 4, 5]
}

export const numSlice = createSlice({
    name: 'num',
    initialState,
    reducers: {
        add(state, val) {
            state.num = state.num + val.payload;
        },
        reduce(state) {
            state.num = state.num - 1;
        },
        addList(state, val) {
            state.list.push(val.payload);
        },
        reduceList(state, val) {
            state.list.splice(val.payload, 1);
        }
    }
})

export const { add, reduce, addList, reduceList } = numSlice.actions;

export default numSlice.reducer;