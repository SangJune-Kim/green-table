import MyPageSidebar from "../../../commons/sideBars/01/MyPageSidebar.container";
import MyPageTitleBar from "../../../commons/titleBars/01";
import { IRecipeImage } from "../main/MyPageMain.types";
import * as My from "./MyRecent.styles";
import { IMyRecentUIProps } from "./MyRecent.types";
import { v4 as uuidv4 } from "uuid";

export default function MyRecentUI(props: IMyRecentUIProps) {
  return (
    <My.Container>
      <My.Wrapper>
        <MyPageSidebar />
        <My.RecentWrapper>
          <MyPageTitleBar title={"최근 본 레시피"} />
          <My.RecipeWrapper>
            {props.recentItems.map((el: any) => (
              <My.Menu
                key={uuidv4()}
                id={el.id}
                onClick={props.onClickMoveToDetail}
              >
                <img
                  src={
                    el.recipesImages
                      ? el.recipesImages.filter(
                          (e: IRecipeImage) => e.mainImage !== " "
                        ).length === 0
                        ? "/img/bestRecipe/img-recipe-01.png"
                        : `https://storage.googleapis.com/${el.recipesImages[0].mainImage}`
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
