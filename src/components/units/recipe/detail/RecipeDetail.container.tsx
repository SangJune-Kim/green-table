import RecipeDetailUI from "./RecipeDetail.presenter";
import { useRef, useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import {
  FETCH_RECIPE,
  FETCH_USER,
  CLICK_SCRAP,
  DELETE_RECIPE,
} from "./RecipeDetail.queries";
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
  const [deleteRecipe] = useMutation(DELETE_RECIPE);

  const ingredientTabRef = useRef<HTMLDivElement>(null);
  const cookOrderTabRef = useRef<HTMLDivElement>(null);
  const reviewTabRef = useRef<HTMLDivElement>(null);
  const [tabActive, setTabActive] = useState(["isActive", "", ""]);

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

  const onClickUpdateButton = () => {
    router.push(`/recipe/${router.query.recipeId}/edit`);
  };

  const onClickDeleteRecipe = async () => {
    try {
      await deleteRecipe({
        variables: { recipe_id: String(router.query.recipeId) },
      });
      Success("레시피 삭제", "이 레시피를 삭제했어요!");
      router.push(`/recipe`);
    } catch (error) {
      if (error instanceof Error) ModalError("레시피 삭제 실패", error.message);
    }
  };

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
      onClickUpdateButton={onClickUpdateButton}
      onClickDeleteRecipe={onClickDeleteRecipe}
      isMyRecipe={
        recipeData?.fetchRecipe.user.user_id === fetchUser?.fetchUser.user_id
      }
    />
  );
}
