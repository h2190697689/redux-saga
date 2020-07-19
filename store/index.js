import reducer from "./reducer";
import {createStore,combineReducers,applyMiddleware} from "redux";
import createSagaMiddleware from 'redux-saga';
import saga from "./testSagas";


const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    reducer,
    applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(saga)


export default store;