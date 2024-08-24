import { memo } from "react";
import { TComment } from "../services/comments-types";

export const CommentsList = memo(({
  comments,
}: {
  readonly comments: TComment[];
}) => {
  return (
    <div>
      {comments.map((comment) => (
        <div key={comment.idDoc}>{comment.text}</div>
      ))}
    </div>
  );
});
