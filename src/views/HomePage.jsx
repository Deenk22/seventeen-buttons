import ButtonSeven from "../sections/ButtonSeven";
import ButtonSix from "../sections/ButtonSix";
import {
  ButtonOne,
  ButtonTwo,
  ButtonThree,
  ButtonFour,
  ButtonFive,
  Home,
} from "../sections/sections";

export default function HomePage() {
  return (
    <div>
      <Home />
      <ButtonOne />
      <ButtonTwo />
      <ButtonThree />
      <ButtonFour />
      <ButtonFive />
      <ButtonSix />
      <ButtonSeven />
    </div>
  );
}
