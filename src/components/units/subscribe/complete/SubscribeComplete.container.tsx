import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import SubscribeCompleteUI from "./SubscribeComplete.presenter";
import { FETCH_MY_PAYMENT } from "./SubscribeComplete.queries";

export default function SubscribeComplete() {
  const router = useRouter();
  const { data } = useQuery(FETCH_MY_PAYMENT);

  const onClickMoveToMain = () => {
    router.push("/main");
  };

  return (
    <SubscribeCompleteUI onClickMoveToMain={onClickMoveToMain} data={data} />
  );
}
