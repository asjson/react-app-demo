// import { delay } from 'redux-saga';
// const delay = ms=>new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve()
//     },ms)
// });

import {takeEvery, put, call, delay} from 'redux-saga/effects';

export function* incrementAsync() {
    // yield call(delay, 2000)
    // yield put({ type: 'INCREMENT', count:10 })
    yield delay(2000)
    yield put({ type: 'INCREMENT'})
};

export function* watchIncrementAsync() {
    yield takeEvery('INCREMENT_ASYNC', incrementAsync)
};