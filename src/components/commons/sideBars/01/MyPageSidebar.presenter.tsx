import Link from "next/link";
import { useRouter } from "next/router";
import { Fragment } from "react";
import * as My from "./MyPageSidebar.styles";

export default function MyPageSidebarUI() {
  const router = useRouter();

  const MY_PAGE_MENUS = [
    { name: "MY 홈", page: "/myPage", mobile: true },
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
    {
      name: "회원 정보 수정",
      page: "/myPage/edit",
      list: true,
      user: true,
      mobile: true,
    },
    { name: "비밀번호 변경", page: "/myPage/editPW", list: true, user: true },
    { name: "정기 구독 관리", page: "/myPage/subscribe", mobile: true },
    { name: "문의 내역", page: "/myPage/qna", mobile: true },
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

        <My.TabletMenuWrapper>
          {MY_PAGE_MENUS.map((el) => (
            <Fragment key={el.page}>
              {!el.list && (
                <Link href={el.page}>
                  <My.TabletMenuItem1
                    id={el.page}
                    className={router.asPath === el.page ? "isActive" : ""}
                  >
                    <a>{el.name}</a>
                  </My.TabletMenuItem1>
                </Link>
              )}
            </Fragment>
          ))}
        </My.TabletMenuWrapper>

        <My.TabletListWrapper>
          <ul>
            {MY_PAGE_MENUS.map((el) => (
              <Fragment key={el.page}>
                {el.recipe && (
                  <Link href={el.page}>
                    <My.TabletMenuItem2
                      id={el.page}
                      className={router.asPath === el.page ? "isActive" : ""}
                    >
                      <a>{el.name}</a>
                    </My.TabletMenuItem2>
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
                    <My.TabletMenuItem2
                      id={el.page}
                      className={router.asPath === el.page ? "isActive" : ""}
                    >
                      <a>{el.name}</a>
                    </My.TabletMenuItem2>
                  </Link>
                )}
              </Fragment>
            ))}
          </ul>
        </My.TabletListWrapper>
      </My.Wrapper>
    </My.Container>
  );
}
