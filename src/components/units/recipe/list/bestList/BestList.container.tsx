import Slider from "react-slick";
import * as Best from "./BestList.styles";

export default function BestRecipeList(props) {
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  const popularRecipes = props?.popularData?.fetchPopularRecipes.filter(
    (el) => el.scrapCount >= 3
  );

  return (
    <Best.Container>
      <Best.Wrapper>
        <Best.TitleWrapper>
          <Best.TitleBar />
          <Best.Title>인기 레시피</Best.Title>
          <Best.SubTitle>
            많은 찜하기를 받은 이달의 레시피를 확인해보세요
          </Best.SubTitle>
        </Best.TitleWrapper>
        <Best.SliderWrapper>
          <Slider {...settings}>
            {popularRecipes?.map((el, i) => (
              <Best.ListWrapper key={i}>
                <Best.RecipeBox
                  id={el.id}
                  onClick={props?.onClickMoveToDetail(el)}
                >
                  <Best.RecipeImg
                    src={
                      el.recipesImages
                        ? el.recipesImages.filter((e) => e.mainImage !== " ")
                            .length === 0
                          ? "/img/bestRecipe/img-recipe-01.png"
                          : `https://storage.googleapis.com/${el.recipesImages[0].mainImage}`
                        : "/img/bestRecipe/img-recipe-01.png"
                    }
                  />
                  <Best.IconBookmark>
                    {props.myScraps.includes(el.id) ? (
                      <img src="/img/bestRecipe/icon-bookmark-on.svg" />
                    ) : (
                      <img src="/img/bestRecipe/icon-bookmark-off.svg" />
                    )}
                    <span>{el.scrapCount}</span>
                  </Best.IconBookmark>
                  <Best.StickerWrapper>
                    {el.scrapCount >= 1 && (
                      <Best.RecipeRecommendSticker src="/img/icon/recommend.svg" />
                    )}
                    {el.scrapCount === 0 && (
                      <Best.RecipeRecommendStickerHidden src="/img/icon/recommend.svg" />
                    )}
                    {el.level === "SIMPLE" && (
                      <Best.RecipeLevelSticker src="/img/icon/level1.svg" />
                    )}
                    {el.level === "NORMAL" && (
                      <Best.RecipeLevelSticker src="/img/icon/level2.svg" />
                    )}
                    {el.level === "DIFFICULT" && (
                      <Best.RecipeLevelSticker src="/img/icon/level3.svg" />
                    )}
                  </Best.StickerWrapper>
                  <Best.RecipeTitle>{el.title}</Best.RecipeTitle>
                  <Best.RecipeSubtitle>{el.summary}</Best.RecipeSubtitle>
                  <Best.RecipeCommentBox>
                    <Best.RecipeCommentIcon src="/img/icon/comment.svg" />
                    <Best.RecipeCommentsCount>
                      {el.replyCount}
                    </Best.RecipeCommentsCount>
                  </Best.RecipeCommentBox>
                </Best.RecipeBox>
              </Best.ListWrapper>
            ))}
          </Slider>
        </Best.SliderWrapper>
      </Best.Wrapper>
    </Best.Container>
  );
}
