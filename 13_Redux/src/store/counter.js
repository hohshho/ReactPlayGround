import { createSlice } from '@reduxjs/toolkit';

const initialCountState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
    name: 'counter',
    initialState: initialCountState,
    reducers: {
        increment(state) {
            state.counter++;
        },
        decrement(state) {
            state.counter--;
        },
        increase(state, action) {
            state.counter = state.counter + action.payload; // payload로 필드명 사용
        },
        toggleCounter(state) {
            state.showCounter = !state.showCounter;
        },
    },
});

export default counterSlice.reducer;
export const countActions = counterSlice.actions;
