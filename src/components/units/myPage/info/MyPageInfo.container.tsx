import { useQuery } from "@apollo/client";
import { FETCH_USER } from "../main/MyPageMain.queries";
import MyPageInfoUI from "./MyPageInfo.presenter";

export default function MyPageInfo() {
  const { data: userData } = useQuery(FETCH_USER);

  return <MyPageInfoUI userData={userData} />;
}
