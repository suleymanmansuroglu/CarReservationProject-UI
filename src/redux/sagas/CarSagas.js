import { takeEvery, put, fork } from "redux-saga/effects";

import * as actions from "../actions/CarActions";
import { AddCar, GetCars } from "../../api/CarApi";

function* getCars() {
  let response = yield GetCars();
  if (!response.data.success) {
    yield put(actions.setCars([]));
  } else {
    yield put(actions.setCars(response.data.resultObject));
  }
}

function* addCar(action) {
  if (action) {
    let response = yield AddCar(action.payload);
    if (!response.data.success) {
      yield put(actions.checkCarAdded(false));
    } else {
      yield put(actions.checkCarAdded(true));
    }
  }
}

function* watchAddCar() {
  yield takeEvery(actions.actionTypes.ADD_CAR, addCar);
}

const CarSagas = [fork(watchAddCar), fork(getCars)];
export default CarSagas;
