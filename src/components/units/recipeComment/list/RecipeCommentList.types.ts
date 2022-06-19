export interface IRecipeCommentListProps {
  fetchUser: any;
  replyCount: number;
}
export interface IRecipeCommentListUIProps {
  fetchUser: any;
  fetchComment: any;
  replyCount: number;
  onLoadMore: () => void;
  onClickDelete: (data: any) => () => Promise<void>;
}
export interface IRecipeCommentListUIItemProps {
  el: any;
  fetchUserId: string;
  onClickDelete: (data: any) => () => Promise<void>;
}
