import MyPageSidebar from "../../../commons/sideBars/01/MyPageSidebar.container";
import MyPageTitleBar from "../../../commons/titleBars/01";
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
                onClick={props.onClickMoveToDetail(el)}
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
