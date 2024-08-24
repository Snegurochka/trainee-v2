import { useAppSelector } from "../../../shared/services/hooks/redux";
import { Stack } from "../../../shared/UI/Box/Box";
import { selectComments } from "../services/comments-slice";
import { CommentsList } from "./CommentsList";

export const Comments = () => {
  const comments = useAppSelector(selectComments);

  return (
    <Stack>
      <h3>Comments</h3>
      {comments.length > 0 ? (
        <CommentsList comments={comments} />
      ) : (
        <div>Empty</div>
      )}
    </Stack>
  );
};
