import { useState } from "react";
import { useDispatch } from "react-redux";
import { onFloor } from "../features/actions";
import Template from "./Template";

const Floor = ({ step, handleRestart }) => {
  const [floor, setFloor] = useState("");

  const dispatch = useDispatch();

  const handleFloor = () => {
    dispatch(onFloor(floor));
    setFloor("");
  };

  return (
    <div>
      <Template step={`Шаг ${step}`} title={"Количество этажей (число):"}>
        <input
          className="floorInput"
          value={floor}
          onChange={(e) => setFloor(e.target.value)}
        />
      </Template>
      <button onClick={() => handleRestart()}>Отмена</button>
      <button onClick={() => handleFloor()}>Далее</button>
    </div>
  );
};

export default Floor;
