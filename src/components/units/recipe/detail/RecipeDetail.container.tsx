import RecipeDetailUI from "./RecipeDetail.presenter";
import { useRef, useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { FETCH_RECIPE, FETCH_USER, CLICK_SCRAP } from "./RecipeDetail.queries";
import { useRouter } from "next/router";
import { useModal } from "../../../commons/hooks/useModal";

export default function RecipeDetail() {
  const router = useRouter();
  const { Success, ModalError } = useModal();
  const { data: recipeData } = useQuery(FETCH_RECIPE, {
    variables: {
      recipes_id: String(router.query.recipeId),
    },
  });
  const { data: fetchUser } = useQuery(FETCH_USER);
  const [clickScrap] = useMutation(CLICK_SCRAP);

  // 탭 Ref
  const ingredientTabRef = useRef<HTMLDivElement>(null);
  const cookOrderTabRef = useRef<HTMLDivElement>(null);
  const reviewTabRef = useRef<HTMLDivElement>(null);
  const [tabActive, setTabActive] = useState(["isActive", "", ""]);
  // 탭 Ref
  const onClickIngredientTab = () => {
    ingredientTabRef.current?.scrollIntoView({ behavior: "smooth" });
    setTabActive(["isActive", "", ""]);
  };
  const onClickCookOrderTab = () => {
    cookOrderTabRef.current?.scrollIntoView({ behavior: "smooth" });
    setTabActive(["", "isActive", ""]);
  };
  const onClickReviewTab = () => {
    reviewTabRef.current?.scrollIntoView({ behavior: "smooth" });
    setTabActive(["", "", "isActive"]);
  };
  // onClick Scrap
  const onClickScrap = async () => {
    try {
      const result = await clickScrap({
        variables: { id: String(router.query.recipeId) },
      });
      result.data.clickScrap.scraped
        ? Success("스크랩 완료", "이 레시피를 스크랩했어요!")
        : Success("스크랩 취소", "이 레시피를 스크랩 취소했어요!");
    } catch (error) {
      if (error instanceof Error) ModalError("스크랩 실패", error.message);
    }
  };
  console.log(recipeData);

  return (
    <RecipeDetailUI
      recipeData={recipeData}
      fetchUser={fetchUser}
      ingredientTabRef={ingredientTabRef}
      cookOrderTabRef={cookOrderTabRef}
      reviewTabRef={reviewTabRef}
      tabActive={tabActive}
      onClickIngredientTab={onClickIngredientTab}
      onClickCookOrderTab={onClickCookOrderTab}
      onClickReviewTab={onClickReviewTab}
      onClickScrap={onClickScrap}
    />
  );
}
