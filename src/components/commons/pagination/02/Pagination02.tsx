import * as P from "./Pagination02.styles";
import { useState } from "react";

export default function Pagination02(props) {
  const [startPage, setStartPage] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [isPrevActive, setIsPrevActive] = useState(false);
  const [isNextActive, setIsNextActive] = useState(true);

  const onClickPage = (event) => {
    props.refetch({ page: Number(event.target.id) });
    setCurrentPage((prev) => Number(event.target.id));
    if (startPage !== 1) {
      setIsPrevActive(true);
    }
    if (startPage + 5 > props.lastPage) {
      setIsNextActive(false);
    }
    if (startPage === 1) {
      setIsPrevActive(false);
    }
    if (startPage + 5 <= props.lastPage) {
      setIsNextActive(true);
    }
  };

  const onClickPrevPage = () => {
    setIsNextActive(true);
    if (startPage <= 6) setIsPrevActive(false);
    if (startPage === 1) {
      setIsPrevActive(false);
      return;
    }
    setStartPage((prev) => prev - 5);
    props.refetch({ page: startPage - 5 });
    setCurrentPage((prev) => startPage - 5);
  };

  const onClickNextPage = () => {
    setIsPrevActive(true);
    if (startPage >= props.lastPage - 9) setIsNextActive(false);
    if (startPage + 10 > props.lastPage) {
      setIsNextActive(false);
      return;
    }
    setStartPage((prev) => prev + 5);
    props.refetch({ page: startPage + 5 });
    setCurrentPage((prev) => startPage + 5);
  };

  return (
    <P.Wrapper>
      {/* <P.PagePrevButton>
        <img src="/img/recipeList/Leftx2.svg" />
      </P.PagePrevButton> */}
      <P.PagePrevButton onClick={onClickPrevPage} isPrevActive={isPrevActive}>
        <img src="/img/recipeList/Left.svg" />
      </P.PagePrevButton>
      {new Array(5).fill(1).map((_, index) =>
        index + startPage <= props.lastPage ? (
          <P.PageNumber
            key={index + startPage}
            onClick={onClickPage}
            id={String(index + startPage)}
            currentPage={currentPage === index + startPage}
          >
            {index + startPage}
          </P.PageNumber>
        ) : (
          <P.PageNumber key={index + startPage}></P.PageNumber>
        )
      )}
      <P.PageNextButton onClick={onClickNextPage} isNextActive={isNextActive}>
        <img src="/img/recipeList/Right.svg" />
      </P.PageNextButton>
      {/* <P.PageNextButton>
        <img src="/img/recipeList/Rightx2.svg" />
      </P.PageNextButton> */}
    </P.Wrapper>
  );
}
