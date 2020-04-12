import { combineReducers } from 'redux';
import productsLayoutReducer from './components/prefabs/ProductsLayout/reducer';
import carouselReducer from './components/prefabs/Carousel/reducer';
import loginReducer from './components/screens/LoginScreen/reducer';
import productDetailsReducer from './components/screens/ProductDetailsScreen/reducer';
import { reducer as toastrReducer } from 'react-redux-toastr';

const rootReducer = combineReducers({
  products: productsLayoutReducer,
  carousel: carouselReducer,
  login: loginReducer,
  toastr: toastrReducer,
  productDetails: productDetailsReducer,
});

export default rootReducer;
