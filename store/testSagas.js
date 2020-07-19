import { put, takeEvery, call} from "redux-saga/effects";
import * as Actions from "../store/actions";
export const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
export function* startAsync(){
    yield delay(2000);
    yield put(Actions.getName(["我是隐形"]))
}


export function* getError(){
    yield call(delay, 3000);
    yield put(Actions.getName(["出错了"]))
}
document.getElementById("f").addEventListener


export default function* watchAsync(){
   yield takeEvery("ok", startAsync);
   yield takeEvery("error", getError)
}