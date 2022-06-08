import styled from "@emotion/styled";
import { ReactNode } from "react";
import LayoutBanner from "./banner/Banner.container";
import LayoutFooter from "./footer";
import LayoutHeader from "./header";
import { useRouter } from "next/router";

const Body = styled.div`
  width: 100%;
`;

interface LayoutProps {
  children: ReactNode;
}

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

const HIDDEN_PATH_NAME = [`/recipe/[recipeId]`];
const HIDDEN_LANDING_PAGE = ["/"];

export default function Layout(props: LayoutProps) {
  const router = useRouter();
  const isHiddenBanner = HIDDEN_BANNER.includes(router.asPath);
  const isHiddenPathname = HIDDEN_PATH_NAME.includes(router.pathname);
  const isHiddenLandingPage = HIDDEN_LANDING_PAGE.includes(router.asPath);
  return (
    <>
      {!isHiddenLandingPage && <LayoutHeader />}
      {!isHiddenPathname ? !isHiddenBanner && <LayoutBanner /> : <></>}
      <Body>{props.children}</Body>
      {!isHiddenLandingPage && <LayoutFooter />}
    </>
  );
}
