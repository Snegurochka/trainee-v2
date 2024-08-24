import { useSelector } from "react-redux";
import { selectNearestXpThreshold, selectXp } from "../services/xp-select";


export const Xp = () => {
  const nearestXpThreshold = useSelector(selectNearestXpThreshold);
  const currentXp = useSelector(selectXp);
  return (
    <div>
      {currentXp} xp/ {nearestXpThreshold} xp
    </div>
  );
};
