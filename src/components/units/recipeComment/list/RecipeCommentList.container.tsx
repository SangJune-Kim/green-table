import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import RecipeCommentListUI from "./RecipeCommentList.presenter";
import { FETCH_REPLIES } from "./RecipeCommentList.queries";
import { IRecipeCommentListProps } from "./RecipeCommentList.types";

export default function RecipeCommentList(props: IRecipeCommentListProps) {
  const router = useRouter();
  const { data: fetchComment, fetchMore } = useQuery(FETCH_REPLIES, {
    variables: { id: String(router.query.recipeId) },
  });

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

  return (
    <RecipeCommentListUI
      fetchUser={props.fetchUser}
      fetchComment={fetchComment}
      replyCount={props.replyCount}
      onLoadMore={onLoadMore}
    />
  );
}
