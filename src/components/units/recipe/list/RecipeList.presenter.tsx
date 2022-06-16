import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { MouseEvent, useEffect, useState } from "react";
import Navigation01 from "../../../commons/navigation/01";
import Pagination02 from "../../../commons/pagination/02/Pagination02";
import BestRecipeList from "./bestList/BestList.container";
import ExpertRecipeList from "./expertList/ExpertList.container";
import RecipeListItem from "./RecipeList.presenterItem";
import {
  FETCH_MY_SCRAPS_HISTORY,
  FETCH_POPULAR_RECIPES,
  FETCH_RECIPES,
  FETCH_RECIPES_COUNT,
  FETCH_RECIPES_TYPES_COUNT,
  FETCH_RECIPES_TYPES_ISPRO,
  FETCH_RECIPE_ISPRO,
  FETCH_RECIPE_TYPES,
  FETCH_RECIPE_TYPES_POPULAR,
  FETCH_SEARCH_RESULT_COUNT,
  FETCH_USER,
  SEARCH_RECIPES,
} from "./RecipeList.queries";
import { IPropsRecipeList } from "./RecipeList.types";
import * as List from "./RecipeList.styles";

export default function RecipeListUI() {
  const router = useRouter();
  const WHOLE_MENU_LIST = [{ name: "전체 메뉴" }, { name: "전문가 메뉴" }];
  const [myScraps, setMyScraps] = useState<Array<any>>([]);
  const MENU_LIST = [{ name: "최신순" }, { name: "인기순" }];
  const [isPicked, setIsPicked] = useState({
    wholeMenu: "전체 메뉴",
    selectList: "최신순",
  });
  const [selectedTypes, setSelectedTypes] = useState("NON_CHECKED");
  const [searchInput, setSearchInput] = useState("");

  const { data, refetch } = useQuery(FETCH_RECIPES, {
    variables: {
      page: 1,
    },
  });
  let allRefetch = refetch;

  const { data: userData } = useQuery(FETCH_USER);

  const { data: typesData, refetch: typeRefetch } = useQuery(
    FETCH_RECIPE_TYPES,
    {
      variables: {
        vegan_types: selectedTypes,
        page: 1,
      },
    }
  );
  if (selectedTypes !== "NON_CHECKED") allRefetch = typeRefetch;

  const { data: myScrapsData } = useQuery(FETCH_MY_SCRAPS_HISTORY, {
    variables: { user_id: String(userData?.fetchUser?.user_id) },
  });

  const { data: popularData, refetch: popularRefetch } = useQuery(
    FETCH_POPULAR_RECIPES,
    {
      variables: {
        page: 1,
      },
    }
  );
  if (selectedTypes === "NON_CHECKED" && isPicked.selectList === "인기순") {
    allRefetch = popularRefetch;
  }

  const { data: typesPopularData, refetch: typesPopularRefetch } = useQuery(
    FETCH_RECIPE_TYPES_POPULAR,
    {
      variables: {
        vegan_types: selectedTypes,
        page: 1,
      },
    }
  );
  if (selectedTypes !== "NON_CHECKED" && isPicked.selectList === "인기순") {
    allRefetch = typesPopularRefetch;
  }

  const { data: recipesCount } = useQuery(FETCH_RECIPES_COUNT);
  const { data: recipesTypesCount } = useQuery(FETCH_RECIPES_TYPES_COUNT, {
    variables: {
      vegan_types: selectedTypes,
      page: 1,
    },
  });

  const { data: isProData, refetch: isProRefetch } = useQuery(
    FETCH_RECIPE_ISPRO,
    {
      variables: {
        page: 1,
      },
    }
  );
  if (selectedTypes === "NON_CHECKED" && isPicked.wholeMenu === "전문가 메뉴") {
    allRefetch = isProRefetch;
  }

  const { data: typesIsProData, refetch: typesIsProRefetch } = useQuery(
    FETCH_RECIPES_TYPES_ISPRO,
    {
      variables: {
        vegan_types: selectedTypes,
        page: 1,
      },
    }
  );
  if (selectedTypes !== "NON_CHECKED" && isPicked.wholeMenu === "전문가 메뉴") {
    allRefetch = typesIsProRefetch;
  }

  const { data: searchData, refetch: searchRefetch } = useQuery(
    SEARCH_RECIPES,
    {
      variables: {
        input: String(searchInput),
        page: 1,
      },
    }
  );
  if (searchInput !== "") {
    allRefetch = searchRefetch;
  }
  const { data: searchResultCount } = useQuery(FETCH_SEARCH_RESULT_COUNT, {
    variables: {
      input: String(searchInput),
      page: 1,
    },
  });

  const onClickWholeMenu = (el: any) => () => {
    setIsPicked({ ...isPicked, wholeMenu: el.name });
    setSearchInput("");
  };

  const onClickSelectList = (el: any) => () => {
    setIsPicked({ ...isPicked, selectList: el.name });
    setSearchInput("");
  };

  const onClickMoveToDetail = (el: any) => (e: MouseEvent<any>) => {
    router.push(`/recipe/${e.currentTarget.id}`);
    const recent = JSON.parse(sessionStorage.getItem("recent") || "[]");
    const temp = recent.filter((recentEl: any) => recentEl.id === el.id);
    if (temp.length === 1) return;
    const { __typename, ...newEl } = el;
    recent.push(newEl);
    sessionStorage.setItem("recent", JSON.stringify(recent));
  };

  // 데이터 필터링 =============================================================

  // 전체 > 전문가 필터
  const tempProRecipes = isProData?.fetchRecipeIsPro;
  const aaa: any = [];
  tempProRecipes?.map((el: any) => aaa.push(el));
  const isProRecipes = aaa;

  // 타입 > 전문가 필터
  const tempIsProRecipesType = typesIsProData?.fetchRecipesTypeIsPro;
  const bbb: any = [];
  tempIsProRecipesType?.map((el: any) => bbb.push(el));
  const isProRecipesType = bbb;

  // 전체 > 전체 > 인기순
  const wholeWholePopular = popularData?.fetchPopularRecipes;
  // 전체 > 전문가 > 인기순
  const tempWholeProPopular = [...isProRecipes];
  const wholeProPopular = tempWholeProPopular?.sort(
    (a, b) => b.scrapCount - a.scrapCount
  );

  // 타입 > 전체 > 인기순
  const typeWholePopular = typesPopularData?.fetchRecipeTypesPopular;
  // 타입 > 전문가 > 인기순
  const tempTypeIsProPopular = [...isProRecipesType];
  const typePopularIsPro = tempTypeIsProPopular?.sort(
    (a, b) => b.scrapCount - a.scrapCount
  );

  // 최신순, 인기순 난이도순 필터
  useEffect(() => {
    if (router.query.type) {
      const a: any = router.query.type;
      setSelectedTypes(a);
    }
    if (router.query.input) {
      const b: any = router.query.input;
      setSearchInput(b);
    }
    myScrapsData?.fetchMyScrapHistory.map((el: IPropsRecipeList) => {
      const { __typename, ...newMyScraps } = el;
      return setMyScraps((prev: any) => [...prev, newMyScraps.id]);
    });
  }, [myScrapsData, router.query.type]);

  const lastPage =
    searchInput === ""
      ? selectedTypes === "NON_CHECKED"
        ? Math.ceil(recipesCount?.fetchRecipesCount / 12)
        : Math.ceil(recipesTypesCount?.fetchRecipesTypesCount / 12)
      : Math.ceil(searchResultCount?.fetchSearchResultCount / 12);

  return (
    <List.Container>
      <List.BannerWrapper>
        <div>
          <img src="/img/banner/recipeList-banner-icon.svg" alt="" />
          <h1>레시피</h1>
          <span>채식 레시피의 모든 것, 채식 한상과 함께 해보세요</span>
        </div>
      </List.BannerWrapper>
      <ExpertRecipeList
        myScraps={myScraps}
        onClickMoveToDetail={onClickMoveToDetail}
      />
      <BestRecipeList
        myScraps={myScraps}
        onClickMoveToDetail={onClickMoveToDetail}
      />
      <List.NavigationWrapper>
        <List.NavigationTitle>고객님 맞춤 레시피</List.NavigationTitle>
        <Navigation01
          setSelectedTypes={setSelectedTypes}
          selectedTypes={selectedTypes}
        />
      </List.NavigationWrapper>
      <List.Wrapper>
        <List.MenuWrapper>
          <List.WholeListBox>
            {WHOLE_MENU_LIST.map((el, i) => (
              <List.WholeList
                key={i}
                onClick={onClickWholeMenu(el)}
                name={el.name}
                isPicked={isPicked}
              >
                {el.name}
              </List.WholeList>
            ))}
          </List.WholeListBox>
          <List.ListSelectBox>
            {MENU_LIST.map((el, i) => (
              <List.ListSelect
                key={i}
                onClick={onClickSelectList(el)}
                name={el.name}
                isPicked={isPicked}
              >
                {el.name}
              </List.ListSelect>
            ))}
          </List.ListSelectBox>
        </List.MenuWrapper>
        {/* %%%%%%%%%%%%%%% 리스트 부분 %%%%%%%%%%%%%%% */}
        <List.ListWrapper>
          {searchData
            ? searchData?.searchRecipes?.map((el: any, i: number) => (
                <RecipeListItem
                  key={i}
                  userData={userData}
                  el={el}
                  onClickMoveToDetail={onClickMoveToDetail(el)}
                  myScraps={myScraps}
                />
              ))
            : selectedTypes === "NON_CHECKED"
            ? // 전체
              isPicked.wholeMenu === "전문가 메뉴"
              ? // 전체 > 전문가
                isPicked.selectList === "인기순"
                ? // 전체 > 전문가 > 인기
                  wholeProPopular?.map((el, i) => (
                    <RecipeListItem
                      key={i}
                      userData={userData}
                      el={el}
                      onClickMoveToDetail={onClickMoveToDetail(el)}
                      myScraps={myScraps}
                    />
                  ))
                : // 전체 > 전문가 > 최신
                  isProRecipes?.map((el: any, i: number) => (
                    <RecipeListItem
                      key={i}
                      userData={userData}
                      el={el}
                      onClickMoveToDetail={onClickMoveToDetail(el)}
                      myScraps={myScraps}
                    />
                  ))
              : // 전체 > 전체
              isPicked.selectList === "인기순"
              ? // 전체 > 전체 > 인기
                wholeWholePopular?.map((el: any, i: number) => (
                  <RecipeListItem
                    key={i}
                    userData={userData}
                    el={el}
                    onClickMoveToDetail={onClickMoveToDetail(el)}
                    myScraps={myScraps}
                  />
                ))
              : // 전체 > 전체 > 최신
                data?.fetchRecipes.map((el: any, i: number) => (
                  <RecipeListItem
                    key={i}
                    userData={userData}
                    el={el}
                    onClickMoveToDetail={onClickMoveToDetail(el)}
                    myScraps={myScraps}
                  />
                ))
            : // ===========타입 지정됨 ===============
            isPicked.wholeMenu === "전문가 메뉴"
            ? // 타입 > 전문가
              isPicked.selectList === "인기순"
              ? // 타입 > 전문가 > 인기
                typePopularIsPro?.map((el: any, i: number) => (
                  <RecipeListItem
                    key={i}
                    userData={userData}
                    el={el}
                    onClickMoveToDetail={onClickMoveToDetail(el)}
                    myScraps={myScraps}
                  />
                ))
              : // 타입 > 전문가 > 최신
                isProRecipesType?.map((el: any, i: number) => (
                  <RecipeListItem
                    key={i}
                    userData={userData}
                    el={el}
                    onClickMoveToDetail={onClickMoveToDetail(el)}
                    myScraps={myScraps}
                  />
                ))
            : // 타입 > 전체
            isPicked.selectList === "인기순"
            ? // 타입 > 전체 > 인기
              typeWholePopular?.map((el: any, i: number) => (
                <RecipeListItem
                  key={i}
                  userData={userData}
                  el={el}
                  onClickMoveToDetail={onClickMoveToDetail(el)}
                  myScraps={myScraps}
                />
              ))
            : // 타입 > 전체 > 최신
              typesData?.fetchRecipeTypes.map((el: any, i: number) => (
                <RecipeListItem
                  key={i}
                  userData={userData}
                  el={el}
                  onClickMoveToDetail={onClickMoveToDetail(el)}
                  myScraps={myScraps}
                />
              ))}
        </List.ListWrapper>
        <Pagination02
          lastPage={lastPage}
          refetch={allRefetch}
          selectedTypes={selectedTypes}
          isPicked={isPicked}
        />
      </List.Wrapper>
    </List.Container>
  );
}
