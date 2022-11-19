import { all } from 'redux-saga/effects';
import CarSagas from './CarSagas';

export default function* rootSaga(){
    yield all([
        ...CarSagas,

    ])
}