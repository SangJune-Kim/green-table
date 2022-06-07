import { gql, useMutation, useQuery } from "@apollo/client";
import Link from "next/link";
import { useRouter } from "next/router";
import { Fragment, useRef } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../../commons/store";
import Drawer from "../../../units/drawer/Drawer.container";
import { useModal } from "../../hooks/useModal";
import * as Header from "./styles";

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
      profilePic
    }
  }
`;

const LOGOUT = gql`
  mutation logout {
    logout
  }
`;

export default function LayoutHeader() {
  const router = useRouter();
  const drawerRef = useRef(null);
  const [accessToken] = useRecoilState(accessTokenState);

  // 모달
  const { Success, ModalError } = useModal();

  const HEADER_MENUS = [
    { name: "홈", page: "/main" },
    { name: "레시피", page: "/recipe" },
    { name: "구독서비스", page: "/subscribe" },
  ];

  const { data } = useQuery(FETCH_USER);

  const [logout] = useMutation(LOGOUT);

  const onClickUserIcon = () => {
    drawerRef.current?.click();
  };

  const onClickLogout = async () => {
    try {
      await logout();
      Success("로그아웃 성공", "다음에도 건강한 한 끼를 약속할게요🥗");
      router.push("/");
    } catch (error) {
      ModalError("로그아웃 실패", "로그아웃에 실패했습니다.");
    }
  };

  return (
    <>
      <Header.Container>
        <Header.Wrapper>
          <Header.LogoWrapper>
            <Link href={"/"}>
              <Header.Logo src="/img/header/icon-logo-header.svg" />
            </Link>
          </Header.LogoWrapper>
          <Header.MenuWrapper>
            {HEADER_MENUS.map((el) => (
              <Fragment key={el.page}>
                <Link href={el.page}>
                  <Header.MenuItem id={el.page}>
                    <a>{el.name}</a>
                    <Header.Circle
                      className={router.asPath === el.page ? "isActive" : ""}
                    />
                  </Header.MenuItem>
                </Link>
              </Fragment>
            ))}
          </Header.MenuWrapper>
          <Header.UserWrapper>
            {accessToken ? (
              <>
                <Header.WelcomeMent>
                  안녕하세요 <b>{data?.fetchUser.name}</b> 님
                </Header.WelcomeMent>
                <Header.UserName
                  onClick={onClickLogout}
                  style={{ cursor: "pointer" }}
                >
                  로그아웃
                </Header.UserName>
                <Header.HeaderIconWrapper onClick={onClickUserIcon}>
                  <Header.HeaderIcon src="/img/header/icon-profile.svg" />
                </Header.HeaderIconWrapper>
              </>
            ) : (
              <>
                <Header.UserName>
                  <Link href={"/login"}>
                    <a>로그인</a>
                  </Link>
                </Header.UserName>
                <Header.UserName>
                  <Link href={"/signUp"}>
                    <a>회원가입</a>
                  </Link>
                </Header.UserName>
                <Header.HeaderIconWrapper onClick={onClickUserIcon}>
                  <Header.HeaderIcon src="/img/header/icon-profile.svg" />
                </Header.HeaderIconWrapper>
              </>
            )}
          </Header.UserWrapper>
        </Header.Wrapper>
      </Header.Container>
      <Drawer drawerRef={drawerRef} />
    </>
  );
}
