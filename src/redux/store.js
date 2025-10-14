import {configureStore} from "@reduxjs/toolkit";
import categoryReducer from "./Slice/categorySlice"

const myStore = configureStore({
    reducer: {
        category: categoryReducer
    }
})

export default myStore