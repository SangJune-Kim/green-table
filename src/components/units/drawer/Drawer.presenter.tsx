import { useState } from "react";
import Drawer from "@mui/material/Drawer";
import * as S from "./Drawer.styles";
import Link from "next/link";
import { useModal } from "../../commons/hooks/useModal";
import { useRouter } from "next/router";
import { gql, useMutation, useQuery } from "@apollo/client";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../commons/store";
import OutlineSubmitButton from "../../commons/buttons/outlineSubmit";
import { IDrawerUIProps } from "./Drawer.types";

type Anchor = "right";

const LOGOUT = gql`
  mutation logout {
    logout
  }
`;

const FETCH_USER = gql`
  query fetchUser {
    fetchUser {
      user_id
      email
      name
      phone
      address
      type
      nickname
      isPro
      isSubs
      SubsHistory
    }
  }
`;

export default function TemporaryDrawer(props: IDrawerUIProps) {
  const [accessToken] = useRecoilState(accessTokenState);

  const [state, setState] = useState({
    right: false,
  });
  const router = useRouter();

  // 모달 토글 단축키
  const toggleDrawer = (anchor: Anchor, open: boolean) => () => {
    setState({ [anchor]: open });
  };

  // 모달
  const { Success, ModalError } = useModal();

  const [logout] = useMutation(LOGOUT);

  const onClickLogout = async () => {
    try {
      await logout();
      Success("로그아웃 성공", "다음에도 건강한 한 끼를 약속할게요🥗");
      router.push("/main");
    } catch (error) {
      if (error instanceof Error)
        ModalError("로그아웃 실패", "로그아웃에 실패했습니다.");
    }
  };

  const { data } = useQuery(FETCH_USER);

  const list = (anchor: Anchor) => (
    <S.Container>
      {accessToken ? (
        <S.Wrapper>
          <S.DrawerHead isPro={data?.fetchUser.isPro === "PRO"}>
            <div>
              <button onClick={toggleDrawer("right", false)}>
                <img src="/img/icon/Close.svg" alt="" />
              </button>
            </div>
            <div>
              {data?.fetchUser.isPro === "PRO" ? (
                <span>전문가</span>
              ) : (
                <span>회원</span>
              )}
            </div>
            <div>
              <span>
                안녕하세요 <b>{data?.fetchUser.name}</b>님 {":)"}
              </span>
            </div>
          </S.DrawerHead>
          <S.DrawerBody>
            {data?.fetchUser.type === "NON_Vegan" && (
              <S.VeganType>
                <img src="/img/navigation/icon-vegan-nonVegan.svg" alt="" />
                <span>채린이</span>
              </S.VeganType>
            )}
            {data?.fetchUser.type === "Vegan" && (
              <S.VeganType>
                <img src="/img/navigation/icon-vegan-vegan.svg" alt="" />
                <span>비건</span>
              </S.VeganType>
            )}
            {data?.fetchUser.type === "Lacto" && (
              <S.VeganType>
                <img src="/img/navigation/icon-vegan-lacto.svg" alt="" />
                <span>락토</span>
              </S.VeganType>
            )}
            {data?.fetchUser.type === "Ovo" && (
              <S.VeganType>
                <img src="/img/navigation/icon-vegan-ovo.svg" alt="" />
                <span>오보</span>
              </S.VeganType>
            )}
            {data?.fetchUser.type === "Lacto_Ovo" && (
              <S.VeganType>
                <img src="/img/navigation/icon-vegan-lactoOvo.svg" alt="" />
                <span>락토오보</span>
              </S.VeganType>
            )}
            {data?.fetchUser.type === "Pesco" && (
              <S.VeganType>
                <img src="/img/navigation/icon-vegan-pesco.svg" alt="" />
                <span>페스코</span>
              </S.VeganType>
            )}
            {data?.fetchUser.type === "Pollo" && (
              <S.VeganType>
                <img src="/img/navigation/icon-vegan-pollo.svg" alt="" />
                <span>폴로</span>
              </S.VeganType>
            )}
            <S.SubsInfo>
              {data?.fetchUser.isSubs === "NON_SUB" && (
                <>
                  <span>미구독</span>
                  <span>채식한상 어떠세요?</span>
                </>
              )}
              {data?.fetchUser.isSubs === "BASIC" && (
                <>
                  <span>베이직</span>
                  <span>정기 구독 이용중</span>
                </>
              )}
              {data?.fetchUser.isSubs === "PREMIUM" && (
                <>
                  <span>프리미엄</span>
                  <span>정기 구독 이용중</span>
                </>
              )}
            </S.SubsInfo>
          </S.DrawerBody>
          <Link href={"/recipe/new"}>
            <S.RegisterButton onClick={toggleDrawer("right", false)}>
              <a>레시피 등록하기</a>
            </S.RegisterButton>
          </Link>
          <S.DrawerNav onClick={toggleDrawer("right", false)}>
            <li>
              <Link href={"/myPage"}>
                <a>MY 홈</a>
              </Link>
            </li>

            <li>
              <Link href={"/myPage/edit"}>
                <a>회원 정보 수정</a>
              </Link>
            </li>

            <li>
              <Link href={"/myPage/subscribe"}>
                <a>정기 구독 관리</a>
              </Link>
            </li>

            <li>
              <Link href={"/myPage/qna"}>
                <a>문의 내역</a>
              </Link>
            </li>

            <li onClick={onClickLogout} style={{ cursor: "pointer" }}>
              <a>로그아웃</a>
            </li>
          </S.DrawerNav>
        </S.Wrapper>
      ) : (
        <S.NonLoginWrapper onClick={toggleDrawer("right", false)}>
          <Link href={"/login"}>
            <a>
              <OutlineSubmitButton
                isActive={true}
                title={"로그인하기"}
                size={"medium"}
              />
            </a>
          </Link>
        </S.NonLoginWrapper>
      )}
    </S.Container>
  );

  return (
    <>
      <button
        style={{ display: "none" }}
        ref={props.drawerRef}
        onClick={toggleDrawer("right", true)}
      ></button>
      <Drawer
        anchor={"right"}
        open={state.right}
        onClose={toggleDrawer("right", false)}
      >
        {list("right")}
      </Drawer>
    </>
  );
}
