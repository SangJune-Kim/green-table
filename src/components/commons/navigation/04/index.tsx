import { useRouter } from "next/router";
import { useState } from "react";
import * as Nav from "./Navigation.styles";

const Navigation04 = () => {
  const VEGAN_TYPE = [
    {
      name: "전체",
      enName: "All",
      type: "NON_CHECKED",
      image: "/img/navigation/icon-vegan-all.svg",
      hover: "/img/navigation/icon-vegan-all.svg",
    },
    {
      name: "비건",
      enName: "Vegan",
      type: "VEGAN",
      image: "/img/navigation/icon-vegan-vegan.svg",
      hover: "/img/navigation/icon-vegan-vegan-hover.svg",
    },
    {
      name: "락토",
      enName: "Lacto",
      type: "LACTO",
      image: "/img/navigation/icon-vegan-lacto.svg",
      hover: "/img/navigation/icon-vegan-lacto-hover.svg",
    },
    {
      name: "오보",
      enName: "Ovo",
      type: "OVO",
      image: "/img/navigation/icon-vegan-ovo.svg",
      hover: "/img/navigation/icon-vegan-ovo-hover.svg",
    },
    {
      name: "락토오보",
      enName: "Lacto-Ovo",
      type: "LACTO_OVO",
      image: "/img/navigation/icon-vegan-lactoOvo.svg",
      hover: "/img/navigation/icon-vegan-lactoOvo-hover.svg",
    },
    {
      name: "페스코",
      enName: "Pesco",
      type: "PESCO",
      image: "/img/navigation/icon-vegan-pesco.svg",
      hover: "/img/navigation/icon-vegan-pesco-hover.svg",
    },
    {
      name: "폴로",
      enName: "Pollo",
      type: "POLLO",
      image: "/img/navigation/icon-vegan-pollo.svg",
      hover: "/img/navigation/icon-vegan-pollo-hover.svg",
    },
  ];
  const router = useRouter();
  const [isPicked, setIsPicked] = useState("All");

  const onClickVeganType = (el) => () => {
    setIsPicked(el.enName);
    router.push(`/recipe/?type=${el.type}`, `/recipe`, {
      shallow: true,
    });
  };

  return (
    <Nav.Wrapper>
      {VEGAN_TYPE.map((el, i) => (
        <Nav.VeganType
          key={i}
          onClick={onClickVeganType(el)}
          isPicked={isPicked === el.enName}
          hover={el.hover}
        >
          <Nav.VeganTypeImg
            image={el.image}
            hover={el.hover}
            isPicked={isPicked === el.enName}
          />
          <Nav.VeganTypeName>{el.name}</Nav.VeganTypeName>
          <Nav.VeganTypeEnName>{el.enName}</Nav.VeganTypeEnName>
        </Nav.VeganType>
      ))}
    </Nav.Wrapper>
  );
};
export default Navigation04;
