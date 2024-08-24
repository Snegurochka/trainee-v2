import { useSelector } from "react-redux";
import { useCallback } from "react";
import { useAppDispatch } from "../../../shared/services/hooks/redux";
import { selectXp } from "./xp-select";
import { addXp } from "./xp-slice";



const checkForLevelUp = () => {
  // TODO: add logic for level up
};

export const useXp = () => {
  const currentXp = useSelector(selectXp);
  const dispatch = useAppDispatch();

  const updateXp = useCallback(
    (correctAnswers: number, idDoc: string) => {
      const xp = correctAnswers * 5 + currentXp;
      dispatch(addXp({ xp, idDoc }));
    },
    [dispatch, currentXp]
  );

  checkForLevelUp();

  return updateXp;
};
