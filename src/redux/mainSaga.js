import { all, takeEvery, take } from "redux-saga/effects";


//@BlueprintReduxSagaImportInsertion
import CalendarView122197Saga from '../features/CalendarView122197/redux/sagas';
import EmailAuth122195Saga from '../features/EmailAuth122195/redux/sagas';

function* helloSaga() {
  console.log("Hello from saga!");
}

export function* mainSaga() {
  yield all([
    takeEvery("TEST/ALO", helloSaga),
    // other sagas go here


    //@BlueprintReduxSagaMainInsertion
CalendarView122197Saga,
EmailAuth122195Saga,
    
  ]);
}