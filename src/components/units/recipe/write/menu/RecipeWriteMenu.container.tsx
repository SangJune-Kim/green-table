import RecipeWriteMenuUI from "./RecipeWriteMenu.presenter";

export default function RecipeWriteMenu(props) {
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
