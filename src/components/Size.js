import { useState } from "react";
import { useDispatch } from "react-redux";
import { getResult } from "../features/actions";
import Template from "./Template";

const Size = ({ step, handleRestart }) => {
  const [sizex, setSizex] = useState("");
  const [sizey, setSizey] = useState("");

  const dispatch = useDispatch();

  const handleSize = () => {
    dispatch(getResult({ sizex, sizey }));
    setSizex("");
    setSizey("");
  };

  return (
    <div>
      <Template step={`Шаг ${step}`} title={"Длина стен (в метрах):"}>
        <div style={{ flex: "row" }}>
          <input
            className="sizeInput"
            value={sizex}
            onChange={(e) => setSizex(e.target.value)}
          />
          X
          <input
            className="sizeInput"
            value={sizey}
            onChange={(e) => setSizey(e.target.value)}
          />
        </div>
      </Template>
      <button onClick={() => handleRestart()}>Отмена</button>
      <button onClick={() => handleSize()}>Рассчитать</button>
    </div>
  );
};

export default Size;
