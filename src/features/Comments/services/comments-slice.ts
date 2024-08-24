import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { TComment } from "./comments-types";
import { getComments } from "./comments-firebase";

export const fetchComments = createAsyncThunk(
  "comments/fetchComments",
  async (questionID: string) => {
    const data = await getComments(questionID);

    return data;
  }
);

const initialState = {
  isOpened: false,
  comments: [] as TComment[],
};

const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    setCommentsOpened: (st) => {
      st.isOpened = !st.isOpened;
    }
  },
  selectors: {
    selectComments: (st) => st.comments,
    selectIsOpened: (st) => st.isOpened
  },
  extraReducers: (builder) => {
    builder.addCase(fetchComments.fulfilled, (st, action) => {
      st.comments = action.payload;
    });
  },
});

export default commentsSlice.reducer;

export const { selectComments, selectIsOpened } = commentsSlice.selectors;

export const { setCommentsOpened } = commentsSlice.actions;
