import { useRouter } from "next/router";
import { useState } from "react";
import SubmitButton from "../../commons/buttons/submit";
import * as Type from "./TypeCheck.styles";

export default function TypeCheckQ3() {
  const router = useRouter();
  const [isPicked, setIsPicked] = useState([false]);

  const onClickAllergy = (i: number) => () => {
    const newPicked = [...isPicked];
    newPicked[i] = !isPicked[i];
    setIsPicked(newPicked);
  };

  const ALLERGY_KEYWORD = [
    { word: "견과류" },
    { word: "갑각류" },
    { word: "과일" },
    { word: "우유" },
    { word: "계란" },
    { word: "대두" },
  ];

  const onClickSubmit = () => {
    router.push("/main");
  };

  return (
    <Type.AllergyContentsWrapper>
      <Type.StepWrapper>
        <Type.StepCircleOn>01</Type.StepCircleOn>
        <Type.StepBarOn />
        <Type.StepCircleOn>02</Type.StepCircleOn>
        <Type.StepBarOn />
        <Type.StepCircleOn>03</Type.StepCircleOn>
      </Type.StepWrapper>
      <Type.StepQuestion>
        Q3. 알레르기가 있나요?
        <span>해당사항이 없다면 바로 완료를 눌러주세요.</span>
      </Type.StepQuestion>

      <Type.AllergyWrapper>
        {ALLERGY_KEYWORD.map((el, i) => (
          <Type.AllergyKeywordRow key={i}>
            <Type.AllergyKeyword
              id={el.word}
              onClick={onClickAllergy(i)}
              isPicked={isPicked[i]}
            >
              {isPicked[i] ? (
                <Type.VeganKeywordCheckIcon src="/img/icon/Check.svg" />
              ) : (
                <Type.VeganKeywordCheckIcon src="/img/icon/Add.svg" />
              )}
              {el.word}
            </Type.AllergyKeyword>
          </Type.AllergyKeywordRow>
        ))}
      </Type.AllergyWrapper>
      <SubmitButton title={"완료"} isActive={true} onClick={onClickSubmit} />
    </Type.AllergyContentsWrapper>
  );
}
