import { createStore } from 'redux';

import Reducers from './reducers/Index';

const store = createStore(Reducers);

export default store;