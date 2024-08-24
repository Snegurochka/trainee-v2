import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../../app/services/store";

export const selectXp = (state: RootState) => state.xp.userXp;

export const selectNearestXpThreshold = createSelector(
  (state: RootState) => state.xp.xpThresholds,
  (state: RootState) => state.user.user?.level || 0,
  (xpThresholds, level) =>
    xpThresholds[level]
);
