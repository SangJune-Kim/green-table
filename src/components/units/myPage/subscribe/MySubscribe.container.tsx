import { useQuery } from "@apollo/client";
import { FETCH_MY_PAYMENT } from "../../subscribe/complete/SubscribeComplete.queries";
import { FETCH_USER } from "../main/MyPageMain.queries";
import MySubscribeUI from "./MySubscribe.presenter";

export default function MySubscribe() {
  const { data } = useQuery(FETCH_USER);
  const { data: subsData } = useQuery(FETCH_MY_PAYMENT);

  return <MySubscribeUI data={data} subsData={subsData} />;
}
