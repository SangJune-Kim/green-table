import RecipeWriteUI from "./RecipeWrite.presenter";
import { useRouter } from "next/router";
import { FieldValues, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_RECIPE, UPDATE_RECIPE } from "./RecipeWrite.queries";
import { useModal } from "../../../commons/hooks/useModal";

const nonSchema = yup.object({});

export default function RecipeWrite(props) {
  const router = useRouter();
  const [createRecipe] = useMutation(CREATE_RECIPE);
  const [updateRecipe] = useMutation(UPDATE_RECIPE);
  const { Success, ModalError } = useModal();
  // 탭 Ref
  const ingredientTabRef = useRef<HTMLDivElement>(null);
  const cookOrderTabRef = useRef<HTMLDivElement>(null);
  const [tabActive, setTabActive] = useState<string[]>(["isActive", ""]);
  // 태그
  const [hashArr, setHashArr] = useState<string[]>([]);
  // 재료Array
  const [ingredientArr, setIngredientArr] = useState<
    {
      name: string;
      amount: string;
      unit: string;
    }[]
  >([]);
  // desc Array
  const [descArr, setDescArr] = useState<
    {
      step: number;
      image: string;
      desc: string;
    }[]
  >([]);
  // 재료
  const [ingredient, setIngredient] = useState<{
    name: string;
    amount: string;
    unit: string;
  }>({
    name: "",
    amount: "",
    unit: "",
  });
  // description
  const [desc, setDesc] = useState<{
    step: number;
    image: string;
    desc: string;
  }>({
    step: 0,
    image: "",
    desc: "",
  });
  const [selectType, setSelectType] = useState<{
    types: string;
  }>({ types: "Vegan" });
  // 대표 이미지업로드
  const [imageUrls, setImageUrls] = useState<string[]>(["", "", "", ""]);
  // 요리순서 이미지 업로드
  const [descImage, setDescImage] = useState<string>("");
  // useForm
  const { register, handleSubmit, formState, reset } = useForm<
    FieldValues,
    any
  >({
    resolver: yupResolver(nonSchema),
    mode: "onChange",
  });

  // 재료 input 입력
  const onChangeIngredient = (event: ChangeEvent<HTMLInputElement>) => {
    setIngredient((prev) => ({
      ...ingredient,
      [event.target.name]: event.target.value,
    }));
  };

  // step 입력(description)
  const onChangeTextArea = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setDesc((prev) => ({
      ...desc,
      image: descImage,
      desc: event.target.value,
    }));
  };

  // step 추가
  const onClickAddDesc = () => {
    const newDesc = desc.desc.replaceAll(/\n/gi, "<br />");
    if (!desc.desc) return;
    setDescArr((prev) => [
      ...descArr,
      {
        step: descArr.length + 1,
        image: desc.image,
        desc: newDesc,
      },
    ]);
    setDescImage("");
  };

  // step 삭제
  const onClickDeleteDesc = (arg: number) => () => {
    setDescArr(descArr.filter((el) => el.step !== arg));
  };

  // 재료추가
  const onClickAddIngredient = () => {
    if (!ingredient.name || !ingredient.amount || !ingredient.unit) return;
    setIngredientArr((prev) => [...ingredientArr, ingredient]);
  };

  // 재료 삭제
  const onClickDeleteIngredient =
    (arg: { name: string; amount: string; unit: string }) => () => {
      setIngredientArr(ingredientArr.filter((el) => el !== arg));
    };

  // 해쉬태그
  const onKeyUpHash = (event: {
    keyCode: number;
    target: { value: string };
  }) => {
    if (event.keyCode === 32 && event.target.value !== " ") {
      setHashArr([...hashArr, "#" + event.target.value.trim()]);
      event.target.value = "";
    }
  };

  // 해쉬태그 삭제
  const onClickDeleteTag = (tag: string) => () => {
    setHashArr(hashArr.filter((el) => el !== `${tag}`));
  };

  // 탭 Ref
  const onClickIngredientTab = () => {
    ingredientTabRef.current?.scrollIntoView({ behavior: "smooth" });
    setTabActive(["isActive", ""]);
  };
  const onClickCookOrderTab = () => {
    cookOrderTabRef.current?.scrollIntoView({ behavior: "smooth" });
    setTabActive(["", "isActive"]);
  };

  // 채식유형선택
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectType({
      types: event.target.value,
    });
  };

  // 레시피 등록하기
  const onClickSubmit = async (data: any) => {
    if (data.title === "") return alert("제목을 입력해 주세요!");
    if (data.summary === "") return alert("한줄요약을 작성해 주세요!");
    if (descArr.length === 0) return alert("요리순서를 작성해 주세요!");
    if (data.cookTime === "") return alert("조리시간을 입력해 주세요!");
    if (data.level === "선택") return alert("난이도를 선택해 주세요!");
    if (data.serve === "") return alert("인분을 입력해 주세요!");
    try {
      const result = await createRecipe({
        variables: {
          createRecipesInput: {
            title: data.title,
            summary: data.summary,
            types: String(selectType.types),
            mainUrl: imageUrls,
            contentsUrl: descArr.map((el) => el.image),
            description: descArr.map((el) => `${el.desc}`),
            cookTime: Number(data.cookTime),
            level: data.level,
            serve: Number(data.serve),
            ingredients: ingredientArr.map(
              (el) => `${el.name} ${el.amount}${el.unit}`
            ),
            recipesTags: hashArr,
          },
        },
      });
      Success("등록 성공", "레시피 등록에 성공하였습니다.");
      router.push(`/recipe/${result.data.createRecipe.id}`);
    } catch (error) {
      if (error instanceof Error) ModalError("등록 실패", error.message);
    }
  };

  const onClickUpdate = async (data: any) => {
    try {
      const result = await updateRecipe({
        variables: {
          recipe_id: String(router.query.recipeId),
          updateRecipesInput: {
            title: data.title,
            summary: data.summary,
            types: String(selectType.types),
            mainUrl: imageUrls,
            contentsUrl: descArr.map((el) => el.image),
            description: descArr.map((el) => `${el.desc}`),
            cookTime: Number(data.cookTime),
            level: data.level,
            serve: Number(data.serve),
            ingredients: ingredientArr.map(
              (el) => `${el.name} ${el.amount}${el.unit}`
            ),
            recipesTags: hashArr,
          },
        },
      });
      Success("수정 성공", "레시피 수정에 성공하였습니다.");
      router.push(`/recipe/${result.data.updateRecipe.id}`);
    } catch (error) {
      if (error instanceof Error) ModalError("수정 실패", error.message);
    }
  };

  // 대표 이미지 업로드
  const onChangeFileUrls = (fileUrl: string, index: number) => {
    const newFileUrls = [...imageUrls];
    newFileUrls[index] = fileUrl;
    setImageUrls(newFileUrls);
  };

  // 요리순서 이미지 업로드
  const onChangeDescImage = (fileUrl: string) => {
    setDescImage(fileUrl);
  };

  useEffect(() => {
    if (!props.fetchRecipe) return;
    setImageUrls((prev) => [
      ...props.fetchRecipe?.fetchRecipe.recipesMainImage.map(
        (el: any) => el.mainUrl
      ),
    ]);
    setIngredientArr((prev) =>
      props.fetchRecipe?.fetchRecipe.ingredients.map((el: any) => {
        const nameArr = el.name.split(" ");
        return {
          name: nameArr[0],
          amount: nameArr[1].replace(/[^0-9]/g, ""),
          unit: nameArr[1].replace(/[0-9]/g, ""),
        };
      })
    );
    setDescArr((prev) =>
      props.fetchRecipe?.fetchRecipe.recipesContentsImage.map(
        (el: any, index: number) => ({
          step: Number(index + 1),
          image: el.contentsUrl,
          desc: el.description,
        })
      )
    );
    setHashArr((prev) =>
      props.fetchRecipe?.fetchRecipe.recipesTags.map((el) => `#${el.name}`)
    );
    setSelectType((prev) => ({
      types: props.fetchRecipe?.fetchRecipe.types,
    }));
    reset({
      title: props.fetchRecipe?.fetchRecipe.title,
      summary: props.fetchRecipe?.fetchRecipe.summary,
      cookTime: props.fetchRecipe?.fetchRecipe.cookTime,
      level: props.fetchRecipe?.fetchRecipe.level,
      serve: props.fetchRecipe?.fetchRecipe.serve,
    });
  }, [props.fetchRecipe]);

  console.log(
    "imageUrls",
    imageUrls,
    "descArr",
    descArr,
    "hashArr",
    hashArr,
    "ingredientArr",
    ingredientArr,
    "selectType",
    selectType
  );

  return (
    <RecipeWriteUI
      formState={formState}
      hashArr={hashArr}
      ingredientArr={ingredientArr}
      descArr={descArr}
      ingredientTabRef={ingredientTabRef}
      cookOrderTabRef={cookOrderTabRef}
      tabActive={tabActive}
      selectType={selectType}
      router={router}
      imageUrls={imageUrls}
      descImage={descImage}
      isEdit={props.isEdit}
      fetchRecipe={props.fetchRecipe}
      register={register}
      handleSubmit={handleSubmit}
      onClickSubmit={onClickSubmit}
      onClickDeleteTag={onClickDeleteTag}
      onClickAddIngredient={onClickAddIngredient}
      onChangeIngredient={onChangeIngredient}
      onKeyUpHash={onKeyUpHash}
      onClickDeleteIngredient={onClickDeleteIngredient}
      onChangeTextArea={onChangeTextArea}
      onClickAddDesc={onClickAddDesc}
      onClickIngredientTab={onClickIngredientTab}
      onClickCookOrderTab={onClickCookOrderTab}
      onClickDeleteDesc={onClickDeleteDesc}
      handleChange={handleChange}
      onChangeFileUrls={onChangeFileUrls}
      onChangeDescImage={onChangeDescImage}
      onClickUpdate={onClickUpdate}
    />
  );
}
