import { combineReducers } from 'redux';
import productsSessionReducer from './components/prefabs/ProductSession/reducer';

const rootReducer = combineReducers({
  products: productsSessionReducer,
});

export default rootReducer;
