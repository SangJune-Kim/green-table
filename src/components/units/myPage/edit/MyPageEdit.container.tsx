import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { ChangeEvent, MouseEvent, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { useModal } from "../../../commons/hooks/useModal";
import { FETCH_USER } from "../main/MyPageMain.queries";
import MyPageEditUI from "./MyPageEdit.presenter";
import {
  CHECK_VALID_TOKEN,
  DELETE_USER,
  SEND_TOKEN_TO_SMS,
  UPDATE_USER,
} from "./MyPageEdit.queries";
import { IPostcode, IUpdateUserInput } from "./MyPageEdit.types";

export default function MyPageEdit() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [userInputs, setUserInputs] = useState({
    nickname: "",
    type: "NON_Vegan",
    address: "",
    addressDetail: "",
    phone: "",
    token: "",
    valid: "false",
    profilePic: "",
    certImage: "",
    certUrl: "",
  });
  const { Success, ModalError, Warning, Info } = useModal();

  const { data: userData } = useQuery(FETCH_USER);
  const [updateUser] = useMutation(UPDATE_USER);
  const [deleteUser] = useMutation(DELETE_USER);
  const [getToken] = useMutation(SEND_TOKEN_TO_SMS);
  const [checkValidToken] = useMutation(CHECK_VALID_TOKEN);

  // 이미지
  useEffect(() => {
    if (userData?.fetchUser.profilePic) {
      setUserInputs({
        ...userInputs,
        profilePic: String(userData?.fetchUser.profilePic),
      });
    }
  }, [userData]);

  // 인풋값
  const onChangeUserInputs =
    (id: string) => (e: ChangeEvent<HTMLInputElement>) => {
      setUserInputs({
        ...userInputs,
        [id]: e.target.value,
      });
    };

  // 주소
  const onClickAddressSearch = () => {
    setIsOpen(true);
  };

  const onCompleteAddressSearch = (postcode: IPostcode) => {
    setUserInputs({ ...userInputs, address: postcode.address });
    setIsOpen(false);
  };

  const onClickClose = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target) setIsOpen(false);
  };

  // 인증번호 전송
  const onClickGetToken = async () => {
    try {
      await getToken({
        variables: {
          phone: String(userInputs.phone),
        },
      });
      Success("발송 성공", "인증번호를 발송하였습니다.");
    } catch (error) {
      if (error instanceof Error) Warning("발송 실패", error.message);
    }
  };

  // 인증번호 검증
  const onClickCheckValid = async () => {
    try {
      const result = await checkValidToken({
        variables: {
          phone: String(userInputs.phone),
          token: String(userInputs.token),
        },
      });

      const CheckValid = result.data.checkValidToken;
      if (CheckValid === "false") {
        ModalError("인증 실패", "인증번호가 일치하지 않습니다.");
        setUserInputs({ ...userInputs, valid: "false" });
        return;
      }
      Success("인증 완료", "인증번호가 일치합니다.");
      setUserInputs({ ...userInputs, valid: "true" });
    } catch (error) {
      if (error instanceof Error) ModalError("인증 실패", error.message);
    }
  };

  // Url 검증
  const onClickUrlValid = () => {
    const regex =
      /(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-/]))?/;

    if (!regex.test(userInputs.certUrl)) {
      Warning("등록 실패", "유효하지 않은 URL입니다.");
      setUserInputs({ ...userInputs, certUrl: "" });
      return;
    }

    Info("URL 등록", "회원정보 수정을 완료해야 성공적으로 등록됩니다.");
  };

  // 회원정보 수정
  const onClickUpdateUser = async () => {
    if (userInputs.phone && userInputs.valid === "false") {
      ModalError("수정 실패", "인증받지 않은 휴대폰 번호입니다.");
      return;
    }

    const updateUserInput: IUpdateUserInput = {};
    if (userInputs.nickname) updateUserInput.nickname = userInputs.nickname;
    if (userInputs.address) updateUserInput.address = userInputs.address;
    if (userInputs.addressDetail)
      updateUserInput.addressDetail = userInputs.addressDetail;
    if (userInputs.type) updateUserInput.type = userInputs.type;
    if (userInputs.profilePic)
      updateUserInput.profilePic = userInputs.profilePic;
    if (userInputs.certImage) updateUserInput.certImage = userInputs.certImage;
    if (userInputs.certUrl) updateUserInput.certUrl = userInputs.certUrl;

    try {
      await updateUser({
        variables: {
          user_id: String(userData?.fetchUser.user_id),
          updateUserInput,
        },
      });

      if (userInputs.certImage || userInputs.certUrl) {
        Success("수정 성공", "전문가 등록은 1~2일 정도의 시간이 소요됩니다.");
      } else {
        Success("수정 성공", "회원정보가 수정되었습니다.");
      }
      location.reload();
    } catch (error) {
      if (error instanceof Error) ModalError("수정 실패", error.message);
    }
  };

  // 회원탈퇴
  const onClickSignOut = () => {
    Swal.fire({
      title: "정말 탈퇴하시겠습니까?",
      text: "탈퇴한 회원정보는 복구할 수 없습니다.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#C4C4C4",
      cancelButtonColor: "#0FBAA3",
      focusCancel: true,
      confirmButtonText: "OK",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await deleteUser({
            variables: {
              user_id: String(userData?.fetchUser.user_id),
            },
          });
          Success("탈퇴 완료", "또 만나요🥗");
          router.push("/");
        } catch (error) {
          if (error instanceof Error) ModalError("탈퇴 실패", error.message);
        }
      }
    });
  };

  return (
    <MyPageEditUI
      userData={userData}
      isOpen={isOpen}
      userInputs={userInputs}
      onChangeUserInputs={onChangeUserInputs}
      setUserInputs={setUserInputs}
      onClickAddressSearch={onClickAddressSearch}
      onClickClose={onClickClose}
      onCompleteAddressSearch={onCompleteAddressSearch}
      onClickUpdateUser={onClickUpdateUser}
      onClickGetToken={onClickGetToken}
      onClickCheckValid={onClickCheckValid}
      onClickSignOut={onClickSignOut}
      onClickUrlValid={onClickUrlValid}
    />
  );
}
