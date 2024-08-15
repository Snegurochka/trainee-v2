import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { updateCompleted } from "./user-firebase";
import { TUser } from "./user-types";

const initialState = {
  user: null as TUser | null,
};

export const setResult = createAsyncThunk(
  "user/setResult",
  async (payload: { completed: number[]; idDoc: string }) => {
    const { completed, idDoc } = payload;
    await updateCompleted(idDoc, completed);
    return payload;
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    removeUser: (state) => {
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(setResult.fulfilled, (state, action) => {
      if (state.user) {
        state.user.completed = action.payload.completed;
      }
    });
  },
});

export const { setUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
