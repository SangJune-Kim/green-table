export interface IRecipeCommentListProps {
  fetchUser: any;
  replyCount: number;
}
export interface IRecipeCommentListUIProps {
  fetchUser: any;
  fetchComment: any;
  replyCount: number;
  onLoadMore: () => void;
}
export interface IRecipeCommentListUIItemProps {
  el: any;
}
