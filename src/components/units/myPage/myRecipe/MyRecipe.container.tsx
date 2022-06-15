import { MouseEvent } from "react";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { FETCH_USER } from "../main/MyPageMain.queries";
import MyRecipeUI from "./MyRecipe.presenter";
import { FETCH_MY_RECIPE } from "./MyRecipe.queries";

export default function MyRecipe() {
  const router = useRouter();
  const { data: userData } = useQuery(FETCH_USER);
  const { data } = useQuery(FETCH_MY_RECIPE, {
    variables: { user_id: String(userData?.fetchUser.user_id) },
  });

  const onClickMoveToDetail =
    (el: any) => (event: MouseEvent<HTMLLIElement>) => {
      router.push(`/recipe/${event.currentTarget.id}`);

      const recent = JSON.parse(sessionStorage.getItem("recent") || "[]");
      const temp = recent.filter((recentEl: any) => recentEl.id === el.id);
      if (temp.length === 1) return;
      const { __typename, ...newEl } = el;
      recent.push(newEl);
      sessionStorage.setItem("recent", JSON.stringify(recent));
    };

  return <MyRecipeUI data={data} onClickMoveToDetail={onClickMoveToDetail} />;
}
