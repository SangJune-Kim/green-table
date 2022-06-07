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

  const onClickMoveToDetail = (event: MouseEvent<HTMLLIElement>) => {
    router.push(`/recipe/${event.currentTarget.id}`);
  };

  return (
    <MyRecentUI
      recentItems={recentItems}
      onClickMoveToDetail={onClickMoveToDetail}
    />
  );
}
