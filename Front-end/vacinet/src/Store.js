import { createStore } from 'redux';
import AsyncStore from '@react-native-community/async-storage';
import { persistStore, persistReducer } from 'redux-persist';

import Reducers from './reducers/Index';

const persistedReducer = persistReducer({
  key:'root',
  storage:AsyncStore,
  whitelist:['userReducer','healthReducer','cadastroReducer'],
  
}, Reducers);


const store = createStore(persistedReducer);

let persistor = persistStore(store);

export{ store, persistor};