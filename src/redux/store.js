import { createStore, combineReducers } from 'redux';
import goodsReducer from './reducers/goodsReducer';
import userListReducer from './reducers/userListReducer';


const reducers = combineReducers({
  goodsPage: goodsReducer,
  adminPanelPage: userListReducer
});

const store = createStore(reducers);

export default store;
