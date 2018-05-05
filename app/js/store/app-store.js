import { createStore } from 'redux';

import reducer from '../reducers/app-reducer';

const store = createStore(reducer);
export default store;
