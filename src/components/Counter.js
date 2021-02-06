import { useDispatch, useSelector } from "react-redux";
import { onRestart } from "../features/actions";
import Building from "./Building";
import Floor from "./Floor";
import Material from "./Material";
import Size from "./Size";
import Result from "./Result";

const Counter = () => {
  const counterStates = useSelector((state) => state.counter);
  const step = counterStates.step;

  const dispatch = useDispatch();

  const handleRestart = () => {
    dispatch(onRestart());
  };

  return counterStates.screens === 1 ? (
    <Building step={step} />
  ) : counterStates.screens === 2 ? (
    <Floor step={step} handleRestart={handleRestart} />
  ) : counterStates.screens === 3 ? (
    <Material step={step} handleRestart={handleRestart} />
  ) : counterStates.screens === 4 ? (
    <Size step={step} handleRestart={handleRestart} />
  ) : (
    <Result
      result={counterStates.result}
      message={counterStates.message}
      handleRestart={handleRestart}
    />
  );
};

export default Counter;
