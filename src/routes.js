import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import SyllabusIndex from './components/syllabus_index';

export default (
 <Route path="/" component={App} >
   <IndexRoute component={SyllabusIndex} />
 </Route>
);