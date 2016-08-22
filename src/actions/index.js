import axios from 'axios';

export const FETCH_SUBJECTS = 'FETCH_SUBJECTS';

const ROOT_URL = 'http://localhost:3000';

export function fetchSubjects(){
 const request = axios.get(`${ROOT_URL}/programs/1/subjects`);
 
 return {
     type: FETCH_SUBJECTS,
     payload: request
 };
}