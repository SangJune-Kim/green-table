import { useMutation, useQuery } from "@apollo/client";
import { useForm } from "react-hook-form";
import { useModal } from "../../../commons/hooks/useModal";
import { FETCH_USER } from "../main/MyPageMain.queries";
import MyPageInfoUI from "./MyPageEditPW.presenter";
import { UPDATE_PASSWORD } from "./MyPageEditPW.queries";
import { IFormValues } from "./MyPageEditPW.types";

export default function MyPageEditPw() {
  const { data: userData } = useQuery(FETCH_USER);
  const [updatePassword] = useMutation(UPDATE_PASSWORD);
  const { register, handleSubmit, watch } = useForm({ mode: "onChange" });
  const { Success, ModalError } = useModal();

  const onClickSubmit = async (data: IFormValues) => {
    try {
      await updatePassword({
        variables: {
          user_id: String(userData?.fetchUser.user_id),
          password: String(data.password),
        },
      });

      if (data.password !== data.passwordCheck) {
        ModalError("변경 실패", "비밀번호가 다릅니다.");
        return;
      }

      const regex = /^(?=.*\d)(?=.*\w)(?=.*[!@#$%^&*_+"|;:'/?.,]).{10,15}$/;
      if (!regex.test(String(data.password))) {
        ModalError(
          "변경 실패",
          "비밀번호는 특수문자를 포함한 10글자 이상 15글자 이하 입니다."
        );
        return;
      }

      Success("변경 성공", "비밀번호를 변경했습니다.");
      location.reload();
    } catch (error) {
      if (error instanceof Error) {
        ModalError("변경 실패", error.message);
      }
    }
  };

  return (
    <MyPageInfoUI
      userData={userData}
      register={register}
      watch={watch}
      handleSubmit={handleSubmit}
      onClickSubmit={onClickSubmit}
    />
  );
}
