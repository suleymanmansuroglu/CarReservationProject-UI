import { actionTypes } from "../actions/CarActions";

const initialState = {
  cars: [],
  checkCarAdded: false,
};

export const CarReducers = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.SET_CARS:
      return { ...state, cars: payload };
    case actionTypes.CHECK_CAR_ADDED:
      return { ...state, checkCarAdded: payload };
    default:
      return state;
  }
};
