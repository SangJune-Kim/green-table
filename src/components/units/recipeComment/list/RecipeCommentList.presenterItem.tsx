import * as CommentItem from "./RecipeCommentList.styles";
import { timeForDay } from "../../../../commons/libraries/utils";

export default function RecipeCommentListUIItem(props) {
  return (
    <CommentItem.Comment>
      <div>
        <span>{props.el?.user?.email.split("@")[0] + "****"}</span>
        <span>
          {props.el?.user?.type === "NON_Vegan" && "채린이"}
          {props.el?.user?.type === "Vegan" && "비건"}
          {props.el?.user?.type === "Lacto" && "락토"}
          {props.el?.user?.type === "Ovo" && "오보"}
          {props.el?.user?.type === "Lacto_Ovo" && "락토오보"}
          {props.el?.user?.type === "Pesco" && "페스코"}
          {props.el?.user?.type === "Pollo" && "폴로"}
        </span>
        <span>{timeForDay(props.el?.createdAt)}</span>
      </div>
      <p>{props.el?.contents}</p>
    </CommentItem.Comment>
  );
}
