import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { updateXp } from "./xp-firebase";

const initialState = {
  userXp: 0,
  xpThresholds: [0, 91, 273, 485],
};

export const addXp = createAsyncThunk(
  "user/addXp",
  async (payload: { xp: number; idDoc: string }) => {
    const { xp, idDoc } = payload;
    await updateXp(idDoc, xp);
    return payload;
  }
);

const xpSlice = createSlice({
  name: "xp",
  initialState,
  reducers: {
    setXp(st, action) {
      st.userXp = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(addXp.fulfilled, (state, action) => {
        state.userXp = action.payload.xp;
    });
  },
});

export default xpSlice.reducer;

export const { setXp } = xpSlice.actions;
