import {  FETCH_SUBJECTS } from '../actions/index';

const INITIAL_STATE = { all: [], subject: null};

export default function(state = INITIAL_STATE, action){
 switch(action.type){
     case FETCH_SUBJECTS:
         return { ...state, all: action.payload.data};
     default:
         return state;
 }

}