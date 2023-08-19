import { combineReducers } from 'redux';
import contactsReducer from './contactsSlice'; // Update this path

const rootReducer = combineReducers({
  contacts: contactsReducer,
});

export default rootReducer;
