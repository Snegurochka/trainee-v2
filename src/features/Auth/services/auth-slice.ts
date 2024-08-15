import { createSlice } from "@reduxjs/toolkit";
import { setApiAuth } from "./auth-api";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        isAuth: false,
    },
    reducers: {
        setAuth: (state, action) => {
            state.isAuth = action.payload;
        },
    },
    extraReducers(builder) {
        builder.addCase(setApiAuth.fulfilled, (state) => {
            state.isAuth = true;
        })
    }
});

export const authReducer = authSlice.reducer;
export const { setAuth } = authSlice.actions;