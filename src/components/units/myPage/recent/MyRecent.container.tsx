import { useRouter } from "next/router";
import { useEffect, useState, MouseEvent } from "react";
import MyRecentUI from "./MyRecent.presenter";

export default function MyRecent() {
  const [recentItems, setRecentItems] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const recent = JSON.parse(sessionStorage.getItem("recent") || "[]");
    setRecentItems(recent);
  }, []);

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

  return (
    <MyRecentUI
      recentItems={recentItems}
      onClickMoveToDetail={onClickMoveToDetail}
    />
  );
}
