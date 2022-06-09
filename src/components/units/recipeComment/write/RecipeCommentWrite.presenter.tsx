import * as CommentWrite from "./RecipeCommentWrite.styles";
import { IRecipeCommentWriteUIProps } from "./RecipeCommentWrite.types";

export default function RecipeCommentWriteUI(
  props: IRecipeCommentWriteUIProps
) {
  return (
    <CommentWrite.Form onSubmit={props.handleSubmit(props.onClickSubmit)}>
      <CommentWrite.Container>
        <CommentWrite.TextArea
          {...props.register("contents")}
          maxLength={100}
          placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
        ></CommentWrite.TextArea>
        <CommentWrite.SubmitButton type="submit">
          댓글작성
        </CommentWrite.SubmitButton>
      </CommentWrite.Container>
    </CommentWrite.Form>
  );
}
