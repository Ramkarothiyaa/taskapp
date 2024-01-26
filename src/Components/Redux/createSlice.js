import { createSlice } from '@reduxjs/toolkit';

// const intialState = []

const cartSlice = createSlice({

    name: 'cart',
    initialState: [],
    reducers: {
        add(state, action) {
            ///redux
            state.push(action.payload)
            console.log("add", action.payload)
        },
        remove(state, action) {
            console.log("remove", state, action)
            return state.filter(item => item.id !== action.payload)
        },
    },
})


export const { add, remove } = cartSlice.actions;

export default cartSlice.reducer;