import MyPageSidebar from "../../../commons/sideBars/01/MyPageSidebar.container";
import MyPageTitleBar from "../../../commons/titleBars/01";
import * as My from "./MyWish.styles";
import { IFetchMyScrapHistory, MyWishUIProps } from "./MyWish.types";
import { v4 as uuidv4 } from "uuid";

export default function MyWishUI(props: MyWishUIProps) {
  return (
    <My.Container>
      <My.Wrapper>
        <MyPageSidebar />
        <My.RecentWrapper>
          <MyPageTitleBar title={"찜한 레시피"} />
          <My.RecipeWrapper>
            {props.data?.fetchMyScrapHistory.map((el: IFetchMyScrapHistory) => (
              <My.Menu
                key={uuidv4()}
                onClick={props.onClickMoveToDetail(el)}
                id={el.id}
              >
                <img
                  src={
                    el.recipesMainImage &&
                    el.recipesMainImage?.mainUrl !== " " &&
                    el.recipesMainImage.length !== 0
                      ? `https://storage.googleapis.com/${el.recipesMainImage[0]?.mainUrl}`
                      : "/img/bestRecipe/img-recipe-01.png"
                  }
                />
                <h2>{el.title}</h2>
                <p>{el.summary}</p>
              </My.Menu>
            ))}
          </My.RecipeWrapper>
        </My.RecentWrapper>
      </My.Wrapper>
    </My.Container>
  );
}
