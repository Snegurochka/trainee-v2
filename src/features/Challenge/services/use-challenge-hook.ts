import { useCallback } from "react";
import { useSelector } from "react-redux";

import { selectChallengeActive, selectChallengeDateStart, selectIdChallenge } from "./challenge-selector";
import { setLastCheckIn, startChallenge } from "./challenge-slice";
import { daysInterval } from "./challenge-utils";
import { selectUid } from "../../../entities/User";
import { useAppDispatch } from "../../../shared/services/hooks/redux";

const currentDate = Date.now();

export const useChallenge = () => {
  const UID = useSelector(selectUid);
  const idChallenge = useSelector(selectIdChallenge);
  const isChallengeActive = useSelector(selectChallengeActive);
  const dateStart = useSelector(selectChallengeDateStart);

  const dispatch = useAppDispatch();

  const startChallengeHandler = useCallback(() => {
    dispatch(startChallenge());
  }, [dispatch]);

  const updateLastCheckIn = useCallback(() => {
    if (!UID || !idChallenge) return;
    dispatch(setLastCheckIn({  idChallenge, lastCheckIn: currentDate }));
  }, [dispatch, UID, idChallenge]);

  const currentDay = daysInterval(dateStart);

  return {
    isChallengeActive,
    startChallengeHandler,
    updateLastCheckIn,
    currentDay
  };
};
