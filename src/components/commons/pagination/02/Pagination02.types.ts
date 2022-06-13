import { ApolloQueryResult } from "@apollo/client";

export interface IPropsPagination02 {
  lastPage: number;
  refetch: (
    variables?: Partial<{ page: number }> | undefined
  ) => Promise<ApolloQueryResult<any>>;
}

export interface IPropsPaginationStyled {
  currentPage?: boolean;
  isPrevActive?: boolean;
  isNextActive?: boolean;
}
