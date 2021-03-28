import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
    name: 'counter',
    initialState: {
        value: 0
    },
    reducers: {
        plusAction: (state, action) => ({
            ...state,
            value: state.value + action.payload
        }),
        minusAction: (state, action) => ({
            ...state,
            value: state.value - action.payload
        })
    }
})
export const { plusAction, minusAction } = slice.actions;
export const selectCount = state => state.counter.value;
export default slice.reducer;


// // Action---------------------
// export const plusAction = (amount) => {
//     return {
//         type: 'PLUS',
//         payload: amount
//     }
// }
// export const minusAction = (amount) => {
//     return {
//         type: 'MINUS',
//         payload: amount
//     }
// }

// //Reducer-------------------------
// const counter = (state = { value: 0 }, action) => {
//     switch (action.type) {
//         case 'PLUS':
//             return {
//                 ...state,
//                 value: state.value + action.payload
//             }
//         case 'MINUS':
//             return {
//                 ...state,
//                 value: state.value - action.payload
//             }
//         default:
//             return state;
//     }
// }

// export default counter