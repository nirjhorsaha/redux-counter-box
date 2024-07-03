import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

type CounterType = {
    count: number
}

const initialState: CounterType = { count: 0 }

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.count += 1;
        },
        decrement: (state) => {
            state.count -= 1;
        },
        incrementByValue: (state, action: PayloadAction<number>) => {
            state.count + action.payload
        },
        // reset: (state) => {
        //     state.count = 0;
        // },
    }
})

export const { increment, decrement, incrementByValue, reset } = counterSlice.actions;
export default counterSlice.reducer