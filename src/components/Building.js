import { useDispatch } from "react-redux";
import { onStart } from "../features/actions";
import Template from "./Template";

const Building = ({step}) => {

  const dispatch = useDispatch();
    
  const handleBuildingType = (data) => {
    dispatch(onStart(data));
  };

    return (
        <div>
        <Template step={`Шаг ${step}`} title={"Что будем строить?"}>
          <ul className="building">
            <li onClick={() => handleBuildingType(1)}>
              <a href="#">Жилой дом</a>
            </li>
            <li onClick={() => handleBuildingType(2)}>
              <a href="#">Гараж</a>
            </li>
          </ul>
        </Template>
      </div>
    );
}

export default Building;