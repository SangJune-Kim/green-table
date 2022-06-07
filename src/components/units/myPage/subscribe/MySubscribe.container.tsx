import { useQuery } from "@apollo/client";
import { FETCH_USER } from "../main/MyPageMain.queries";
import MySubscribeUI from "./MySubscribe.presenter";

export default function MySubscribe() {
  const { data } = useQuery(FETCH_USER);

  return <MySubscribeUI data={data} />;
}
