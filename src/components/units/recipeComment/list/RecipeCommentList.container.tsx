import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import RecipeCommentListUI from "./RecipeCommentList.presenter";
import {
  FETCH_REPLIES,
  DELETE_REPLY,
  FETCH_RECIPE,
} from "./RecipeCommentList.queries";
import { IRecipeCommentListProps } from "./RecipeCommentList.types";
import { useModal } from "../../../commons/hooks/useModal";

export default function RecipeCommentList(props: IRecipeCommentListProps) {
  const router = useRouter();
  const { data: fetchComment, fetchMore } = useQuery(FETCH_REPLIES, {
    variables: { id: String(router.query.recipeId) },
  });
  const [deleteReply] = useMutation(DELETE_REPLY);
  const { Success, ModalError } = useModal();

  const onLoadMore = () => {
    if (!fetchComment) return;

    fetchMore({
      variables: {
        page: Math.ceil(fetchComment?.fetchReplies.length / 12) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult.fetchReplies)
          return { fetchReplies: [...prev.fetchReplies] };
        return {
          fetchReplies: [...prev.fetchReplies, ...fetchMoreResult.fetchReplies],
        };
      },
    });
  };

  const onClickDelete = (data: string) => async () => {
    try {
      await deleteReply({
        variables: { reply_id: data, recipe_id: router.query.recipeId },
        refetchQueries: [
          {
            query: FETCH_REPLIES,
            variables: { id: String(router.query.recipeId) },
          },
          {
            query: FETCH_RECIPE,
            variables: { recipes_id: String(router.query.recipeId) },
          },
        ],
      });
      Success("삭제 성공", "댓글이 삭제되었습니다.");
    } catch (error) {
      if (error instanceof Error) ModalError("삭제 실패", error.message);
    }
  };

  return (
    <RecipeCommentListUI
      fetchUser={props.fetchUser}
      fetchComment={fetchComment}
      replyCount={props.replyCount}
      onLoadMore={onLoadMore}
      onClickDelete={onClickDelete}
    />
  );
}
