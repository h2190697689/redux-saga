/**
 * Created by guangqiang on 2017/12/17.
 */
import { put, call, take,fork } from 'redux-saga/effects';
import { takeEvery, takeLatest, fork } from 'redux-saga';
import {addItemFlow} from '../sagas/inputSaga'
import {removeItemFlow, toggleItemFlow, modifyItem} from '../sagas/listSaga'

export const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

function* incrementAsync() {
  // 延迟 1s 在执行 + 1操作
  yield call(delay, 1000);
  yield put({ type: 'INCREMENT' });
}

export default function* rootSaga() {
  // while(true){
  //   yield take('INCREMENT_ASYNC');
  //   yield fork(incrementAsync);
  // }

  // 下面的写法与上面的写法上等效
  // yield* takeEvery("INCREMENT_ASYNC", incrementAsync)


    // 多个任务
    yield fork(addItemFlow)
    yield fork(removeItemFlow)
    yield fork(toggleItemFlow)
    yield fork(modifyItem)
}