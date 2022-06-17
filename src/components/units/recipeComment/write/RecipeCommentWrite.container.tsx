import RecipeCommentWriteUI from "./RecipeCommentWrite.presenter";
import {
  CREATE_REPLY,
  UPDATE_REPLY,
  FETCH_REPLIES,
  FETCH_RECIPE,
} from "./RecipeCommentWrite.queries";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { FieldValues, useForm } from "react-hook-form";
import { useModal } from "../../../commons/hooks/useModal";
import { IRecipeCommentWriteProps } from "./RecipeCommentWrite.types";

export default function RecipeCommentWrite(props: IRecipeCommentWriteProps) {
  const router = useRouter();
  const { Success, Warning, ModalError } = useModal();
  const [createReply] = useMutation(CREATE_REPLY);
  const [updateReply] = useMutation(UPDATE_REPLY);
  const { register, handleSubmit, setValue } = useForm<FieldValues, any>({
    mode: "onChange",
  });
  // 댓글 작성하기
  const onClickSubmit = async (data: any) => {
    if (!data.contents) return Warning("등록 실패", "댓글을 입력해주세요.");
    try {
      await createReply({
        variables: {
          contents: data.contents,
          id: String(router.query.recipeId),
        },
        refetchQueries: [
          {
            query: FETCH_REPLIES,
            variables: { id: String(router.query.recipeId) },
          },
          {
            query: FETCH_RECIPE,
            variables: { recipes_id: String(router.query.recipeId) },
          },
        ],
      });
      setValue("contents", "");
      Success("등록 성공", "댓글이 작성되었습니다.");
    } catch (error) {
      if (error instanceof Error) ModalError("등록 실패", error.message);
    }
  };
  // 댓글 수정하기
  const onClickUpdate = async (data: any) => {
    try {
      await updateReply({
        variables: {
          reply_id: props.el?.reply_id,
          recipe_id: String(router.query.recipeId),
          contents: data.contents,
        },
        refetchQueries: [
          {
            query: FETCH_REPLIES,
            variables: { id: String(router.query.recipeId) },
          },
          {
            query: FETCH_RECIPE,
            variables: { recipes_id: String(router.query.recipeId) },
          },
        ],
      });
    } catch (error) {
      if (error instanceof Error) ModalError("수정 실패", error.message);
    }
  };
  console.log(props?.el);

  return (
    <RecipeCommentWriteUI
      isEdit={props.isEdit}
      el={props.el}
      register={register}
      handleSubmit={handleSubmit}
      onClickSubmit={onClickSubmit}
      onClickUpdate={onClickUpdate}
    />
  );
}
