import { ApolloQueryResult } from "@apollo/client";

export interface IPropsPagination02 {
  lastPage: number;
  refetch: (
    variables?: Partial<{ page: number }> | undefined
  ) => Promise<ApolloQueryResult<any>>;
  selectedTypes: string;
  isPicked: {
    wholeMenu: string;
    selectList: string;
  };
}

export interface IPropsPaginationStyled {
  currentPage?: boolean;
  isPrevActive?: boolean;
  isNextActive?: boolean;
}
