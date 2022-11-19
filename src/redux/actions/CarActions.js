export const actionTypes = {
  GET_CARS: "GET_CARS",
  SET_CARS: "SET_CARS",
  ADD_CAR: "ADD_CAR",
  CHECK_CAR_ADDED: "CHECK_CAR_ADDED",
};

export function getCars() {
  return { type: actionTypes.GET_CARS };
}

export function checkCarAdded(payload) {
  return { type: actionTypes.CHECK_CAR_ADDED, payload: payload };
}

export function setCars(payload) {
  return { type: actionTypes.SET_CARS, payload: payload };
}

export function addCar(payload) {
  return { type: actionTypes.ADD_CAR, payload: payload };
}
