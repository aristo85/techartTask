import axios from "axios";
import * as types from "./types";

export const onStart = (data) => {
  return {
    type: types.BILD_TYPE,
    data,
  };
};

export const onFloor = (data) => {
  return {
    type: types.BILD_FLOOR,
    data,
  };
};

export const onMaterial = (data) => {
  return {
    type: types.MATERIAL,
    data,
  };
};

export const onRestart = () => {
  return {
    type: types.RESTART,
  };
};

// ...............
export const getResult = (data) => {
  return async (dispatch, getState) => {
    const { building, height, material } = getState().counter;
    try {
      // get the result from the server
      const response = await axios.get(
        `https://data.techart.ru/lab/json/?building=${building}&height=${height}&material=${material}&sizex=${data.sizex}&sizey=${data.sizey}`
      );

      const { result, message } = response.data;

      dispatch({
        type: types.GET_RESULT,
        data: { result, message },
      });
    } catch (err) {
      console.log(err);
    }
  };
};
