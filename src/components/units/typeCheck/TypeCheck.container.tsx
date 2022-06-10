import { gql, useMutation, useQuery } from "@apollo/client";
import { useState } from "react";
import SubmitButton from "../../commons/buttons/submit";
import { useModal } from "../../commons/hooks/useModal";
import * as Type from "./TypeCheck.styles";
import TypeCheckQ2 from "./TypeCheckQ2.container";
import TypeCheckQ3 from "./TypeCheckQ3.container";

export const FETCH_USER = gql`
  query fetchUser {
    fetchUser {
      user_id
      email
      name
      phone
      address
      addressDetail
      type
      nickname
      isPro
      isSubs
      profilePic
    }
  }
`;

export const UPDATE_USER = gql`
  mutation UPDATE_USER($user_id: String!, $updateUserInput: UpdateUserInput!) {
    updateUser(user_id: $user_id, updateUserInput: $updateUserInput) {
      user_id
    }
  }
`;

const TYPE_CHECK_LIST = [
  {
    name: "비건",
    enName: "Vegan",
    image: "/img/navigation/icon-vegan-vegan.svg",
    hover: "/img/navigation/icon-vegan-vegan-hover.svg",
    eat: "완전 채식",
    ban: "",
  },
  {
    name: "락토",
    enName: "Lacto",
    image: "/img/navigation/icon-vegan-lacto.svg",
    hover: "/img/navigation/icon-vegan-lacto-hover.svg",
    eat: "유제품 섭취",
    ban: "",
  },
  {
    name: "오보",
    enName: "Ovo",
    image: "/img/navigation/icon-vegan-ovo.svg",
    hover: "/img/navigation/icon-vegan-ovo-hover.svg",
    eat: "달걀 섭취",
    ban: "",
  },
  {
    name: "락토오보",
    enName: "Lacto_Ovo",
    image: "/img/navigation/icon-vegan-lactoOvo.svg",
    hover: "/img/navigation/icon-vegan-lactoOvo-hover.svg",
    eat: "유제품, 달걀 섭취",
    ban: "육류,어류 금지",
  },
  {
    name: "페스코",
    enName: "Pesco",
    image: "/img/navigation/icon-vegan-pesco.svg",
    hover: "/img/navigation/icon-vegan-pesco-hover.svg",
    eat: "어류 섭취",
    ban: "육류 금지",
  },
  {
    name: "폴로",
    enName: "Pollo",
    image: "/img/navigation/icon-vegan-pollo.svg",
    hover: "/img/navigation/icon-vegan-pollo-hover.svg",
    eat: "닭고기 섭취",
    ban: "붉은 살코기 금지",
  },
];

export default function TypeCheck() {
  const [isCheckType, setIsCheckType] = useState(false);
  const [isCheckKeyword, setIsCheckKeyword] = useState(false);
  const [updateUser] = useMutation(UPDATE_USER);
  const { data: userData } = useQuery(FETCH_USER);
  const [isPicked, setIsPicked] = useState("");
  const [pickedType, setPickedType] = useState("NON_Vegan");

  const { ModalError } = useModal();

  const isActive = true;
  const onClickCheckType = async () => {
    try {
      await updateUser({
        variables: {
          user_id: String(userData?.fetchUser.user_id),
          updateUserInput: {
            type: pickedType,
          },
        },
      });
      setIsCheckType((prev) => !prev);
    } catch (error) {
      if (error instanceof Error) ModalError("타입 수정 실패", error.message);
    }
  };

  const onClickNextStep = () => {
    setIsCheckKeyword((prev) => !prev);
  };

  const onClickVeganType = (el: any) => () => {
    setIsPicked(el.name);
    setPickedType(el.enName);
  };

  return (
    <Type.Container>
      <Type.Wrapper>
        <Type.HeaderWrapper>
          <Type.HeaderTitle>나의 채식 유형 체크</Type.HeaderTitle>
        </Type.HeaderWrapper>
        {!isCheckType && !isCheckKeyword && (
          <Type.BodyWrapper>
            <Type.StepWrapper>
              <Type.StepCircleOn>01</Type.StepCircleOn>
              <Type.StepBar />
              <Type.StepCircle>02</Type.StepCircle>
              <Type.StepBar />
              <Type.StepCircle>03</Type.StepCircle>
            </Type.StepWrapper>
            <Type.StepQuestion>
              Q1. 어떤 타입의 채식주의자 인가요?
              <span>해당사항이 없다면 바로 다음을 눌러주세요.</span>
            </Type.StepQuestion>
            <Type.VeganTypeWrapper>
              {TYPE_CHECK_LIST.map((el, i) => (
                <Type.VeganType
                  key={i}
                  onClick={onClickVeganType(el)}
                  hover={el.hover}
                  image={el.image}
                  isPicked={isPicked === el.name}
                >
                  <Type.VeganTypeImgCircle
                    isPicked={isPicked === el.name}
                    image={el.image}
                    hover={el.hover}
                  >
                    <Type.VeganTypeImg />
                  </Type.VeganTypeImgCircle>
                  <Type.VeganTypeName>{el.name}</Type.VeganTypeName>
                  <Type.VeganTypeEnName>{el.enName}</Type.VeganTypeEnName>
                  <Type.VeganTypeDetail>
                    <p>{el.eat}</p>
                    <p>{el.ban}</p>
                  </Type.VeganTypeDetail>
                </Type.VeganType>
              ))}
            </Type.VeganTypeWrapper>

            <SubmitButton
              title={"다음"}
              isActive={isActive}
              onClick={onClickCheckType}
            />
          </Type.BodyWrapper>
        )}
        {isCheckType && !isCheckKeyword && (
          <TypeCheckQ2 onClickNextStep={onClickNextStep} />
        )}
        {isCheckKeyword && <TypeCheckQ3 />}
      </Type.Wrapper>
    </Type.Container>
  );
}
