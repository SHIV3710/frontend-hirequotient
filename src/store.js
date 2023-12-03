import {configureStore} from "@reduxjs/toolkit";
import { customerReducer } from "./Reducer";

const store = configureStore({
    reducer:{
        custom : customerReducer,
    },
})

export default store;