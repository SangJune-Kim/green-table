import RecipeWriteMenuUI from "./RecipeWriteMenu.presenter";
import { IRecipeWriteMenuProps } from "./RecipeWriteMenu.types";

export default function RecipeWriteMenu(props: IRecipeWriteMenuProps) {
  return (
    <RecipeWriteMenuUI
      register={props.register}
      onKeyUpHash={props.onKeyUpHash}
      onClickDeleteTag={props.onClickDeleteTag}
      hashArr={props.hashArr}
      handleChange={props.handleChange}
      selectType={props.selectType}
    />
  );
}
