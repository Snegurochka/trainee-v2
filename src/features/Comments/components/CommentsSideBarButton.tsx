import styled from "styled-components";
import { Button } from "../../../shared/UI/Button/Button";
import { CommentsIcon } from "../../../shared/UI/Icons/CommentsIcon";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../shared/services/hooks/redux";
import { fetchComments, setCommentsOpened } from "../services/comments-slice";
import { selectCurrentQuestionId } from "../../../entities/Quiz/services/quiz-selector";

const Wrapper = styled(Button)`
  position: absolute;
  top: 15px;
  right: -36px;
`;

export const CommentsSideBarButton = () => {
  const dispatch = useAppDispatch();
  const currentQuestionId = useAppSelector(selectCurrentQuestionId);
  const getCommentsHandler = () => {
    dispatch(setCommentsOpened());
    dispatch(fetchComments(currentQuestionId));
  };
  return (
    <Wrapper onClick={getCommentsHandler} buttonType="ghost">
      <CommentsIcon />
    </Wrapper>
  );
};
