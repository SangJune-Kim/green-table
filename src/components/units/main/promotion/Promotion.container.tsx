import { useModal } from "../../../commons/hooks/useModal";
import PromotionUI from "./Promotion.presenter";

export default function Promotion() {
  const { PromotionModal } = useModal({});

  const onClickContents = () => {
    PromotionModal();
  };
  return <PromotionUI onClickContents={onClickContents} />;
}
