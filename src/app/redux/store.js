const { configureStore } = require("@reduxjs/toolkit");
import reducer from './slice'

export const store = configureStore({
    // reducerProduct:ProductReducer,
    reducer: reducer
})