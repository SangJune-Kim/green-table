import { useQuery } from "@apollo/client";
import { FETCH_USER } from "../main/MyPageMain.queries";
import MyWishUI from "./MyWish.presenter";
import { FETCH_MY_SCRAP_HISTORY } from "./MyWish.queries";
import { MouseEvent } from "react";
import { useRouter } from "next/router";

export default function MyWish() {
  const router = useRouter();
  const { data: userData } = useQuery(FETCH_USER);
  const { data } = useQuery(FETCH_MY_SCRAP_HISTORY, {
    variables: {
      user_id: String(userData?.fetchUser.user_id),
    },
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

  return <MyWishUI data={data} onClickMoveToDetail={onClickMoveToDetail} />;
}
