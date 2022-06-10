import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useModal } from "../../commons/hooks/useModal";
import { FETCH_USER } from "../myPage/main/MyPageMain.queries";
import SubscribeUI from "./Subscribe.presenter";
import {
  CREATE_BASIC_PAYMENT,
  CREATE_PREMIUM_PAYMENT,
} from "./Subscribe.queries";

declare const window: typeof globalThis & {
  IMP: any;
};

export default function Subscribe() {
  const { ModalError } = useModal();
  const [createBasicPayment] = useMutation(CREATE_BASIC_PAYMENT);
  const [createPremiumPayment] = useMutation(CREATE_PREMIUM_PAYMENT);
  const { data: userData } = useQuery(FETCH_USER);
  const router = useRouter();

  const onClickPayBasic = () => {
    const IMP = window.IMP;
    IMP.init("imp82070269");
    IMP.request_pay(
      {
        pg: "html5_inicis",
        pay_method: "card",
        // merchant_uid: "ORD20180131-0000011"
        name: "채식한상 베이직 구독",
        amount: 100,
        buyer_email: userData?.fetchUser.email,
        buyer_name: userData?.fetchUser.name,
        buyer_tel: userData?.fetchUser.phone,
        buyer_addr: userData.fetchUser.address,
        // buyer_postcode: "01181",
        m_redirect_url: "http://localhost:3000/subscribe/complete",
      },
      (rsp: any) => {
        if (rsp.success) {
          try {
            createBasicPayment({
              variables: { impUid: String(rsp.imp_uid), amount: 100 },
            });
            router.push("/subscribe/complete");
          } catch (error) {
            if (error instanceof Error) ModalError("결제 실패", error.message);
          }
        } else {
          ModalError("결제 실패", "결제에 실패했습니다! 다시 시도해주세요.");
          router.push("/main");
        }
      }
    );
  };

  const onClickPayPremium = () => {
    const IMP = window.IMP;
    IMP.init("imp82070269");
    IMP.request_pay(
      {
        pg: "html5_inicis",
        pay_method: "card",
        // merchant_uid: "ORD20180131-0000011"
        name: "채식한상 프리미엄 구독",
        amount: 200,
        buyer_email: userData?.fetchUser.email,
        buyer_name: userData?.fetchUser.name,
        buyer_tel: userData?.fetchUser.phone,
        buyer_addr: userData.fetchUser.address,
        // buyer_postcode: "01181",
        m_redirect_url: "http://localhost:3000/subscribe/complete",
      },
      async (rsp: any) => {
        if (rsp.success) {
          try {
            await createPremiumPayment({
              variables: { impUid: String(rsp.imp_uid), amount: 200 },
            });

            router.push("/subscribe/complete");
          } catch (error) {
            if (error instanceof Error) ModalError("결제 실패", error.message);
          }
        } else {
          ModalError("결제 실패", "결제에 실패했습니다! 다시 시도해주세요.");
          router.push("/main");
        }
      }
    );
  };

  return (
    <SubscribeUI
      onClickPayBasic={onClickPayBasic}
      onClickPayPremium={onClickPayPremium}
    />
  );
}
