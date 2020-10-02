import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import CalendarView122197Reducer from '../features/CalendarView122197/redux/reducers';
import EmailAuth122195Reducer from '../features/EmailAuth122195/redux/reducers';

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
CalendarView122197: CalendarView122197Reducer,
EmailAuth122195: EmailAuth122195Reducer,

});