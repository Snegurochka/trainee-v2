import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../../app/services/store";

export const selectUser = (state: RootState) => state.user.user;
export const selectUserName = (state: RootState) => state.user.user?.name;
export const selectUid = (state: RootState) => state.user.user?.id;
export const selectIdDoc = (state: RootState) => state.user.user?.idDoc;
export const selectCompleted = (state: RootState) => state.user.user?.completed || [];
export const selectLevel = (state: RootState) => state.user.user?.level;
export const selectCompletedTotal = createSelector(selectCompleted, (completed) => completed.length);
export const selectSortedCompleted = createSelector(selectCompleted, (completed) => [...completed].sort((a, b) => a - b));