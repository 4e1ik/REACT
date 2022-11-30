import {configureStore} from "@reduxjs/toolkit";
import counterReducer from './counterSlice';
import postsReducer from './postsSlice';
import countriesReducer from "./countriesSlice";

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        posts: postsReducer,
        countries: countriesReducer,
    },
});