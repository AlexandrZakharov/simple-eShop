import { createStore, combineReducers } from 'redux';
import goodsReducer from './reducers/goodsReducer';

const reducers = combineReducers({
  goodsPage: goodsReducer,
});

const store = createStore(reducers);

export default store;
