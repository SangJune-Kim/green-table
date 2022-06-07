import { useState } from "react";
import * as P from "./Pagination01.styles";

export default function Pagination01() {
  const [startPage, setStartPage] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [isPrevActive, setIsPrevActive] = useState(false);
  const [isNextActive, setIsNextActive] = useState(true);

  return (
    <P.Wrapper>
      <P.PrevNextIcon src="/img/icon/prev.svg" />
      <P.PageNumberWrapper>
        <P.CurrentPageNumber>1</P.CurrentPageNumber>/
        <P.LastPageNumber>2</P.LastPageNumber>
      </P.PageNumberWrapper>
      <P.PrevNextIcon src="/img/icon/next.svg" />
    </P.Wrapper>
  );
}

// const onClickPage = (event) => {
//   props.refetch({ page: Number(event.target.id) });
//   setCurrentPage((prev) => Number(event.target.id));
//   if (startPage !== 1) {
//     setIsPrevActive(true);
//   }
//   if (startPage + 10 > props.lastPage) {
//     setIsNextActive(false);
//   }
//   if (startPage === 1) {
//     setIsPrevActive(false);
//   }
//   if (startPage + 10 <= props.lastPage) {
//     setIsNextActive(true);
//   }
// };

// const onClickPrevPage = () => {
//   console.log(startPage, currentPage, props.lastPage);
//   setIsNextActive(true);
//   if (startPage <= 11) setIsPrevActive(false);
//   if (startPage === 1) {
//     setIsPrevActive(false);
//     return;
//   }
//   setStartPage((prev) => prev - 10);
//   props.refetch({ page: startPage - 10 });
//   setCurrentPage((prev) => startPage - 10);
// };

// const onClickNextPage = () => {
//   console.log(startPage, currentPage, props.lastPage);
//   setIsPrevActive(true);
//   if (startPage >= props.lastPage - 19) setIsNextActive(false);
//   if (startPage + 10 > props.lastPage) {
//     setIsNextActive(false);
//     return;
//   }
//   setStartPage((prev) => prev + 10);
//   props.refetch({ page: startPage + 10 });
//   setCurrentPage((prev) => startPage + 10);
// };

// return (
//   <S.WrapperPageNation>
//     <S.PagePrevButton onClick={onClickPrevPage} isPrevActive={isPrevActive}>
//       <CaretLeftOutlined />
//     </S.PagePrevButton>
//     {new Array(10).fill(1).map((_, index) =>
//       index + startPage <= props.lastPage ? (
//         <S.PageNumber
//           key={index + startPage}
//           onClick={onClickPage}
//           id={String(index + startPage)}
//           currentPage={currentPage === index + startPage}
//         >
//           {index + startPage}
//         </S.PageNumber>
//       ) : (
//         <S.PageNumber key={index + startPage}></S.PageNumber>
//       )
//     )}
//     <S.PageNextButton onClick={onClickNextPage} isNextActive={isNextActive}>
//       <CaretRightOutlined />
//     </S.PageNextButton>
//   </S.WrapperPageNation>
