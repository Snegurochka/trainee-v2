import { useSelector } from "react-redux";
import { selectCompletedTotal } from "../services/user-selectors";
import { Box } from "../../../shared/UI/Box/Box";
import { questionsCount } from "../../Questions";



export const UserAnswersTotal = () => {
  const total = useSelector(selectCompletedTotal);

  return (
    <Box>
      Total {total}/ {questionsCount}
    </Box>
  );
};
