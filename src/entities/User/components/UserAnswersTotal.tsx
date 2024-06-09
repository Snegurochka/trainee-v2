
import { useSelector } from "react-redux";
import { selectIsAuth } from "../services/user-selectors";

import { selectCompletedTotal } from "../services/user-selectors";
import { Box } from "../../../shared/UI/Box/Box";
import { questionsCount } from "../../Questions";


export const UserAnswersTotal = () => {
  const total = useSelector(selectCompletedTotal);
  const isAuth = useSelector(selectIsAuth);
  if (!isAuth) {
    return null;
  }
  return (
    <Box>
      Total {total}/ {questionsCount}
    </Box>
  );
};
