import Link from "next/link";
import { useRouter } from "next/router";
import { Fragment } from "react";
import * as My from "./MyPageSidebar.styles";

export default function MyPageSidebarUI() {
  const router = useRouter();

  const MY_PAGE_MENUS = [
    { name: "MY 홈", page: "/myPage" },
    {
      name: "최근 본 레시피",
      page: "/myPage/recent",
      list: true,
      recipe: true,
    },
    { name: "찜한 레시피", page: "/myPage/wish", list: true, recipe: true },
    {
      name: "등록 레시피 관리",
      page: "/myPage/myRecipe",
      list: true,
      recipe: true,
    },
    { name: "회원 정보", page: "/myPage/info" },
    { name: "회원 정보 수정", page: "/myPage/edit", list: true, user: true },
    { name: "비밀번호 변경", page: "/myPage/editPW", list: true, user: true },
    { name: "정기 구독 관리", page: "/myPage/subscribe" },
    { name: "문의 내역", page: "/myPage/qna" },
  ];

  return (
    <My.Container>
      <My.Wrapper>
        <My.MenuWrapper>
          {MY_PAGE_MENUS.map((el) => (
            <Fragment key={el.page}>
              {!el.list && (
                <Link href={el.page}>
                  <My.MenuItem1
                    id={el.page}
                    className={router.asPath === el.page ? "isActive" : ""}
                  >
                    <a>{el.name}</a>
                  </My.MenuItem1>
                </Link>
              )}

              {el.list && (
                <Link href={el.page}>
                  <My.MenuItem2
                    id={el.page}
                    className={router.asPath === el.page ? "isActive" : ""}
                  >
                    <a>{el.name}</a>
                  </My.MenuItem2>
                </Link>
              )}
            </Fragment>
          ))}
        </My.MenuWrapper>

        <My.MobileMenuWrapper>
          {MY_PAGE_MENUS.map((el) => (
            <Fragment key={el.page}>
              {!el.list && (
                <Link href={el.page}>
                  <My.MobileMenuItem1
                    id={el.page}
                    className={router.asPath === el.page ? "isActive" : ""}
                  >
                    <a>{el.name}</a>
                  </My.MobileMenuItem1>
                </Link>
              )}
            </Fragment>
          ))}
        </My.MobileMenuWrapper>

        <My.MobileListWrapper>
          <ul>
            {MY_PAGE_MENUS.map((el) => (
              <Fragment key={el.page}>
                {el.recipe && (
                  <Link href={el.page}>
                    <My.MobileMenuItem2
                      id={el.page}
                      className={router.asPath === el.page ? "isActive" : ""}
                    >
                      <a>{el.name}</a>
                    </My.MobileMenuItem2>
                  </Link>
                )}
              </Fragment>
            ))}
          </ul>

          <ul>
            {MY_PAGE_MENUS.map((el) => (
              <Fragment key={el.page}>
                {el.user && (
                  <Link href={el.page}>
                    <My.MobileMenuItem2
                      id={el.page}
                      className={router.asPath === el.page ? "isActive" : ""}
                    >
                      <a>{el.name}</a>
                    </My.MobileMenuItem2>
                  </Link>
                )}
              </Fragment>
            ))}
          </ul>
        </My.MobileListWrapper>
      </My.Wrapper>
    </My.Container>
  );
}
