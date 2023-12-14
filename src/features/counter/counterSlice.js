import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    //intitial state value
    name: 'counter',
    initialState: {
        value: 0
    },
    // reducer / actions to determine how the state should update
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        }
    }
})

export const { increment, decrement } = counterSlice.actions;

export const selectCount = (state) => state.counter.value

export default counterSlice.reducer;