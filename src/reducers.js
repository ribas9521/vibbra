import { combineReducers } from 'redux';
import productsLayoutReducer from './components/prefabs/ProductsLayout/reducer';
import carouselReducer from './components/prefabs/Carousel/reducer';

const rootReducer = combineReducers({
  products: productsLayoutReducer,
  carousel: carouselReducer,
});

export default rootReducer;
