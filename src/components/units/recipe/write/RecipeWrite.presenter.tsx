import * as RecipeWrite from "./RecipeWrite.styles";
import RecipeWriteMenu from "./menu/RecipeWriteMenu.container";
import { v4 as uuidv4 } from "uuid";
import DOMPurify from "dompurify";
import Uploads02 from "../../../commons/uploads/02/Uploads02.container";
import Uploads03 from "../../../commons/uploads/03/Uploads03.container";

export default function RecipeWriteUI(props) {
  return (
    <>
      <form onSubmit={props.handleSubmit(props.onClickSubmit)}>
        <RecipeWrite.Container>
          <RecipeWrite.MenuWrapper>
            <RecipeWriteMenu
              register={props.register}
              onKeyUpHash={props.onKeyUpHash}
              onClickDeleteTag={props.onClickDeleteTag}
              hashArr={props.hashArr}
              selectType={props.selectType}
              handleChange={props.handleChange}
            />
          </RecipeWrite.MenuWrapper>
          <RecipeWrite.Wrapper>
            <RecipeWrite.TopWrapper>
              <RecipeWrite.BackButton
                type="button"
                onClick={() => props.router.push("/recipe")}
              >
                <img src="/img/recipeDetail/icon-arrow-left.svg" alt="" />
                목록으로
              </RecipeWrite.BackButton>
              <RecipeWrite.RepImagesWrapper>
                <RecipeWrite.RepImage>
                  {props.imageUrls[0] !== "" ? (
                    <RecipeWrite.UploadedRepImage
                      src={`https://storage.googleapis.com/${props.imageUrls[0]}`}
                    />
                  ) : (
                    <>
                      <img src="/img/icon/icon-upload-image.svg" alt="" />
                      <span>사진을 넣어주세요</span>
                    </>
                  )}
                </RecipeWrite.RepImage>
                <RecipeWrite.UploadIconsWrapper>
                  {props.imageUrls.map((el, index) => (
                    <Uploads02
                      key={uuidv4()}
                      index={index}
                      fileUrl={el}
                      onChangeFileUrls={props.onChangeFileUrls}
                    />
                  ))}
                </RecipeWrite.UploadIconsWrapper>
              </RecipeWrite.RepImagesWrapper>
            </RecipeWrite.TopWrapper>

            <RecipeWrite.Navigation>
              <li
                className={`${props.tabActive[0]}`}
                onClick={props.onClickIngredientTab}
              >
                준비재료
              </li>
              <li
                className={`${props.tabActive[1]}`}
                onClick={props.onClickCookOrderTab}
              >
                요리순서
              </li>
            </RecipeWrite.Navigation>

            <RecipeWrite.Contents>
              <h2 ref={props.ingredientTabRef}>준비재료</h2>
              <RecipeWrite.IngredientsWrapper>
                <RecipeWrite.InputGuideWrapper>
                  <img src="/img/icon/Pencil.svg" alt="" />
                  <span>필요한 재료를 입력하세요</span>
                </RecipeWrite.InputGuideWrapper>
                <RecipeWrite.IngredientArr>
                  {props.ingredientArr.map((el) => (
                    <div
                      key={uuidv4()}
                      onClick={props.onClickDeleteIngredient(el)}
                    >
                      <span>
                        {el.name} {el.amount}
                        {el.unit}
                      </span>
                    </div>
                  ))}
                </RecipeWrite.IngredientArr>

                <div style={{ display: "flex" }}>
                  <RecipeWrite.IngredientInputs>
                    <div>
                      <input
                        type="text"
                        name="name"
                        placeholder="재료명"
                        onChange={props.onChangeIngredient}
                      />
                      <RecipeWrite.InputAmount
                        type="number"
                        name="amount"
                        placeholder="양"
                        min={1}
                        onChange={props.onChangeIngredient}
                      />
                      <RecipeWrite.InputUnit
                        type="text"
                        name="unit"
                        placeholder="단위"
                        onChange={props.onChangeIngredient}
                      />
                      <button
                        type="button"
                        onClick={props.onClickAddIngredient}
                      >
                        <span>추가</span>
                      </button>
                    </div>
                    <RecipeWrite.InputTipWrapper>
                      <p>재료를 입력하고 재료추가를 누르면 추가됩니다.</p>
                      <p>추가된 재료를 클릭하면 삭제할 수 있습니다.</p>
                    </RecipeWrite.InputTipWrapper>
                  </RecipeWrite.IngredientInputs>
                </div>
              </RecipeWrite.IngredientsWrapper>
              <h2 ref={props.cookOrderTabRef}>요리순서</h2>
              <RecipeWrite.CookingOrderWrapper>
                {props.descArr.map((el) => (
                  <RecipeWrite.CookingOrder key={uuidv4()}>
                    <span>STEP {el.step}</span>
                    {el.step ===
                      props.descArr[props.descArr.length - 1].step && (
                      <button
                        type="button"
                        onClick={props.onClickDeleteDesc(el.step)}
                      >
                        <img src="/img/icon/WhiteClose.svg" alt="" />
                      </button>
                    )}
                    <div>
                      {el.image && (
                        <img
                          src={`https://storage.googleapis.com/${el.image}`}
                        />
                      )}
                    </div>
                    <div>
                      {typeof window !== "undefined" ? (
                        <p
                          dangerouslySetInnerHTML={{
                            __html: DOMPurify.sanitize(el.desc),
                          }}
                        ></p>
                      ) : (
                        <p></p>
                      )}
                    </div>
                  </RecipeWrite.CookingOrder>
                ))}
              </RecipeWrite.CookingOrderWrapper>
              <Uploads03
                descImage={props.descImage}
                onChangeDescImage={props.onChangeDescImage}
              />
              <RecipeWrite.TextArea
                onChange={props.onChangeTextArea}
                placeholder="설명을 적어주세요"
              ></RecipeWrite.TextArea>
              <RecipeWrite.AddStepWrapper onClick={props.onClickAddDesc}>
                <RecipeWrite.AddContentButton type="button">
                  <img src="/img/icon/contentAdd.svg" alt="" />
                </RecipeWrite.AddContentButton>
                <span>STEP 추가하기</span>
              </RecipeWrite.AddStepWrapper>
              <RecipeWrite.RegisterButtonWrapper>
                <button type="submit"> 등록하기</button>
              </RecipeWrite.RegisterButtonWrapper>
            </RecipeWrite.Contents>
          </RecipeWrite.Wrapper>
        </RecipeWrite.Container>
      </form>
    </>
  );
}
