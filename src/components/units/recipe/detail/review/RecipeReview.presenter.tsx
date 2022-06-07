import * as Review from "./RecipeReview.styles";

export default function RecipeReviewUI(props) {
  return (
    <Review.Container>
      <Review.Wrapper>
        <Review.HeadText>
          <span>댓글</span>
          <span>10</span>
        </Review.HeadText>
      </Review.Wrapper>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((el) => (
        <Review.CommentWrapper key={el}>
          <Review.Comment>
            <div>
              <span>iamye****</span>
              <span>비건</span>
              <span>2일전</span>
            </div>
            <p>
              멸치를 넣고 공간이 넉넉한 접시 준비 잔멸치와 견과류, 포도씨유를
              넣고 잘 섞어주세요. 전자레인지에 1분간 조리해주세요.
            </p>
          </Review.Comment>
        </Review.CommentWrapper>
      ))}
    </Review.Container>
  );
}
