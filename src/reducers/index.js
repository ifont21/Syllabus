import { combineReducers } from 'redux';
import SubjectsReducer from './reducer_subjects';


const rootReducers = combineReducers({
    subjects : SubjectsReducer
});

export default rootReducers;
