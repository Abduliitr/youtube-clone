import { createSlice } from "@reduxjs/toolkit";

export const appSlice = createSlice({
    name: 'app',
    initialState: {
        user: null,
        token: null,
        currentVideo: null,
        suggestedVideos: [],
        loading: false,
        error: null
    },
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
        },
        setToken: (state, action) => {
            state.token = action.payload;
        },
        setCurrentValue: (state, action) => {
            state.currentVideo = action.payload;
        },
        setSuggestedVideos: (state, action) => {
            state.suggestedVideos = action.payload;
        },
        logout: (state, action) => {
            state.user = null;
            state.token = null;
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
        }
    }
})

export const {setUser, setToken, setCurrentValue, setSuggestedVideos, logout,
    setLoading, setError} = appSlice.actions;

export default appSlice.reducer;