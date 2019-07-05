import { createStore, applyMiddleware ,compose} from 'redux';
import reducer from './reducer';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import logger from 'redux-logger';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__|| compose;

const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(thunk,promise,logger))
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )

export default store;