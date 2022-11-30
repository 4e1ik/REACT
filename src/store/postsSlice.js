import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
// import {posts} from "@reduxjs/toolkit/src/query/tests/mocks/server";

const initialState = {
    posts: [],
    loading: false,
    reducers: {
    }
};

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    return response.json();
});

export const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        removePost: (state, action) => {
            state.posts = state.posts.filter((post) => post.id !== action.payload)
        },
    },
    extraReducers: {
        [fetchPosts.fulfilled]: (state, action) => {
            state.loading = false;
            state.posts = action.payload;
        },
        [fetchPosts.pending]: (state, action) => {
            state.loading = true;
        },
    },
});

export const {removePost} = postsSlice.actions;

export default postsSlice.reducer;