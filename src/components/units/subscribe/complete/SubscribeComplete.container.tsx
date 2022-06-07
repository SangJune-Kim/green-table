import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { FETCH_USER } from "../../myPage/main/MyPageMain.queries";
import SubscribeCompleteUI from "./SubscribeComplete.presenter";

export default function SubscribeComplete() {
  const router = useRouter();
  const { data } = useQuery(FETCH_USER);

  const onClickMoveToMain = () => {
    router.push("/main");
  };

  return (
    <SubscribeCompleteUI onClickMoveToMain={onClickMoveToMain} data={data} />
  );
}
