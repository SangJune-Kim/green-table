import { useQuery } from "@apollo/client";
import { FETCH_USER } from "../../../units/myPage/main/MyPageMain.queries";
import { useModal } from "../../hooks/useModal";
import MyPageSidebarUI from "./MyPageSidebar.presenter";

export default function MyPageSidebar() {
  const { data } = useQuery(FETCH_USER);
  const { ModalError } = useModal();

  const onClickSubscribe = () => {
    if (data?.fetchUser.subscribe === "NON_SUB") {
      ModalError("접근 실패", "구독 정보가 없습니다.");
    }
  };

  return <MyPageSidebarUI onClickSubscribe={onClickSubscribe} />;
}
