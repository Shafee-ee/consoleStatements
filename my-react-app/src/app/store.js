import { configureStore } from "@reduxjs/toolkit";
import namesReducer from '../features/names/namesSlice';

const store = configureStore({
    reducer: {
        names: namesReducer
    }
});

export default store