import ViewAllButton from "../../../commons/buttons/viewAll";
import MyPageSidebar from "../../../commons/sideBars/01/MyPageSidebar.container";
import * as My from "./MyPageMain.styles";
import { IMyPageMainUIProps, IRecipeImage } from "./MyPageMain.types";

export default function MyPageMainUI(props: IMyPageMainUIProps) {
  return (
    <My.Container>
      <My.Wrapper>
        <MyPageSidebar />
        <My.MainWrapper>
          <My.UserWrapper>
            {props.userData?.fetchUser.profilePic !== " " ? (
              <My.UserIcon
                src={`https://storage.googleapis.com/${props.userData?.fetchUser.profilePic}`}
              />
            ) : (
              <My.UserIcon src="/img/myPage/icon-profile.svg" />
            )}
            <My.UserProfile>
              {props.userData?.fetchUser.isPro === "PRO" ? (
                <My.UserGrade className="expert">전문가</My.UserGrade>
              ) : (
                <My.UserGrade className="common">회원</My.UserGrade>
              )}

              <My.UserName>
                안녕하세요 <span>{props.userData?.fetchUser.name}</span>님{" "}
                {":)"}
              </My.UserName>
            </My.UserProfile>
            <My.UserInfo>
              <My.Info>
                {props.userData?.fetchUser.type === "NON_Vegan" && (
                  <>
                    <My.TypeIcon src="/img/navigation/icon-vegan-nonVegan.svg" />
                    <My.Name>채린이</My.Name>
                  </>
                )}
                {props.userData?.fetchUser.type === "Vegan" && (
                  <>
                    <My.TypeIcon src="/img/navigation/icon-vegan-vegan.svg" />
                    <My.Name>비건</My.Name>
                  </>
                )}
                {props.userData?.fetchUser.type === "Lacto" && (
                  <>
                    <My.TypeIcon src="/img/navigation/icon-vegan-lacto.svg" />
                    <My.Name>락토</My.Name>
                  </>
                )}
                {props.userData?.fetchUser.type === "Ovo" && (
                  <>
                    <My.TypeIcon src="/img/navigation/icon-vegan-ovo.svg" />
                    <My.Name>오보</My.Name>
                  </>
                )}
                {props.userData?.fetchUser.type === "Lacto_Ovo" && (
                  <>
                    <My.TypeIcon src="/img/navigation/icon-vegan-lactoOvo.svg" />
                    <My.Name>락토오보</My.Name>
                  </>
                )}
                {props.userData?.fetchUser.type === "Pesco" && (
                  <>
                    <My.TypeIcon src="/img/navigation/icon-vegan-pesco.svg" />
                    <My.Name>페스코</My.Name>
                  </>
                )}
                {props.userData?.fetchUser.type === "Pollo" && (
                  <>
                    <My.TypeIcon src="/img/navigation/icon-vegan-pollo.svg" />
                    <My.Name>폴로</My.Name>
                  </>
                )}
              </My.Info>
              <My.Info>
                {props.userData?.fetchUser.isSubs === "NON_SUB" && (
                  <>
                    <My.Subscribe>미구독</My.Subscribe>
                    <My.Name>채식한상 어떠세요?</My.Name>
                  </>
                )}
                {props.userData?.fetchUser.isSubs === "BASIC" && (
                  <>
                    <My.Subscribe>베이직</My.Subscribe>
                    <My.Name>정기 구독 이용중</My.Name>
                  </>
                )}
                {props.userData?.fetchUser.isSubs === "PREMIUM" && (
                  <>
                    <My.Subscribe>프리미엄</My.Subscribe>
                    <My.Name>정기 구독 이용중</My.Name>
                  </>
                )}
              </My.Info>
            </My.UserInfo>
          </My.UserWrapper>

          <My.RecipeWrapper>
            <My.Recipe>
              <My.Head>
                <My.Title>
                  최근 본 레시피 <span>{props.recentItems.length}</span>
                </My.Title>
                <ViewAllButton href={"/myPage/recent"} title={"전체보기"} />
              </My.Head>
              <My.Body>
                {props.recentItems
                  .slice(props.recentItems.length - 5, props.recentItems.length)
                  .reverse()
                  .map((el: any) => (
                    <My.Menu
                      key={el.id}
                      onClick={props.onClickMoveToDetail}
                      id={el.id}
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
                    </My.Menu>
                  ))}
              </My.Body>
            </My.Recipe>

            <My.Recipe>
              <My.Head>
                <My.Title>
                  등록 레시피{" "}
                  <span>{props.userRecipe?.fetchMyRecipe.length}</span>
                </My.Title>
                <ViewAllButton href={"/myPage/myRecipe"} title={"전체보기"} />
              </My.Head>
              <My.Body>
                {props.userRecipe?.fetchMyRecipe.slice(0, 5).map((el: any) => (
                  <My.Menu
                    key={el.id}
                    onClick={props.onClickMoveToDetail}
                    id={el.id}
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
                  </My.Menu>
                ))}
              </My.Body>
            </My.Recipe>

            <My.Recipe>
              <My.Head>
                <My.Title>
                  찜한 레시피{" "}
                  <span>{props.userScrap?.fetchMyScrapHistory.length}</span>
                </My.Title>
                <ViewAllButton href={"/myPage/wish"} title={"전체보기"} />
              </My.Head>
              <My.Body>
                {props.userScrap?.fetchMyScrapHistory
                  .slice(0, 5)
                  .map((el: any) => (
                    <My.Menu key={el.id}>
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
                    </My.Menu>
                  ))}
              </My.Body>
            </My.Recipe>
          </My.RecipeWrapper>
        </My.MainWrapper>
      </My.Wrapper>
    </My.Container>
  );
}
