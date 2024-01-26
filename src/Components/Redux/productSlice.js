import { createSlice } from '@reduxjs/toolkit';

export const STATUSES = Object.freeze({
    IDLE: 'idle',
    Error: 'error',
    LOADING: 'loading'
})

const productSlice = createSlice({

    name: 'product',
    initialState: {
        data: [],
        status: STATUSES.IDLE,

    },
    reducers: {
        setProducts(state, action) {
            state.data = action.payload;
        },
        setRemove(state, action) {
            // console.log("action.payload",action.payload);
            state.data= state.data.filter(item => item.id !== action.payload)
            // console.log("state.data",state.data);
        },
        setStatus(state, action) {
            state.status = action.payload;
        },

    },
})


export const { setProducts, setStatus,setRemove } = productSlice.actions;

export default productSlice.reducer;

export function FetchProducts() {
    return async function FetchProductThunk(dispatch, getState) {
        dispatch(setStatus(STATUSES.LOADING))
        try {
            const res = await fetch("https://jsonplaceholder.typicode.com/posts")
            const data = await res.json()

            dispatch(setProducts(data))
            dispatch(setStatus(STATUSES.IDLE))

        } catch (error) {
            console.log("disptach api calling", error)
        }
    }
}


