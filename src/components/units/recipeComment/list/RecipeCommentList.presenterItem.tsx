import {
  Comment,
  CommentLeft,
  CommentButton,
} from "./RecipeCommentList.styles";
import { timeForDay } from "../../../../commons/libraries/utils";
import { IRecipeCommentListUIItemProps } from "./RecipeCommentList.types";
import { useState } from "react";
import RecipeCommentWrite from "../write/RecipeCommentWrite.container";

export default function RecipeCommentListUIItem(
  props: IRecipeCommentListUIItemProps
) {
  const [isEdit, setIsEdit] = useState<Boolean>(false);
  const onToggleUpdate = () => {
    setIsEdit((prev) => !prev);
  };

  return (
    <>
      <Comment>
        <div>
          <CommentLeft>
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
          </CommentLeft>

          {props.fetchUserId === props.el?.user?.user_id && (
            <CommentButton>
              <button type="button" onClick={onToggleUpdate}>
                ✎
              </button>
              <button
                type="button"
                onClick={props.onClickDelete(props.el.reply_id)}
              >
                𝗫
              </button>
            </CommentButton>
          )}
        </div>
        <p>{props.el?.contents}</p>
      </Comment>
      {isEdit && (
        <RecipeCommentWrite isEdit={true} setIsEdit={setIsEdit} el={props.el} />
      )}
    </>
  );
}
