import { combineReducers } from 'redux';
import productsSessionReducer from './components/prefabs/ProductSession/reducer';
import carouselReducer from './components/prefabs/Carousel/reducer';

const rootReducer = combineReducers({
  products: productsSessionReducer,
  carousel: carouselReducer,
});

export default rootReducer;
