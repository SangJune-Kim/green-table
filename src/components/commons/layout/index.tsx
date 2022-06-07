import styled from "@emotion/styled";
import { ReactNode } from "react";
import LayoutBanner from "./banner/Banner.container";
import LayoutFooter from "./footer";
import LayoutHeader from "./header";
import { useRouter } from "next/router";

const Body = styled.div`
  width: 100%;
`;

// layout props type
interface LayoutProps {
  children: ReactNode;
}

// 컴포넌트 hidden
const HIDDEN_BANNER = [
  "/",
  "/login",
  "/signUp",
  "/myPage",
  "/myPage/info",
  "/myPage/edit",
  "/myPage/editPW",
  "/myPage/recent",
  "/myPage/wish",
  "/myPage/myRecipe",
  "/myPage/subscribe",
  "/myPage/qna",
  "/typeCheck",
  "/recipe",
  "/recipe/new",
  "/subscribe",
  "/subscribe/complete",
];

// 디테일 페이지 hidden
const HIDDEN_PATHNAME = [`/recipe/[recipeId]`];
const HIIDEN_LANDINGPAGE = ["/"];

export default function Layout(props: LayoutProps) {
  const router = useRouter();
  const isHiddenBanner = HIDDEN_BANNER.includes(router.asPath);
  const isHiddenPathname = HIDDEN_PATHNAME.includes(router.pathname);
  const isHiddenLandingPage = HIIDEN_LANDINGPAGE.includes(router.asPath);
  return (
    <>
      {!isHiddenLandingPage && <LayoutHeader />}
      {!isHiddenPathname ? !isHiddenBanner && <LayoutBanner /> : <></>}
      <Body>{props.children}</Body>
      {!isHiddenLandingPage && <LayoutFooter />}
    </>
  );
}
