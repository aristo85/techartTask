import * as types from "./types";

const initialState = {
  building: null,
  height: null,
  material: null,
  result: null,
  message: null,
  step: 1,
  screens: 1,
};

export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.BILD_TYPE:
      let newScreen = action.data === 1 ? 2 : 3;
      return {
        ...state,
        building: action.data,
        step: state.step + 1,
        screens: newScreen,
      };

    case types.RESTART:
      return initialState;

    case types.BILD_FLOOR:
      return {
        ...state,
        height: action.data,
        step: state.step + 1,
        screens: 3,
      };

    case types.MATERIAL:
      return {
        ...state,
        material: action.data,
        step: state.step + 1,
        screens: 4,
      };

    case types.GET_RESULT:
      return { ...state, ...action.data, screens: 5 };

    default:
      return state;
  }
};
