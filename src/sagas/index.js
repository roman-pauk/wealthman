import { takeLatest } from 'redux-saga/effects'

function* someSaga() {
    // make some async staff
    yield new Promise(res => {
        setTimeout(() => res(), 2000)
    })
    console.log('SOME_ACTION')
}
  
export default function* saga() {
    yield takeLatest('SOME_ACTION', someSaga)
    // and for each action the same staff ...
}