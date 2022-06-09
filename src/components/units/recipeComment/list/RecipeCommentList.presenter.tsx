import RecipeCommentListUIItem from "./RecipeCommentList.presenterItem";
import RecipeCommentWrite from "../write/RecipeCommentWrite.container";
import * as Comment from "./RecipeCommentList.styles";
import { v4 as uuidv4 } from "uuid";
import InfiniteScroll from "react-infinite-scroller";
import { IRecipeCommentListUIProps } from "./RecipeCommentList.types";

export default function RecipeCommentListUI(props: IRecipeCommentListUIProps) {
  return (
    <>
      <Comment.Container>
        <Comment.Wrapper>
          <Comment.HeadText>
            <span>댓글</span>
            <span>{props.replyCount}</span>
          </Comment.HeadText>
          <RecipeCommentWrite fetchUser={props.fetchUser} />
        </Comment.Wrapper>
        <div style={{ height: "auto" }}>
          <InfiniteScroll
            pageStart={0}
            loadMore={props.onLoadMore}
            hasMore={true}
          >
            {props.fetchComment?.fetchReplies.map((el: any) => (
              <Comment.CommentWrapper key={uuidv4()}>
                <RecipeCommentListUIItem el={el} />
              </Comment.CommentWrapper>
            )) || <div></div>}
          </InfiniteScroll>
        </div>
      </Comment.Container>
    </>
  );
}
