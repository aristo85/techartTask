import { useDispatch } from "react-redux";
import Template from "./Template";
import { onMaterial } from "../features/actions";

const Material = ({step, handleRestart}) => {

  const dispatch = useDispatch();
    
  const handleMaterial = (data) => {
    dispatch(onMaterial(data));
  };

    return (
        <div>
      <Template step={`Шаг ${step}`} title={"Материал стен:"}>
        <ul className="wall">
          <li onClick={() => handleMaterial(1)}>
            <a href="#">Кирпич</a>
          </li>
          <li onClick={() => handleMaterial(2)}>
            <a href="#">Шлакоблок</a>
          </li>
          <li onClick={() => handleMaterial(3)}>
            <a href="#">Деревянный брус</a>
          </li>
        </ul>
      </Template>
      <button onClick={() => handleRestart()}>Отмена</button>
    </div>
    );
}

export default Material;