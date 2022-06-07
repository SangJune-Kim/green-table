import SearchBar01 from "../../commons/searchBars/01";
import Navigation04 from "../../commons/navigation/04";
import BestRecipe from "./bestRecipe/BestRecipe.container";
import MonthlyRecipe from "./monthlyRecipe/MonthlyRecipe.container";
import DeliveryService from "./deliveryService/DeliveryService.container";
import Magazine from "./magazine/Magazine.container";
import Promotion from "./promotion/Promotion.container";

export default function Main() {
  return (
    <>
      <SearchBar01 />
      <Navigation04 />
      <BestRecipe />
      <MonthlyRecipe />
      <DeliveryService />
      <Magazine />
      <Promotion />
    </>
  );
}
